const {MongoClient}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApi',(err,db)=>
{
    if(err)
    {
    return  console.log("unable to make connection to mongodb server");
    }
    console.log("Successfully connected to mongodb server");

// db.collection('Todos').find({completed : false}).toArray().then((docs)=>{
//     console.log('Todos');
//     console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//     console.log("Error occured in fetching the Todos");
// });
// db.collection('Todos').find().count().then((count)=>{
       
//         console.log(`Todos count: ${count}`);
//     },(err)=>{
//         console.log("Error occured in fetching the Todos");
//     });




db.collection('Todos').find({name :'Andrew'}).toArray().then((docs)=>{
       
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log("Error occured in fetching the Todos");
    });
    db.collection('Todos').count({name :'Andrew'}).then((count)=>{
       
        console.log(count);
    },(err)=>{
        console.log("Error occured in fetching the Todos");
    });

    db.close();
});