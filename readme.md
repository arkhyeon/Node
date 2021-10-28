# npm 생성
    - npm init -y

#### express 생성
    1. npm install express-generator -g
    2.express -h
    3.express --view=pug myapp(appName)
    4.종속 항목 설치
    cd myapp
    npm install

    npm start

    * nodemodules는 gitignore할 것 package.json에 기록되어 나중에 npm init하면 불러옴.

#### EJS(Embedded JavaScript)
    - Express에서 dynamic website를 위해 template으로 사용되는 파일(확장자 이름은 .ejs)
    npm install --save ejs
    
    - app.js ejs 사용 등록
    app.set('view engine','ejs');
    
    - ejs파일들 정적(static) 폴더 추가
    app.use(express.static(__dirname + '/public(파일 경로)'));

#### 함수
    - require(모듈_이름) modules폴더 안에 설치된 모듈을 불러오는 함수 

    - 실행 순서
    app.get > get 요청 > app.listen 실행

    - app.HTTP_Method_중_하나('Route_주소', 콜백_함수, 콜백_함수, 콜백_함수...)
    콜백함수 : function(request, reponse, next(콜백 함수)){}

    - app.use(function(req, res, next)
    HTTP method나 route에 상관없이 서버에 요청이 올 때마다 콜백함수가 실행