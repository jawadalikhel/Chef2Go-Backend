const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const ChefSchema = new mongoose.Schema({
  picture: String,
  experience: String,
  about: String,
  starter: String,
  main: String,
  dessert: String,
  drink: String,
  email: String,
  username: String,
  password: String,
})

module.exports = mongoose.model('User', ChefSchema);
