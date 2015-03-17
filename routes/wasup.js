var express = require('express');
var router = express.Router();
//var nexpect = require('nexpect');
var sys = require('sys');
var exec = require('child_process').exec;

var LOGIN_CREDENTIALS = "972509535350:qWhxZEDvogJMAplIaRyGLcwz8KI=";

var sendWasup = function(phone, msg){
	var regex = "Message sent";
	var cmd = "./yowsup-cli demos -s "+ phone +" \""+msg+"\" -l "+ LOGIN_CREDENTIALS;
	var child = exec(cmd, function (error, stdout, stderr) {
		  sys.print('stdout: ' + stdout);
		  sys.print('stderr: ' + stderr);
		  if (error !== null) {
		    console.log('exec error: ' + error);
		  }
		});	
}

/* Post wasup messge */
router.post('/send', function(req, res, next) {
	var msg = req.body.msg;
	var phones = req.body.phones;
	console.log(req.body);
	for(var i=0; i<phones.length; i++){
		sendWasup(phones[i], msg);
	}
	res.render('index', { title: 'wasup' });
});



module.exports = router;