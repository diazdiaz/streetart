const express = require("express");
const router = express.Router();
const Works = require('../models/Works');
const upload = require('multer');


// Retrive ALL
router.get("/", (req, res, next) => {
    Works.find()
      .then(objects => res.json(objects))
      .catch(e => next(e));
  });
  
  // Create
  router.post("/", (req, res, next) => {
    const { type, style, description, price } = req.body;
    const { image} = `/uploads/${req.file.filename}`
  
    const newWork = { type, style, description, price, image};
  
    Works.create(newWork)
      .then(object => res.json(object))
      .catch(e => next(e));
  });
  
  // Retrive DETAIL
  router.get(":id", (req, res, next) => {
    Works.findById(req.params.id)
      .then(object => res.json(object))
      .catch(e => next(e));
  });
  
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