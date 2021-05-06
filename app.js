const express = require('express');
const session = require('express-session');
const router = require('./routes/tickets');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
   secret:'crackhead',
   resave:false,
   saveUninitialized:false,
   name:'ticket-shop'
}));
app.use('/ticket-shop',router);
app.use(express.static(path.join(__dirname,'public')));


mongoose.connect('mongodb+srv://link777:liYzsvZKJulCa4wr@devcom.kfxnz.mongodb.net/DevCom?retryWrites=true&w=majority').then(result =>{
   app.listen(3000);
}).catch(err => {
   console.log(err);
})
