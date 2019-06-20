const { io } = require('../server');

io.on('connection', (client) => {
	console.log('User connected');

	client.emit('sendMessage', {
		user: 'Admin',
		message: 'Welcome martian'
	});

	client.on('disconnect', () => {
		console.log('User disconnected');
	});

	// Listen to client
	client.on('sendMessage', (data, callback) => {
		console.log(data);

		client.broadcast.emit('sendMessage', data);

		/*if (message.user) {
			callback({
				resp: 'Everything is fine!'
			});
		} else {
			callback({
				resp: 'Everything is wrong!'
			});
		}*/
	});
});