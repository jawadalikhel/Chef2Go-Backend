const express = require('express');
const router = express.Router();
const Chef = require('../models/chefSchema.js');


router.get('/allChefs', async (req, res) =>{
  try {
    const allChefs = await Chef.find();
    console.log(allChefs, 'all the chefss')
    res.json({
      status: 200,
      data: allChefs
    })
  } catch (err) {
    res.json({
      status: 401,
      data: err
    })
  }
})

module.exports = router;
