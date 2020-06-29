const express = require("express");
const app = express();
const homeRoutes = require('./home-routes.js');
const router = require('express').Router();
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/dashboard', dashboardRoutes);

router.use('/', homeRoutes);

module.exports = router;