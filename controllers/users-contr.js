const User = require('../models/users');
const Ticket = require('../models/tickets');

exports.getAuth = (req,res)=>{
   res.render('auth.ejs');
}

exports.postAuth = (req,res)=>{
const userName = req.body.name.trim();
const pass = req.body.pass.trim();
if(userName == '' || pass == ''){
   res.redirect('/ticket-shop');
   return;
}
const userId = Math.random().toFixed(12).toString().substr(3);

User.findOne({name:userName}).then(result => { 
   if(!result){
      const user = new User({
         _id:userId,
         name:userName,
         password:pass
      
      }).save().then(()=>{
         req.session.isAuth = true;
         req.session.name = userName;
         req.session.userId = userId;
         res.redirect('/ticket-shop/buy');
         return;
      });
}

   if(result.password == pass){
         req.session.isAuth = true;
         req.session.name = userName;
         req.session.userId = result._id;
         res.redirect('/ticket-shop/buy');
         return;
 }  
})
}


exports.getOrderTicket = (req,res) => {  
res.render('create.ejs');
}

exports.getSubmit = (req,res)=>{
   res.render('submit.ejs');
}

exports.postCreateOrder = (req,res) => {
   const ticketName = req.body.select;
   const ticketId = Math.random().toString().substr(3);
   // const date = new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear();
   const ticket = new Ticket({
      _id:ticketId,
      ticket:ticketName,
      userId:req.session.userId,
      priority:poorRandomizer(),
      createdAt: new Date()
   });
   ticket.save();
   res.redirect('/ticket-shop/submit');
   }




const poorRandomizer = ()=>{   /// for randomize priority 
   let p = (Math.random() * 4);
   if(p < 1 || p == 1){
      p = "1";
   }else if(p > 2 || p == 2){
      p = "2"
   }else{
      p = "3"
   }
   return p;
}


exports.getTickets = (req,res)=>{
      const queries = {};

      if(req.query.priority){
         queries.priority = req.query.priority;
      }
      if(req.query.userId){
         queries.userId = req.query.userId;
      }
      if(req.query.sort == 'desc'){
         Ticket.find(queries).sort({createdAt:'desc'})
         .then(result =>{
            res.render('tickets.ejs',{tickets:result});
         }); 
       return; 
      }

      Ticket.find(queries).sort({createdAt:'asc'})
   .then(result =>{
      res.render('tickets.ejs',{tickets:result});
   });
}

