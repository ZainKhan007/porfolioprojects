var socket = io.connect('http://localhost:3000/');

var message = document.getElementById('message');
var handle = document.getElementById('handle');
var send = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

send.addEventListener('click',function() {
  socket.emit('chat',{
    message : message.value,
    handle : handle.value
  });

  message.value="";
});

message.addEventListener('keyup',function() {
  socket.emit('typing',handle.value);
  feedback.innerHTML = "";
});

socket.on('chat',function(data) {
  feedback.innerHTML = "";
  output.innerHTML += "<p class='bubble'><strong>"+data.handle+" says:  "+"</strong> "+data.message+"</p>";
})
socket.on('typing',function(data) {
  if (data != "" || data != null) {
    feedback.innerHTML = "<p><em>"+data+" is typing a message</em></p>";
  }
  else {
    feedback.innerHTML = "";
  }
})

function white() {
  var image = document.getElementsByTagName('img')[0];
  image.src = "/images/send-white.png";
  image.style.height = "50px";
}
function black() {
  var image = document.getElementsByTagName('img')[0].src = "/images/send.png";
}
