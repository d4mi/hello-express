var express = require('express');
var basicAuth = require('basic-auth');
var crypto = require('crypto');
var router = express.Router();

var auth = function (req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.send(401);
  }

  console.log("Called");

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  }

  if (user.name === 'admin' && user.pass === 'admin1') {
    return next();
  } else {
    return unauthorized(res);
  }
};

/* GET home page. */
router.get('/', auth, function(req, res) {
  res.render('index', { title: 'Projekt' });
});



module.exports = router;
