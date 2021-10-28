var express = require('express');
var router = express.Router();
var app = express();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Exp13222ress' });
  console.log("a");
});
router.get('/a', function(req, res) {
  res.render('index', { title: 'A' });
  console.log(req.params("a"));
});

router.post('/a', function(req, res) {
  res.render('index', { title: 'B' });
});
module.exports = router;
