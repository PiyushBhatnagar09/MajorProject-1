//no new instance of express is created, the earlier instance which is created in codeial/index.js is used everywhere
const express= require('express');
const router= express.Router();

const homeController= require('../controllers/home_controller');
router.get('/', homeController.home);
module.exports= router;