const mongoose = require('mongoose');

const chefSchema = new mongoose.Schema({
  picture: String,
  fullname: String,
  address: String,
  phone: String,
  email: String,
  username: String,
  password: String,
  starter: String,
  dessert: String,
  drink: String,
})
