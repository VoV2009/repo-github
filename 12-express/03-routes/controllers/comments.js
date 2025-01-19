const getComentsHandler = (req, res) => {
    //console.log('getComentsHandler handler');
    res.send('Get coments route');
};
const getComentHandler = (req, res) => {
    console.log(req.params);
    res.send(`Get coment route. CommentId ${req.params.commentId}`);
};
const postComentsHandler = (req, res) => {
    res.send('Post coments route');
};
const deleteComentHandler = (req, res) => {
    console.log(req.params);
    res.send(`Delete coment route. CommentId ${req.params.commentId}`);
};

module.exports = {
    getComentsHandler,
    getComentHandler,
    postComentsHandler,
    deleteComentHandler,
};
