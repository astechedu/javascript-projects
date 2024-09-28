const express = require('express')
const router = express.Router()

const { insertUser, getAllUsers, getOne, getUser, deleteUser } = require('../controllers/userController.js') 
//onst user = require('../controllers/userController.js')    //OR

/*
 router.get('/', (req, res) => {   
    res.render('index', {title: "Ecommerce"});
 });
 */
router.get('/', getAllUsers)

 router.get('/about', (req, res) => {   
   res.render('about', {title: "Ecommerce about"});
 });

 router.get('/home', (req, res) => {   
   res.render('home', {title: "Ecommerce home"});
 });

 router.get('/register', (req, res) => {   
   res.render('register', {title: "Ecommerce register"});
 });
  
 router.post('/register', insertUser);
 //router.post('/register', user.insertUser);   //OR

router.get('/listing', (req, res) => {   
   let data = [1,2,3,4]
  res.render('listing', {title: "Ecommerce listing", data:data});
});

router.get('/getall', getAllUsers); 
router.get('/getone/:id', getOne); 

router.get('/users/:id', getUser)


 router.post('/delete/:id', deleteUser);

 module.exports = router