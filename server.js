const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session')
const authController = require('./controllers/authController');
require('./db/db');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: true}
}))


app.use('/auth', authController);

app.listen(process.env.PORT || 9000, ()  =>{
  console.log('Server is live on 9000');
})
