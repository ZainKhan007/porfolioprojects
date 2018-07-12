var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require("body-parser");
var app = express();
var db = mongojs('contactlist',['contactlist']);

app.use(express.static(__dirname+"/public"))
app.use(bodyParser.json())

app.get('/contactlist',function(req,res) {
  db.contactlist.find(function(err,data) {
    if (!err) {
      res.json(data);
    }
    else {
      throw err;
    }
  });
})

app.post('/addcontact',function(req,res) {
  db.contactlist.insert(req.body,function(err,doc) {
    res.json(doc);
  });
})

app.delete('/removecontact/:id',function(req,res) {
  var id = req.params.id;
  db.contactlist.remove({_id:mongojs.ObjectId(id)},function(err,doc) {
    res.json(doc);
  });
})

app.get('/editcontact/:id',function(req,res) {
  var id = req.params.id;
  db.contactlist.findOne({_id:mongojs.ObjectId(id)},function(err,data) {
      res.json(data);
  });
})

app.put('/updatecontact/:id',function(req,res) {
  var id = req.params.id;
  db.contactlist.findAndModify({Query: {_id: mongojs.ObjectId(id)},
    update:{$set: {name: req.body.name, email: req.body.email, phone: req.body.phone}},
  new: true},function(err,data) {
      res.json(data);
      console.log(data)
  });
});
app.listen(3000);
console.log("server is up now")
