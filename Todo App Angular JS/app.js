var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//template engine setup
app.set('view engine','ejs');

// static files setup
app.use(express.static('./public'));

//fire controllers
todoController(app);

// port listening
app.listen(3000);
console.log("your app is running");
