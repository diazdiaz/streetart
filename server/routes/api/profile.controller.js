const express = require("express");
const router = express.Router();
const User = require("../../models/User");


// Retrive ALL
router.get("/", (req, res, next) => {

  User.find()
    .then(user => res.json(user))
    .catch(e => next(e));
});

// Retrive DETAIL
router.get("/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      return res.json(user)
    })
    .catch(e => next(e));
});

//EDIT PROFILE

router.put("/edit/:id", (req, res, next) => {

    user = req.params.id
    
      User.findById(user)
      
      .then(user => {
        console.log(user)
    
        const username =req.body.username != "" ? req.body.username : user.username;
        const email = req.body.email != "" ? req.body.email : user.email;
        const name = req.body.name != "" ? req.body.name : user.name;
        const phone = req.body.phone != "" ? req.body.phone : user.phone;
        const bio = req.body.bio != "" ? req.body.bio : user.bio;
        
        
          const updates = {
            username,
            email,
            name,
            phone,
            bio
           
          };
      
    
          User.findByIdAndUpdate(req.params.id, updates, { new: true })
            .then(object => {
            console.log(user);
              return res.json(object);
            })
            .catch(e => next(e));
        });
      })

module.exports = router;