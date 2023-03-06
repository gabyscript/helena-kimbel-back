
const express = require('express');

const { router: obras } = require('./obrasRoutes');
const { router: mail } = require('./mailRoutes');

const router = express.Router();

router.use('/obras', obras);

router.use('/send_email', mail);

module.exports = { router };
