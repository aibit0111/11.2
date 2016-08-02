var express = require('express');
var app = express();
var path = require('path');

app.get('/',function(req,res){
    res.sendFile('index.html',{root:path.join(__dirname)});
    console.log("request has been made");
});

app.post('/',function(req,res){
   res.send("Your Name has been submmited" );
});

app.listen(909,function(req,res){
    console.log("server has started");
});