const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const ChefSchema = new mongoose.Schema({
  // picture: String,
  // fullname: String,
  // address: String,
  // phone: String,
  email: String,
  //// this part of the schema is used for login and registerrationg
  username: {type: String},
  password: {type: String},
  ///// this part of the schmea is used for the chef menu part
  // starter: String,
  // dessert: String,
  // drink: String
})

module.exports = mongoose.model('User', ChefSchema);
