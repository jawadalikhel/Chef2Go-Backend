const express = require('express');
const router = express.Router();
const Chef = require('../models/chefSchema.js');
const Coustomer = require('../models/coustomerSchema.js');
const bcrypt = require('bcrypt');


async function test() {
  // No unhandled rejection!
  await Promise.reject(new Error('test'));
}

test().catch(() => {});

router.post('/register', async (req, res) =>{
  try {
    if(req.body.occupation === 'chef'){
      const password = req.body.password;
     // Create our hash
      const passwordHash = await bcrypt.hashSync(password, bcrypt.genSaltSync(10));
      console.log(passwordHash, ' this is passwordHash')
     // Create an object to put into our database into the User Model
      const userEntry = {};
      userEntry.picture = req.body.picture;
      userEntry.experience = req.body.experience;
      userEntry.about = req.body.about;
      userEntry.starter = req.body.starter;
      userEntry.main = req.body.main;
      userEntry.dessert = req.body.dessert;
      userEntry.drink = req.body.drink;
      userEntry.email = req.body.email;
      userEntry.username = req.body.username;
      userEntry.password = passwordHash;
      console.log(userEntry, 'this is the userEntry data')
      const chefEntry = await Chef.create(userEntry);
      console.log(chefEntry, 'this is where the chef is created in MongoDB data');

      req.session.username = req.body.username;
      req.session.logged = true;
      req.session.save();

      console.log(req.session.save(), ' this is req.session.save()');
      res.json({
        status: 200,
        data: 'registration successful'
      })
    } else {
      const password = req.body.password;
      const passwordHash = await bcrypt.hashSync(password, bcrypt.genSaltSync(10));
      const coustomerEntry = {};
      coustomerEntry.fullname = req.body.fullname;
      coustomerEntry.address = req.body.address;
      coustomerEntry.phone = req.body.phone;
      coustomerEntry.email = req.body.email;
      coustomerEntry.username = req.body.username;
      coustomerEntry.password = passwordHash;
      console.log(coustomerEntry, ' this is coustomerEntry')

      const createCoustomer = await Coustomer.create(coustomerEntry);
      req.session.username = req.body.username;
      req.session.logged = true;
      req.session.save();

      res.json({
        status: 200,
        data: 'registration successful'
      })
    }
    console.log(createUser, ' this is createUser')
  } catch (err) {
    res.json({
      status: 401,
      data: err.message
    })
  }
})

router.post('/login',async (req, res) =>{
  console.log(req.body, ' bodddddy')
  try {
    if(req.body.occupation === 'chef'){
      const findChef = await Chef.findOne({'username': req.body.username});
      console.log(findChef, 'mirza')
        if(findChef){
          if(bcrypt.compareSync(req.body.password, findChef.password)){
            req.session.logged = true;
            req.session.username = req.body.username;
            req.session.save();
            res.json({
              status: 200,
              data: 'login successful'
            })
            console.log('this login went successful here')
          } else {
            res.json({
              status: 401,
              data: 'password worng'
            })
            console.log('this login went unsuccessful cause password was wrong')
          }
        }else {
          res.json({
            status: 401,
            data: 'username wrong'
          })
          console.log('this login went unsuccessful cause username was wrong')

        }
    }else {
      const findCostomer = await Coustomer.findOne({'username': req.body.username});
      if(findCostomer){
        if(bcrypt.compareSync(req.body.password, findCostomer.password)){
          req.session.logged = true;
          req.session.username = req.body.username;
          req.session.save();
          res.json({
            status: 200,
            data: 'login successful'
          })
        } else {
          res.json({
            status: 401,
            data: 'password worng'
          })
        }
      }else{
        res.json({
          status: 401,
          data: 'username worng'
        })
      }
    }
  } catch (err) {
    res.send(err);
    console.log(err, 'error in /login')
  }
})

// show all chefs;
router.get('/chefs', async(req, res) =>{
  try {
    console.log(req.body, ' INVOKS')
    const allChefs = await Chef.find();
    console.log(allChefs, ' these are all chefs');
    res.json({
      status: 200,
      data: allChefs
    })
  } catch (err) {
    res.json({
      status: 401,
      data: err.message
    })
  }
})

router.get('/coustomers', async(req, res) =>{
  try {
    const allcos = await Coustomer.find();
    console.log(allcos, ' all the coustomers');
    res.json({
      status: 200,
      data: allcos
    })
  } catch (err) {
    res.json({
      status: 401,
      data: err.message
    })
  }
})

router.get('/logout', (req, res) =>{
  req.session.destroy((err) =>{
    if(err){
      res.json({
        status: 401,
        data: 'logout unsuccessful'
      });
    }else {
      res.json({
        status: 200,
        data: 'logout successful'
      })
    }
  })
})
module.exports = router;
