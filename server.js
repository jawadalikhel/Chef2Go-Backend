const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const authController = require('./controllers/authController');
require('./db/db');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
  secret: 'work hard',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: true}
}))

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use('/auth', authController);

app.listen(process.env.PORT || 9000, ()  =>{
  console.log('Server is live on 9000');
})
