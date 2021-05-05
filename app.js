const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get("/", function(req, res){

   var today = new Date(2021, 5, 5);
   var currentDay = today.getDate();
   var day = "";
  // res.sendFile(__dirname + "/index.html");


  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";

  }
res.render('list', {kindOfDay: day});

});

app.post("/", function(req, res){


})

app.listen(3000, function(){
  console.log("Server started on port 3000")
});
