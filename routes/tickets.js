const express = require('express');
const router = express.Router();
const userController = require('../controllers/users-contr.js');
const middleware = require('../middleware/isAuth');



router.get('',userController.getAuth);

router.post('',userController.postAuth);

router.get('/buy',middleware.isAuth,userController.getOrderTicket);

router.post('/buy',middleware.isAuth,userController.postCreateOrder);

router.get('/submit',middleware.isAuth,userController.getSubmit);

router.get('/tickets',middleware.isAuth,userController.getTickets);



module.exports = router;