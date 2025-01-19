const getRootHandler = (req, res) => {
    console.log('getRootHandler handler');
    res.send('Get root route');
};
module.exports = { getRootHandler };
