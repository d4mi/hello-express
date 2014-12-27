var express = require('express');
var http = require('http');
var WebSocketServer = require('websocket').server;

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  console.log(req.session);
  res.render('form2');
});


var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});

wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

wsServer.on('request', function(request) {
		var connection = request.accept(null, request.orgin);
	    // console.log((new Date()) + ' Connection accepted.');
	    connection.on('message', function(message) {
	    	console.log("Message: " + message.utf8Data);
	       if( message.utf8Data === 'pierwszy') {
	       		connection.sendUTF("<select> \
	   				<option value='volvo'>Volvo</option> \
	   				<option value='saab'>Saab</option> \
	   				<option value='mercedes'>Mercedes</option> \
	   				<option value='audi'>Audi</option> \
					 </select>".decode('utf-8'));
	       }
	       else if( message.utf8Data === 'drugi' ) {
	       		console.log('drugi !')
	       		connection.sendUTF("<select> \
	   				<option value='abc'>abc</option>\
	   				<option value='def'>def</option>\
	   				<option value='ghi'>ghi</option>\
	   				<option value='jkl'>jkl</option>\
					 </select>");
	       }
	       else if( message.utf8Data === 'trzeci' ) {
	       		connection.sendUTF("<select>\
	   				<option value='1'>lista 1</option>\
	   				<option value='2'>lista 2</option>\
	   				<option value='3'>lista 3</option>\
	   				<option value='4'>lista 4</option>\
					 </select>");
	       	
	       }
	       else if( message.utf8Data === 'czwarty' ) {
	       		connection.sendUTF("<select>\
	   				<option value='1'>przyklad 1</option>\
	   				<option value='2'>przyklad 2</option>\
	   				<option value='3'>przyklad 3</option>\
	   				<option value='4'>przyklad 4</option>\
					 </select>");
	       }

	    });
	     
	    
	    connection.on('close', function(reasonCode, description) {
	         console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
	     });
});


module.exports = router;