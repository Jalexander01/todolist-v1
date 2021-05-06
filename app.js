const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get("/", function(req, res){

   var today = new Date();
   var currentDay = today.getDate();
   var day = "";
  // res.sendFile(__dirname + "/index.html");


  var options = { weekday: 'long', day: 'numeric' , month: 'long' };


  console.log(today.toLocaleDateString("en-US")); // 9/17/2016
  console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
day= today.toLocaleDateString("en-US", options);

console.log(today.toDateString());
res.render('list', {kindOfDay: day});

});

app.post("/", function(req, res){

console.log(res.body);

})

app.listen(3000, function(){
  console.log("Server started on port 3000")
});
