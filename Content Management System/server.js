var express = require("express");
var fs = require("fs");
var bodyParser = require("body-Parser");
var multer = require("multer");
var addr = require("getmac");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/assets',express.static('assets'));
app.use('/public',express.static('public'));
app.use('/controllers',express.static('controllers'));
app.use('/scripts',express.static('scripts'));
app.use('/views',express.static('views'));
app.use('/database',express.static('database'));
app.use('/img',express.static('img'));

app.get('/',function(req,res) {
  addr.getMac(function(err, mac){
    if (err)  throw err;
    else{
      var read = JSON.parse(fs.readFileSync(__dirname+ "/database/verify.json",'utf8'));
        if (read[0].addr1 == mac || read[0].addr2 == mac || read[0].addr3 == mac) {
          res.sendFile(__dirname+ "/public/index.html");
        }
        else {
          res.send("<h1> Buy Licence From Zain Khan BSE-6B");
        }
    }
})
});

app.post('/api/login',function(req,res) {
  var read = fs.readFileSync(__dirname+ "/database/login.json",'utf8');
  res.send(read);
});

app.get('/api/cms/posters',function(req,res) {
  var read = fs.readFileSync(__dirname+ "/database/post.json",'utf8');
  res.send(read);
});

const multerConf ={
  storage : multer.diskStorage({
    destination:function(req,file,next) {
      next(null,'./public/uploads')
    },
    filename: function(req,file,next) {
      const filename = file.originalname.split('.')[0];
      const ext = file.originalname.split('.')[1]
      next(null,filename+'-'+Date.now()+'.'+ext);
    }
  }),
  fileFilter: function(req ,file ,next) {
    if (!file) {
      next();
    }
    const image = file.mimetype.startsWith('image/');
    if (image) {
      next(null,true);
    }else {
      next({message:"file not supported"},false);
    }
  }
}

app.post('/api/post',function(req,res) {
    var read = fs.readFileSync(__dirname+ "/database/post.json",'utf8');
    var arr = JSON.parse(read);
    arr.push(req.body.basic);
    var post = JSON.stringify(arr,null,4);
    var write = fs.writeFile(__dirname+ "/database/post.json",post,function() {

    });
});

app.post('/api/uploadimage',multer(multerConf).single("imgupd"),function(req,res) {
  var read = fs.readFileSync(__dirname+ "/database/post.json",'utf8');
	  var arr = JSON.parse(read);
  if(req.file){
	  arr[arr.length-1]["imageUrl"] = './public/uploads/'+req.file.filename;
  }
  else{
	arr[arr.length-1]["imageUrl"] = './public/uploads/default.png';
  }
  var post = JSON.stringify(arr,null,4);
	  var write = fs.writeFile(__dirname+ "/database/post.json",post,function() {
	  });
});


app.listen(3000);
