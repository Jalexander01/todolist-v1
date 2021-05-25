//Headers
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));
const date = require(__dirname + "/date.js");
// V2
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});

const itemsSchema = {
  name: String
}

//mongoose model is always capitalize
const Item = mongoose.model(
 "Item",
 itemsSchema
);
 
const item1 = new Item({
name:"Welcome to your todolist"
}); 
const item2 = new Item({
  name:"Hit the plus button to add items"
  }); 
  const item3 = new Item({
    name:"Hit the checkbox to delete item"
    }); 

const defaultItems = [item1, item2, item3];    






// let items = [];//date date store
// let workItems = []; //Work item date store

//template vs layout
 
app.get("/", function(req, res){

//here we had Getdate code and moved it to date.js
// let day = date.getDay();
//or
   
let day = date.getDate();

//read from db
Item.find({}, function(err, foundItems){
 
  if (foundItems.length === 0){
//write to db
Item.insertMany(defaultItems, function(err){
 console.log(err);
});
  res.redirect("/");
  }else{
    res.render('list', {listTitle: day, newItems: foundItems});

  }



  });

  });




//work route
app.get("/work", function(req, res){
res.render('list',  {listTitle:"Work", newItems: workItems});

});

//about route
app.get("/about", function(req, res){
  res.render('about');
});





app.post("/", function(req, res){
  item = req.body.userInput;
const itemDocument = new Item({
  name: item
  }); 
  itemDocument.save();
  res.redirect("/");
  });

  app.post("/delete", function(req, res){
    console.log(req.body.checkBox);
    });


app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000")
});
