const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const session = require('express-session');
const session = require('client-sessions');
const cors = require('cors');
const authController = require('./controllers/authController');
const chefController = require('./controllers/chefController');
const coustomerController = require('./controllers/coustomerController.js');
require('./db/db');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.use(session({
//   secret: 'work hard',
//   resave: false,
//   saveUninitialized: true,
//   cookie: {secure: true}
// }))

app.use(session({
  cookieName: 'session',
  secret: 'random_string_goes_here',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use('/auth', authController);
app.use('/chef', chefController);
app.use('/coustomer', coustomerController)

app.listen(process.env.PORT || 9000, ()  =>{
  console.log('Server is live on 9000');
})
