const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
   _id: {
      type: String,
      reqired: true
   },
   name: {
      type: String,
      reqired: true
   },
   password: {
      type: String,
      reqired: true
   }
});

module.exports = mongoose.model("Users",usersSchema);

































// const getDb = require('../util/database').getDb;

// class Users {
//  constructor(id,name,pass){            
//    this._id = id;
//    this.name = name;
//    this.password = pass;
//  }  

//  save(){
//    const db = getDb();
//    db.collection('users').insertOne(this)
//    .then(result => {
//       // console.log(result);
//    })
//    .catch( err =>{
//       console.log(err);
//    });
//  }

//  static fetchAll(name){
//       const db = getDb();
//        return db.collection('users').find({name:name}).toArray()
//        .then(users => {
//           console.log(users);
//           return users;
//        })
//        .catch(err => {
//           console.log(err);
//        });
//  }
// }

// module.exports = Users;