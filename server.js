var SqsQueueParallel = require('sqs-queue-parallel');
var winston = require('winston');
var wasap = require('./wasap');

var queue = new SqsQueueParallel({
    name: "busnet-wasap",
    region: "us-west-2",
    maxNumberOfMessages: 1,
    concurrency: 1
});

winston.info(process.env.AWS_ACCESS_KEY);

queue.on('message', function (e)
{
    winston.info('New message: ', e.metadata, e.data.MessageId);
	// Now this is where you'd do something with this message
	wasap.send(e.data, function(err, data){
		if(!err){
			e.deleteMessage(function(err, data) {
				if(err){
					winston.error(err);
				}
		        e.next();
		    });
		}else{
			winston.error(err);
		}
	});
});

queue.on('error', function (err)
{
    winston.error('There was an error: ', err);
});