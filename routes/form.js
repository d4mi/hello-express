var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  console.log(req.session);
  res.render('form');
});

router.post('/submit', function(req, res) {
  console.log(req.body);
  res.render('form');
});

module.exports = router;