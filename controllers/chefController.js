const express = require('express');
const router = express.Router();
const Chef = require('../models/chefSchema.js');


router.get('/chefs', async (req, res) =>{
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



router.get('/chefs/:id', async(req, res) =>{
  try {
    const getChef = await Chef.findById(req.params.id)
    res.json({
      status: 200,
      data: getChef
    })
  } catch (err) {
    console.log(err, ' this is error in /:id')
  }
})

module.exports = router;
