const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Works = require("../../models/Works");
const multer = require("multer");
const uploadCloud = require('../../config/cloudinary.js');


// Retrive ALL
router.get("/", (req, res, next) => {

  User.find()
    .then(user => res.json(user))
    .catch(e => next(e));
});

// Retrive DETAIL
router.get("/:id", (req, res, next) => {
  User.findById(req.params.id)
  .populate('works')
    .then(user => {
      return res.json(user)
    })
    .catch(e => next(e));
});

//EDIT PROFILE

router.put("/edit/:id", uploadCloud.single('file'), (req, res, next) => {

    user = req.params.id
    
      User.findById(user)
      
      .then(user => {
        if(req.file!=undefined){
          profilepic = req.file.url;
        }else{
          profilepic= user.profilepic;
        };

        console.log(req.body.username,'username body')

        const username =req.body.username != "" ? req.body.username : user.username;
        const email = req.body.email != "" ? req.body.email : user.email;
        const name = req.body.name != "" ? req.body.name : user.name;
        const phone = req.body.phone != "" ? req.body.phone : user.phone;
        const bio = req.body.bio != "" ? req.body.bio : user.bio;
        
        console.log(username)
        
          const updates = {
            username,
            email,
            name,
            phone,
            bio,
            profilepic,
          };
      
          console.log(updates)
    
          User.findByIdAndUpdate(req.params.id, updates, { new: true })
            .then(object => {
            console.log(user);
              return res.json(object);
            })
            .catch(e => next(e));
        });
      })

module.exports = router;