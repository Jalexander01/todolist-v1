module.exports = getDate;

function getDate()
{
  let today = new Date();
let currentDay = today.getDate();
//let day = "";
// res.sendFile(__dirname + "/index.html");


let options = { weekday: 'long', day: 'numeric' , month: 'long' };


// console.log(today.toLocaleDateString("en-US")); // 9/17/2016
//  console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
let day= today.toLocaleDateString("en-US", options);

console.log(today.toDateString());
return day;
}
