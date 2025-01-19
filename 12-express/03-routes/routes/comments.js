const express = require('express');
const router = express.Router();
const {
    getComentsHandler,
    postComentsHandler,
    getComentHandler,
    deleteComentHandler,
} = require('../controllers/comments');

router.get('/', getComentsHandler);
router.post('/', postComentsHandler);
router.get('/:commentId', getComentHandler);
router.delete('/:commentId', deleteComentHandler);

//app.route('/comments').get(getComentsHandler).post(postComentsHandler);

module.exports = router;
