var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('get_page', { title : 'get_page' });
});

module.exports = router;
