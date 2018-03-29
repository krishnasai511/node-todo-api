var express=require('express');
var bodyparser=require('body-parser');


var {mongoose}=require('./db/mongoose');
var {Todo} =require('./models/Todo');
var {User} =require('./models/users');


var app=express();

app.use(bodyparser.json());

app.post('/todos',(req,res)=>{
    var todo=new Todo({
   text : req.body.text
      });


todo.save().then((doc)=>{
    res.send(doc);
},(e)=>{
    res.send(e);
});
});

app.listen(3000,()=>{
    console.log("starting server at 3000");
});