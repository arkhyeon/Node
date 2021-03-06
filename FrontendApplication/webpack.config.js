const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (env) => {
    let clientPath = path.resolve(__dirname, 'src/main/client');
    let outputPath = path.resolve(__dirname, (env == 'production') ? 'src/main/resources/static' : 'out')

    return {
        mode: 'development',
        // mode: !env ? 'development' : env,
        entry: {
            vendors: [ 'jquery', 'moment' ],
            index: clientPath + '/index.js'
        },
        output: {
            path: outputPath,
            filename: '[name].js'
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                      test: /[\\/]node_modules[\\/]/,
                      name: 'vendors',
                      chunks: 'all',
                    },
                  },
            },
            minimizer: (env == 'production') ? [
                new UglifyJsPlugin(),
                new OptimizeCssAssetsPlugin()
            ] : []
        },
        devServer: {
            contentBase: outputPath,
            publicPath: '/',
            host: '0.0.0.0',
            port: 8282,
            proxy: {
                '**': 'http://192.168.10.249:8282'
            },
            inline: true,
            hot: false
        },
        module: {
            rules: [{
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                                    presets: ["@babel/preset-env"],
                                    plugins: ["@babel/plugin-proposal-class-properties"]
                                  }
                        
                }]
            }, {
                test: /\.(css)$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: 'css-loader'
                }]
            }, {
                test: /\.(jpe?g|png|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024 * 10 // 10kb
                    }
                }]
            }, {
                test: /\.(svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/'
                    }
                }]
            }]
        },
        plugins: [
            new MiniCssExtractPlugin({
                // path: outputPath,
                filename: '[name].css'
            })
            // , new BundleAnalyzerPlugin()
        ]
    }
}