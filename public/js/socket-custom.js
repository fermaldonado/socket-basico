var socket = io();

//Listeners
socket.on('connect', function () {
	console.log('Connected to server');
});

socket.on('disconnect', function () {
	console.log('Connection lost with server');
});

//Emitters
socket.emit('sendMessage', {
	user: 'Fercho',
	message: 'Hello'
}, function (res) {
	console.log('res:', res);
});

//Listen to info
socket.on('sendMessage', function (res) {
	console.log('Server: ', res);
});
