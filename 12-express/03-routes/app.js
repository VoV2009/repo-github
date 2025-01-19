const express = require('express');
const router = require('./routes');
//const router = require('./routes/index');
const app = express();
app.use(router);
app.listen(5000, () => console.log('Server was starter on port 5000'));
