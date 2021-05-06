//Headers
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

let items = [];

app.get("/", function(req, res){

   let today = new Date();
   let currentDay = today.getDate();
   let day = "";
  // res.sendFile(__dirname + "/index.html");


  let options = { weekday: 'long', day: 'numeric' , month: 'long' };


  console.log(today.toLocaleDateString("en-US")); // 9/17/2016
  console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
day= today.toLocaleDateString("en-US", options);

console.log(today.toDateString());
res.render('list', {kindOfDay: day, newItems: items});

});

app.post("/", function(req, res){
item = req.body.userInput;
items.push(item);
console.log(item);
res.redirect("/");


})

app.listen(3000, function(){
  console.log("Server started on port 3000")
});
