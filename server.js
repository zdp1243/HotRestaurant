const express = require('express');
const body = require('body-parser');

const app = express();
const PORT = 3000;

//routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

app.listen(PORT, () => {
    console.log('server listening on port '+PORT);
});