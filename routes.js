const path = require('path');

const tableArray = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}]

module.exports = function(app){

//routes

  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

//   app.post('/api/reserve', (req, res)=>{
//     tableArray.push(req.body)
//     console.log("HIP HIP ARRAY: " + tableArray)
// });

  app.post('/api/reserve', (req, res)=>{
    var newReservation = req.body;
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
    console.log(newReservation);
    tableArray.push(newReservation);
    res.json(newReservation);  
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/api/reserve", function(req, res) {
    return res.json(tableArray);
  });
}

