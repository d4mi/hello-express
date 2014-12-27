var express = require('express');
var router = express.Router();

var usersDB = {
  admin : 'e00cf25ad42683b3df678c61f42c6bda', // admin1
  user  : 'ee11cbb19052e40b07aac0ca060c23ee', // user
  nowy  : '207023ccb44feb4d7dadca005ce29a64', // haslo
};

var md5 = function(value) {
  return crypto.createHash('md5').update(value).digest("hex");
};

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a login');
});

router.post('/', function(req, res) {
  var user = req.param('user');
  var pass = req.param('pass');
 
  req.method = 'GET';
  console.log(typeof usersDB[user]);
  if( typeof usersDB[user] !== 'undefined') {
  		if( usersDB[user] === pass ) {
  			console.log("Render form");
 			res.redirect(304, '/form'); 
  		}
  		else {
  			console.log("Wrong credentials");
			res.send('Wrong credentials');
  		}
   }

  console.log(user + " " + pass);
});


module.exports = router;
