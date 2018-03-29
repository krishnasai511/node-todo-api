const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApi',(err,db)=>
{
    if(err)
    {
    return  console.log("unable to make connection to mongodb server");
    }
    console.log("Successfully connected to mongodb server");

// db.collection('Todos').findOneAndUpdate({
//     _id:new ObjectID('5abc890be02f40d8915fc45c')
// },{
//     $set :{
//         completed : true
//     }
// },{
//     returnOriginal :false
// }).then((result)=>{
// console.log(result);
// })

db.collection('Todos').findOneAndUpdate({
    _id:new ObjectID('5abc890be02f40d8915fc45c')
},{
    $set :{
        name : "Rajnikanth"
    },
   $inc : {
       age : 1
    }
},{
    returnOriginal :false
}).then((result)=>{
console.log(result);
})


    db.close();
});