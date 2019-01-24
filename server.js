const express = require('express');
const app = express();
const authController = require('./controllers/authController');




app.use('/auth', authController);

app.listen(9000, () =>{
  console.log('Server is live on 9000');
})
