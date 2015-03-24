var express = require('express');
var router = express.Router();
var SqsQueueParallel = require('sqs-queue-parallel');

/* Post wasup messge */
router.post('/send', function(req, res, next) {
	var msg = req.body.msg;
	var phones = req.body.phones;
	
	//temporary numbers
	phones = [972587184392, 972535399999, 972547355879];
	
	var queue = new SqsQueueParallel({
	    name: "busnet-wasap",
	    region: "us-west-2"
	});

	for(var i=0; i<phones.length; i++){
		var body = {
			phone: phones[i],
			msg: msg
		};
		queue.sendMessage({
		    body: body,
		    delay: 10
		});
	}
	res.render('index', { title: 'wasup' });
});


module.exports = router;