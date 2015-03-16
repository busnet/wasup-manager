var express = require('express');
var router = express.Router();
var whatsapi = require('../node-whatsapi/whatsapi');
var events = require('events');
var util = require('util');

/* Post wasup messge */
router.get('/send', function(req, res, next) {
	/*var wa = new whatsapi.createAdapter();
	util.inherits(wa, events.EventEmitter);

	wa.on('error', function(e){
		console.log(e);			
	})

	wa.connect();
	
	wa.on('connect', function(){
		console.log("connected to WA server");
		wa.login();
	});

	wa.on('login', function(){
		console.log("Logged in to WA server");
		wa.sendIsOnline();
		wa.sendMessage(§, 'בדיקה בעברית', '[message-1443256747-1]');
		wa.disconnect();
	});
*/
  res.render('index', { title: 'wasup' });
});

module.exports = router;