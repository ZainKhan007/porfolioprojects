var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to the mongoDB
mongoose.connect('mongodb://test:test@ds231588.mlab.com:31588/todoapp');

// Create a schema = this is like a blue print

var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);


var data = [{item: 'get milk'},{item: 'walk dog'}, {item: 'kick some coding ass'}];
var urlEncodedParser = bodyParser.urlencoded({extended:false});

module.exports = function (app) {

app.get('/todo',function (req,res) {
  //get data from MongoDB and pass it to the view
  Todo.find({}, function (err,data) {
    if(err) throw err;
    res.render('todo',{todos:data});
  });
});

app.post('/todo',urlEncodedParser,function (req,res) {
//get data from view and add it to the mongoDB
  var newTodo = Todo(req.body).save(function(err,data) {
    if(err) throw err;
    res.json(data);
  });
});

app.delete('/todo/:item',function (req,res) {
  // delete requested item from mongoDB
  Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function (err,data) {
    if(err) throw err;
    res.json(data);
  });
});

};
