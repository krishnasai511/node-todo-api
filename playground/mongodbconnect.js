// const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApi',(err,db)=>{
if(err)
{
 return  console.log("Unable to connect to Mongodb server");
}
console.log("Succesfully connected to Mongodb server");

// db.collection('Todos').insertOne({
//     title:"hi",
//     description:"hello nice to learn mongo"
// },(err,result)=>{
//     if(err)
//     {
//         return console.log("Error occured in inserting data",err);
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
// });
db.collection('Users').insertOne({
    name:"sai krishna",
    age:21,
    location:"Punjab"
},(err,result)=>{
    if(err)
    {
        return console.log("Unable to insert the document");
    }
    console.log(JSON.stringify(result.ops,undefined,2));
});

db.close();
});