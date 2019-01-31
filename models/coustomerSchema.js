const mongoose = require('mongoose');

const coustomerSchema = new mongoose.Schema({
  fullname: String,
  address: String,
  phone: String,
  email: String,
  username: String,
  password: String,
// this part of schema is for the application
  numpeople: String,
  date: String,
  time: String,
  card: String,
  expcard: String,
  cvv: String,
  additional: String
})

module.exports = mongoose.model('Coustomer', coustomerSchema);
