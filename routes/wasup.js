var express = require('express');
var router = express.Router();
var nexpect = require('nexpect');

var sendWasup = function(phone, msg){
	var regex = /^.*Message sent/;
	var cmd = "./yowsup-cli demos -s "+ phone +" '"+ msg +"'  --login 972509535350:qWhxZEDvogJMAplIaRyGLcwz8KI=";
	nexpect.spawn(cmd)
		.expect(regex)
		.run(function (err, stdout, exitcode) {
			if(err){
				console.log(cmd);
			}
			if (!err) {
				console.log("message sent");
			}
		});
}

/* Post wasup messge */
router.post('/send', function(req, res, next) {
	var msg = req.body.msg;
	var phones = req.body.phones;
	for(var i=0; i<phones.length; i++){
		sendWasup(phones[i], msg);
	}
	res.render('index', { title: 'wasup' });
});



module.exports = router;