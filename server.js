const express = require('express');
const body = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

require('./routes.js')(app);

app.listen(PORT, () => {
    console.log('server listening on port '+PORT);
});