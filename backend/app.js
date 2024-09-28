const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
//const morgan = require('morgan')
const path=require('path')
const app = express()

const userRouter = require('./routes/userRoutes.js')  //User Router
//const userController = require('./controllers/userController.js')   //User Controller

//const url='mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1'
const url='mongodb://localhost:27017/mydb'
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
con.on('open', () => {
	console.log('connected...')
})

dotenv.config({path:'config.env'})
const PORT=process.env.PORT || 8080

//Parse request to body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
  //midlewares
//app.use(express.json());

//Set view engine
app.set('view engine','pug');
app.set('views',path.resolve(__dirname, "views"));
//app.set('views',"./views");       //or

app.use(express.static(__dirname + '/public'));

app.use('/', userRouter)


app.listen(PORT, () => {
	console.log('server started Port: ' + PORT)
})


//Search Queries
//https://betterstack.com/community/guides/scaling-nodejs/build-nodejs-application-express-pug/

/*
app.get('/search', (req, res) => {
  const searchQuery = req.query.q;
  if (!searchQuery) {
    res.redirect(302, '/');
    return;
  }

  console.log(searchQuery);
  res.status(200).end();
});

*/

//mongoose.connect(url, {useNewUrlParser:true})
//const con = mongoose.connection

//con.on('open', () => {
//	console.log('connected...')
//})

//const productsRouter = require('../routes/products')
//app.use('/products', productsRouter)

//Log requests
//app.use(morgan('tiny'))

//Assets
//app.use(express.static(path.join(__dirname, 'public'));


/*
app.get('/', (req, res) => {  
 
   res.sendFile('index.html', {
     root: 'views'
   });
   
   //res.render('index');
});
*/