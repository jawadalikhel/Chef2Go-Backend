const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chef02', { useNewUrlParser: true });

mongoose.connection.on('connected', () =>{
  console.log('Mongoose is connected')
})

mongoose.connection.on('disconnected', () =>{
  console.log('Mongoose is disconnected')
})

mongoose.connection.on('error', () =>{
  console.log('Mongoose failed to connect')
})
