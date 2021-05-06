// const mongodb = require('mongodb');
// const mongoClient = mongodb.MongoClient;

// let _db;

// const mongoConnect = (cb)=>{

//    mongoClient.connect('mongodb+srv://link777:liYzsvZKJulCa4wr@devcom.kfxnz.mongodb.net/DevCom?retryWrites=true&w=majority')
//    .then( client =>{
//       console.log('Connected');   /// if we use mongoDB without mongoose
//       _db = client.db();
//       cb();
//    })
//    .catch(err => {
//       console.log("DB Connection error!");
//       console.log(err);
//       throw err;
//    });

// }

// const getDb = ()=>{
//    if(_db){
//       return _db;
//    }
//    throw 'No db found';
// }

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;
