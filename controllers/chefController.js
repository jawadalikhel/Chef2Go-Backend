const express = require('express');
const router = express.Router();
const Chef = require('../models/chefSchema.js');

router.post('/dashboard', (req, res, next) => {
  console.log(req.session, 'this is req.session')
  if (req.session && req.session.user) {
    Chef.findOne({ username: req.session.user.username }, function(err, user) {
      if (user) {
        req.user = user;
        delete req.user.password; // delete the password from the session
        req.session.user = user;  //refresh the session value
        res.locals.user = user;
      }
      // finishing processing the middleware and run the route
      next();
    });
  } else {
    next();
  }
});


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

router.get('/chefs/:profile', async(req, res) =>{
  try {
    if(req.session.logged){

    } else {
      res.json({
        status: 401,
        data: 'login required'
      })
    }
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
    console.log(getChef, ' this is getChef')
  } catch (err) {
    console.log(err, ' this is error in /:id')
  }
})

module.exports = router;
