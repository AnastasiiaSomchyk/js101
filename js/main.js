console.log("hello main.js");

console.log("add this", "2+2", "and another", 3 + 4);

var myName = "Ana";


var lostColors = {
             yellow: ["dandeLion", "mac and chees"], 
             blue: "blues",
             add: function(a,b){
             return a + b ;
             }

         };
         
console.log(lostColors.yelloe[0] + lostColors.add(2, 3));
console.log("yellow lengs is: ", lostColors.yallow.lengs);
console.log("how many letter", lostColors.yellow[0].length);
         
var crayonBox = ["yellow", "blue", "lemon", lostColors];
var coinpurse = {dimes:1, nickles:3, quarters:2, pennies:3};
var junkDrawer = ["tape", "sticky", 2, "fishing wire", crayonBox];


var sharpObject = true;


console.log("what kind of data is myName", typeof(myName) );

var icecream = 3 / 1.5;
console.log(icecream);

let snow = true;
let ice = true;


 if (snow === true && ice === treu){
    console.log("school is cancelled");
 } else {
    console.log("we learn more cool stuff");

 }

 //let day = "Monday";
 var day = "Friday";
 function myday(){
 
       var day = "Tuesdya";
 }

 var day = "Wednesday";
myday();

console.log("what day", day);





let phrase = "The quick brown fox jump over the lazy dog";
console.log("lengs of phrase", phrase.length);
console.log("where is x", phrase.indexOf("fox jumps"));
console.log("what is 8", phrase.charAt(8));


let neStuff = <h2>My Favorite Poems of Ice Cream</h2>
              <P>{phrase}</p>
              <h3>By Ana Somchyk</h3>;


let addToDom  = document.getElementById("demo");
addToDom.innerHTML = newStuff;

let domItems = document.getElementsByClassName("super");
console.log("what is domItems", domItems);

