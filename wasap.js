var sys = require('sys');
var exec = require('child_process').exec;
var util = require('util');
var winston = require('winston');

var LOGIN_CREDENTIALS = '972509535350:oXHTgQ19dAADFGQlaO8Q5xV3wXs=';

var sendWasup = function(data, result){
	var regex = "Message sent";
	var cmd = util.format('./yowsup-cli demos -s %s \"%s\" -l %s', data.phone, data.msg, LOGIN_CREDENTIALS);
	winston.info(cmd);
	var child = exec(cmd, function (error, stdout, stderr) {
		winston.info('stdout: ' + stdout);
		winston.info('stderr: ' + stderr);
		if (error !== null) {
			winston.error('exec error: ' + error);
		}
		result(error, data);
	});
}

module.exports.send = sendWasup;