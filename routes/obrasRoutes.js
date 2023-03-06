
const express = require('express');

const obrasController = require('../controllers/obrasController');

const router = express.Router();

router.get('/', obrasController.list);

router.get('/obra/:id', obrasController.findOne);

module.exports = { router };
