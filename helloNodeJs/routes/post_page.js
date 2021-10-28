var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('post_page', { title : 'post_page' });
});

module.exports = router;
