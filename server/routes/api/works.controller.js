const express = require("express");
const router = express.Router();
const Works = require("../../models/Works");
const artist = require("../../models/Artista");
const user = require("../../models/User");

// Retrive ALL
router.get("/", (req, res, next) => {
  Works.find()
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

// Create
router.post("/", (req, res, next) => {
  const { type, style, description, price, image } = req.body.works;
  


  const newWork = { type, style, description, price, image };

  Works.create(newWork)
    .then(object => {
      user
        .update({ _id: req.body.id }, { $push: { works: object.id } })
        .then(object => res.json(object))
        .catch(e => console.log(e));
    })
    .catch(e => next(e));
});

// Retrive DETAIL
router.get(":id", (req, res, next) => {
  Works.findById(req.params.id)
    .then(object => res.json(object))
    .catch(e => next(e));
});

// router.get(":id/", (req, res, next) => {
//   Works.findById(req.params.id)
//     .populate("user")
//     .then(object => res.json(object))
//     .catch(e => next(e));
// });





router.put(":id", (req, res, next) => {
  const { type, style, description, price, image } = req.body;

  const updates = { type, style, description, price, image };

  Works.findByIdAndUpdate(req.params.id, updates, { new: true })
    .then(object => res.json(object))
    .catch(e => next(e));
});

// Retrive DETAIL
router.delete(":id", (req, res, next) => {
  Works.findByIdAndRemove(req.params.id)
    .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
    .catch(e => next(e));
});

module.exports = router;
