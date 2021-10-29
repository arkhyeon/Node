var express = require('express');
var router = express.Router();

router.get('/', function(req,res){ // 2
  res.render('hello_page', {name:req.query.nameQuery});
});

router.get('/hello_page/:nameParam', function(req,res){ // 3
  res.render('hello_page', {name:req.params.nameParam});
});

module.exports = router;