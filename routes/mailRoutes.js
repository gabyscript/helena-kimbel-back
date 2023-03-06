
const express = require('express');

const mailController = require('../controllers/mailController');

const router = express.Router();

router.post('/', mailController.send);


module.exports = { router };
