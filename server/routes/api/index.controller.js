const express = require('express');
const router  = express.Router();

const authRoutes = require('./auth.controller');


const worksRoutes = require('./works.controller');

const profileRoutes = require ('./profile.controller.js')


router.use('/auth', authRoutes);
router.use('/works', worksRoutes);
router.use('/profile', profileRoutes)



module.exports = router;