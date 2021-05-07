//Headers
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

let items = [];//date date store
let workItems = []; //Work item date store

//template vs layout
//root route for the date
app.get("/", function(req, res){

   let today = new Date();
   let currentDay = today.getDate();
   let day = "";
  // res.sendFile(__dirname + "/index.html");


  let options = { weekday: 'long', day: 'numeric' , month: 'long' };


  // console.log(today.toLocaleDateString("en-US")); // 9/17/2016
//  console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
day= today.toLocaleDateString("en-US", options);

console.log(today.toDateString());
res.render('list', {listTitle: day, newItems: items});

});

//work route
app.get("/work", function(req, res){
res.render('list',  {listTitle:"Work List", newItems: workItems});

});

app.post("/", function(req, res){
  console.log(req.body);

item = req.body.userInput;
if(req.body.list === "Work"){
  workItems.push(item);
  res.redirect("/work");

}else{
  items.push(item);
  // console.log(item);
  res.redirect("/");

}


})

app.post("/work", function(req, res){

  let item = req.body.userInput;
  workItems.push(item);
  res.redirect("/work");

})

app.listen(3000, function(){
  console.log("Server started on port 3000")
});
