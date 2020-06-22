const express = require("express");
const app = express();
const homeRoutes = require('./home-routes.js');
const router = require('express').Router();
router.use('/', homeRoutes);

module.exports = router;