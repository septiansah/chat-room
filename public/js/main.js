const socket = io('localhost:3000', {withCradetials: false})

const chatForm = document.getElementById('chat-form');
const chatMessage = document.querySelector('.chat-messages');
const exitChat = document.querySelector('#leave-btn')

const {username, room} = Qs.parse(location.search, {
    ignoreQueryPrefix: true
})

console.log(username, room)

//Join room
socket.emit('joinRoom', {username, room})

//message from server
socket.on('message', (msg) => {
   
    console.log("DATA MSG ", msg)
      
    outputMessgae(msg)
    chatMessage.scrollTop = chatMessage.scrollHeight;
})

chatForm.addEventListener('submit', (e) => {

    e.preventDefault();
    const msg = e.target.elements.msg.value;
    const topic = 1;

    e.target.elements.msg.value = '';
    e.target.elements.msg.focus()
    //emit message to server
    socket.emit('chatMessage', msg, topic)
})

function outputMessgae(msg){
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">${msg.username} <span>${msg.time}</span></p>
    <p class="text">
        ${msg.text}
    </p>`;
    document.querySelector('.chat-messages').appendChild(div);
}
document.getElementById('leave-btn').addEventListener('click', () => {
    const leaveRoom = confirm('Are you sure you want to leave the chatroom?');
    if (leaveRoom) {
      window.location = '../index.html';
    } else {
    }
  });
 