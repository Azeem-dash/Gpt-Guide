// router/apiRoutes.js

const express = require('express');
const router = express.Router();
const paymobController = require('../controller/paymobController');

const endPointName = {
  test: '/test',
};


router.get(endPointName.test, paymobController.testing);

module.exports = router;
