const io = require('socket.io')(3000)

io.on('connection', socket => {//give own socket when open the browser. adds a listner
    socket.emit('chat-messages', "Hello World")//execute the event with args for listners
})