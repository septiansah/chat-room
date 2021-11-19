const path = require('path');
const express = require('express');
const http = require('http');
const socket = require('socket.io');
const formatMessage = require('./utils/messages');
const {userJoin, getCurrentuser, userLeave, getRoom} = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socket(server);
const PORT = 3000 || process.env.PORT;

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

const chatBot = 'SEbot';

//run when client connect

io.on('connection', socket => {
    console.log('new WS connection...')

    //join room chat
    socket.on('joinRoom', ({username, room}) => {
        const user = userJoin(socket.id, username, room);
        socket.join(user.room);

        //sanding message to everyone who joining to room
        socket.emit('message', formatMessage(chatBot, 'Selamat datang di SEchat'));

        socket.broadcast.to(user.room).emit('message', formatMessage(chatBot,`${user.username} bergabung di SEchat room`));
    })

    //sanding email
    socket.on('chatMessage', (msg, topic) => {
        const user = getCurrentuser(socket.id);        
        io.to(user.room).emit('message', formatMessage(user.username, msg))
     });

    socket.on('disconnect', () => {
        const user = userLeave(socket.id);
        if (user) {
            io.to(user.room).emit('message', formatMessage(chatBot, `${user.username} telah meninggalkan SEchat`));
        }
       
    });

    
})

server.listen(PORT, () =>{console.log('server running on port %i', PORT)})