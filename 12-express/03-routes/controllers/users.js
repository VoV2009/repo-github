const getUsersHandler = (req, res) => {
    //console.log('getComentsHandler handler');
    res.send('Get users route');
};
const getUserHandler = (req, res) => {
    console.log(req.params);
    res.send(`Get user route. UserId ${req.params.userId}`);
};
const postUsersHandler = (req, res) => {
    res.send('Post user route');
};
module.exports = { getUsersHandler, getUserHandler, postUsersHandler };
