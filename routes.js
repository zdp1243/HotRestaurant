const path = require('path');

const tableArray = []

module.exports = function(app){

//routes

  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.post('/api/reserve', (req, res)=>{
      tableArray.push(req.body)
      console.log("HIP HIP ARRAY: " + tableArray)
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/api/reserve", function(req, res) {
    return res.json(tableArray);
  });
}

