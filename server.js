const express = require('express');
const body = require('body-parser');

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log('server listening on port '+PORT);
});