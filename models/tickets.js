const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
   _id: {
      type: String,
      reqired: true
   },
   ticket: {
      type: String,
      reqired: true
   },
   userId: {
      type: String,
      reqired: true
   },
   priority: {
      type: Number,
      reqired: true
   },
   createdAt: {
      type: Date,
      reqired: true
   }
});



module.exports = mongoose.model("Tickets",ticketSchema);










































// const getDb = require('../util/database').getDb;

// class Tickets {
//    constructor(id,name,userId,priority,createdAt){          
//       this._id = id;
//       this.name = name;
//       this.userId = userId;
//       this.priority = priority;
//       this.createdAt = createdAt;
//    }  
  
//    save(){
//      const db = getDb();
//      db.collection('tickets').insertOne(this)
//      .then(result => {
//       //   console.log(result);
//      })
     
//      .catch( err =>{
//         console.log(err);
//      });
//    }
  
//    static fetchAll(filter){
//       if(filter){
//          const db = getDb();
//           return db.collection('tickets').agregate({
//              $match: {
//                 priority: filter.priority
//              }
//           }).toArray()
//           .then(tickets => {
//              console.log(tickets);
//              return tickets;
//           })
//           .catch(err => {
//              console.log(err);
//           });
//       }
//    }
//   }
  
//   module.exports = Tickets;