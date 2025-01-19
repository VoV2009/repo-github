const express = require('express');
const router = express.Router();
const { getRootHandler } = require('../controllers/root');

router.get('/', getRootHandler);
//router.get('/', rootRouter.getRootHandler);

module.exports = router;
