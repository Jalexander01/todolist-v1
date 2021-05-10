//Headers
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));
const date = require(__dirname + "/date.js");


let items = [];//date date store
let workItems = []; //Work item date store

//template vs layout
//root route for the date
app.get("/", function(req, res){

//here we had Getdate code and moved it to date.js
// let day = date.getDay();
//or
let day = date.getDate();
res.render('list', {listTitle: day, newItems: items});

});

//work route
app.get("/work", function(req, res){
res.render('list',  {listTitle:"Work List", newItems: workItems});

});

//about route
app.get("/about", function(req, res){
  res.render('about');
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
