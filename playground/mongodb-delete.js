const {MongoClient}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApi',(err,db)=>
{
    if(err)
    {
    return  console.log("unable to make connection to mongodb server");
    }
    console.log("Successfully connected to mongodb server");


//deleteOne
// db.collection('Todos').deleteOne({name:'sai krishna'}).then((result)=>{
//     console.log(result);
// });
//deleteMany
// db.collection('Todos').deleteMany({name:'Andrew'}).then((result)=>{
//     console.log(result);
// });
//findOneandDelete
db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    console.log(result);
});


    db.close();
});