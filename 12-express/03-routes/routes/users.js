const express = require('express');
const router = express.Router();
const {
    getUsersHandler,
    postUsersHandler,
    getUserHandler,
} = require('../controllers/users');

router.get('/', getUsersHandler);
router.post('/', postUsersHandler);
router.get('/:userId', getUserHandler);

module.exports = router;
