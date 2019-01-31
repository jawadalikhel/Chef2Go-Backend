const express = require('express');
const router = express.Router();
const Coustomer = require('../models/coustomerSchema');

router.post('/create', async(req, res) =>{
  console.log(req.session);
  try {
    if(req.session.logged){
      const userEntry = {};
    } else {
      res.json({
        status: 401,
        data: 'login required'
      })
    }
  } catch (err) {
    console.log(err, 'error in /create');
  }
})

router.get('/summary', (req, res) =>{

})



module.exports = router;
