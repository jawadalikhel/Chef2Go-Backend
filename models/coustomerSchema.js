const mongoose = require('mongoose');

const coustomerSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String
})

module.exports = mongoose.model('Coustomer', coustomerSchema);
