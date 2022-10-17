function myfunction() {
  document.getElementById("class1").innerHTML =
    "This is a project of javascript";
}
function lighton() {
  document.getElementById("img").src = "pic_bulbon.gif";
}
function lightoff() {
  document.getElementById("img").src = "pic_bulboff.gif";
}
console.log("Hello buddy");

// Javascript does not have any print object or print methods for output device acess
// there is only one way that is window.print()
function print() {
  window.print();
}
//  JavaScript Statements
//
let text1 = "What a very ";
text1 += "nice day";
console.log(text1);

let x = -100;
x >>>= 5;
console.log(x);

let y = 16 + "Volvo"; // This will be treated as "16" + "volvo"
console.log(y);
let m = "vivo" + 16 + 4; // This will be treated as "Vivo" + "16" + "4"= Vivo164
console.log(m);

var array = {
  FirstName: "Sayan",
  LastName: "Pramanik",
  Age: 20,
  EyeColor: "Black",
};
console.log(array);

//Functions
function myFunction(p1, p2) {
  return p1 * p2;
}
function CarName() {
  document.getElementById("car").innerHTML = "This is not a car";
}
var n = myFunction1(25, 23);
function myFunction1(para1, para2) {
  return para1 * para2;
}
function code() {
  document.getElementById("demo1").style.fontSize = "56px";
  document.getElementById("demo").style.fontSize = "36px";
}

const person = {
  firstname: "Sayan",
  LastName: "Pramanik",
  age: 23,
  EyeColor: "Blue",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person);
function time() {
  document.getElementById("time").innerHTML = Date();
}
//STRING METHODS
/* Declaring a variable called word and assigning it a string value. */
let word = "Apple, Banana Kiwi";
let part = word.slice(7, 13);
// replace method
function myfunc() {
  let text = document.getElementById("para1").innerHTML;
  document.getElementById("para1").innerHTML = text.replace("para", "para1");
}

// Uppercase and loweecase method
let text_1 = "Hello world";
let upper = text_1.toUpperCase();
console.log(upper);
let text_2 = "SAYAN PRAMANIK";
let lower = text_2.toLowerCase();
console.log(lower);
// Concat method: joins two or more strings
let text_a = "Hello";
let text_b = "Mister";
let text_c = text_a.concat(" ", text_b);
console.log(text_c);
// Trim methods
// let tr="    Hello World!       "
// let text_5= tr.trim();
// let len= text_5.length();
// console.log(len);

mystr = "Midnapore";
mystr1 = "College";
mystr2 = mystr.concat(mystr1);
console.log(mystr2);

// Map() method of array
const number1 = [12, 15, 16, 85];
let number2 = number1.map(myFunc);
function myFunc(value) {
  return value * 2;
}
console.log(number2);

//Filter method
const number3 = number1.filter(myfunction_filter);
function myfunction_filter(value) {
  return value > 18;
}
console.log(number3);
//Reduce method in Array
const array2 = [45, 15, 12, 23, 58];
const sum = array2.reduceRight(reducefunc);
function reducefunc(total, value, index, array) {
  return total + value;
}
console.log(sum);
//Array Every methods()
const arra_every = [40, 15, 16, 20, 22];
const ch = arra_every.every(everyfunc);
function everyfunc(value, index, array) {
  return value > 20;
}
console.log(ch);
//Some method
const arra_some = [15, 40, 15, 16, 20, 22];
const sm = arra_every.some(somefunc);
function somefunc(value, index, array) {
  return value > 20;
}
console.log(sm);
let position = arra_some.indexOf(15);
console.log(position);
let position1 = arra_some.lastIndexOf(15);
console.log(position1);

//Date methods
const d = new Date();
console.log(d); //Normal date method
const d1 = new Date(2002, 09, 24, 10, 33, 30, 0);
console.log(d1); // Date(year, month, Day, Hour, Minutes, Seconds, Milliseconds)
const d2 = new Date(2002, 8, 24, 10);
console.log(d2);
//One and two numbers will be treated as previous centuries here 19is xx
const d3 = new Date(99, 10, 24);
console.log(d3);
// Parse
const date1 = Date.parse("March 2021, 2012");
console.log(date1);
//Math funsctions
const math = Math.PI;
console.log(math);
const math1 = Math.SQRT2;
console.log(math1);
/* Rounding the number 5.6 to 6. */
const math2 = Math.round(5.6);
console.log(math2);
/* Calculating the power of 4 to 5. */
const math3 = Math.pow(4, 5);
console.log(math3);
const sinm = Math.sin((180 * Math.PI) / 180);
console.log(sinm);
//Random always return a value less than 1
const rand = Math.floor(Math.random() * 10); // returns a value between 0 and 9
console.log(rand);
const rand2 = Math.floor(Math.random() * 100) + 1; //returns a value between 1 and 1000
console.log(rand2);
//Creating a random function
function random(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const func = random(8, 2);
console.log(func);
//If else block
let age = 4;
if (age > 18) {
  console.log("You are eligible");
} else if ((age = 18)) {
  console.log("Yes, you are also eligible");
} else age < 18;
{
  console.log("Sorry, you are not eliible");
}
//Switch statement
let text;
switch (new Date().getDay()) {
  case 0:
    text = "This is Sunday";
    break;
  case 1:
    text = "This is Monday";
    break;
  default:
    text = "This is Weekend";
}
console.log(text);

//For loops
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length - 3; i++) {
  console.log("The Array is" + numbers[i]);
}
//For in loop
const person1 = {
  fname: "Amit",
  lname: "Manna",
  age: 15,
};
let text_d;
for (let x in person1) {
  /* Printing the value of the `person1` object. */
  console.log(person1[x]);
}
//For each() method
const numbers_1 = [10, 15, 16, 18];
let each = " . ";
numbers_1.forEach(fe);
function fe(value, index, array) {
  /* Printing the value of `each` to the console. */
  console.log(each);
}
//for of() loop
const off = [20, 21, 22, 23, 24, 25, 26];
let text_e;
for (let x1 of off) {
  console.log(off[x1]);
}
//While loop and do-while loop
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
//Break and continue statement
for (let i1 = 0; i1 <= 10; i1++) {
  if (i1 == 3) {
    // break;
    continue;
  }
  console.log("The array element is " + i1);
}
//Sets
const set = ["a", "b", "c"];
console.log(set);
//One more way
const set1 = new Set();
set1.add("45");
set1.add(56);
set1.add("Sayan");
set1.delete("45");
console.log(set1);
console.log("Sayan");
//Map method
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
let getting = fruits.get("apples");
console.log(getting);
let getteing1 = fruits.set("Mangos", 800); //Set is used for adding values
console.log(getteing1);
console.log(fruits.size); // for gettig the map size
//Delet method in map
let del = fruits.delete("apples");
console.log(fruits);
//Has method: Returns true if a key exist in map otherwise returns false...
let has = fruits.has("Papaya");
console.log(has);
// The entries() method returns an iterator object with the [key, values] in a Map:
for (const n of fruits.entries()) {
  console.log(n);
}
//For each loop array
const cars1 = ["Maruti", "Volvo", "Suzuki", "Audi"];
cars1.forEach((Element) => console.log(Element));
console.log(typeof "Sayan"); // returns a string
//Type of conversion
// number method converts a string into a number
let convert = Number("99.88");
console.log(convert);
//More ways to convert a string to a number
let convert1 = parseFloat("55.5");
console.log(convert1);
let convert2 = parseInt("66");
console.log(convert2);
//String method can convert any number to a string
let convStr = String(100);
console.log(convStr);
let convStr1 = String(100 + 23);
console.log(convStr1); //The toString() method does the same thing
// Date to number
dte = new Date();
let convDate = Number(dte);
console.log(convDate); //getTime() method does the same thing
//Convert date to strings
date = new Date();
let convDate1 = String(date);
console.log(convDate1);
//Booleans to number
let convBoolean = Number(false);
console.log(convBoolean); //if true it will retuen 1 and if false it returns 1
//Boolean to String
let convBoolean1 = String(false);
console.log(convBoolean1);
console.log(5 & 1);
//Regular expression is used to replace and search a string
let txt1 = "Visist W3Schools";
let srh = txt1.replace("W3schools", "Microsoft");
console.log(srh);
//Try and catch errors
let a = "Midmapore College";
a = undefined;
if (a != undefined) {
  throw new Error("This is not undefined");
} else {
  console.log("This is undefined");
}
//Error handeling
try {
  console.log("We are inside try block");
  // functionSayan();
} catch (error) {
  console.log("Are you okay?");
  console.log(error);
} finally {
  console.log("We will run this");
}
//Hoistiing
x2 = 5;
y2 = 7;
var x2;
var y2;
console.log(x2 + y2);
//This keyword
const thex = {
  firstname: "Pritha",
  lastname: "Adak",
  Age: 20,
  id: 2020 - 2021,
  fullname: function fulb() {
    return this.firstname + " " + this.lastname;
  },
};
console.log(thex.fullname());
//Arrow functions are used to write shorter function syntax:
let myarrow = (a1, b1) => a1 * b1;
let ans = myarrow(5, 6);
console.log(ans);
//if the function have only one statement, you can remove the brackets..
let hello = " ";
hello = () => "Hello World !";
console.log(hello);
// hello=()=>{
//   document.getElementById("para4").innerHTML=+this;
// }
// //The window object calls the function
// window.addEventListener("load", hello);
// //A button object calls the function
// document.getElementById("btn").addEventListener("click", hello);

//Classes : Creating a Class
//Class is not an object it is an template for object
class car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
let myCar = new car("Audi", 2008);
console.log(myCar);
//Create a class method named age and returns the car age
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let ag = new Date();
    return ag.getFullYear() - this.year;
  }
}
let newCar = new Car("Benz", 2016);
console.log("My Car is" + newCar.age() + "years old");
//import and export
//Exporting Variables
//Json - JavaScript Object Notation
let Jsonobj = {
  Name: "Tatai",
  Channel: "CodeWarriors",
  Friend: "Shaibal",
  Food: "Biriyani",
};
console.log(Jsonobj);
let MyJsonStr = JSON.stringify(Jsonobj);
console.log(MyJsonStr);
MyJsonStr = MyJsonStr.replace("Shaibal", "Pritam");
console.log(MyJsonStr);
//Converting Json into JavaScript Object
let newObj = JSON.parse(MyJsonStr);
console.log(newObj);
//Callbacks are functions under a function
function displayer(some) {
  console.log(some);
}
function first() {
  displayer("Hello");
}
function second() {
  displayer("Goodbye");
}
second();
first();
//Sequence Control
setTimeout(MyMessage, 4000);
function MyMessage() {
  console.log("I Love You");
}
//In this method MyMessage is used as a call back function
//Call back
// function Mydisoplayer(some){
//   console.log(some);
// }
// function addition(n1, n2)
// {
//   let sum = n1+n2;
//   return sum;
// }
// let result = addition(45,14);
// Mydisoplayer(result);
//Now Using callbacks
function Mydisplayer(some) {
  console.log(some);
}
function addition(n1, n2, mycallback) {
  let sum = n1 + n2;
  mycallback(sum);
}
addition(15, 15, Mydisplayer);
//Asynhronus
setTimeout(setT, 3000);
function setT() {
  console.log("It is a set time out method");
}
//Or we can write this as
setTimeout(function () {
  myset("This is also a function");
}, 3000);
function myset(value) {
  console.log(value);
}
//SetInterval
setInterval(myInterval, 1000);

function myInterval() {
  let d = new Date();
  document.getElementById("demo").innerHTML =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
//Promise
function myDis(some) {
  console.log(some);
}

let myPromise = new Promise(function (myResolve, myReject) {
  let x = 5;

  // The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function (value) {
    myDis(value);
  }).catch(
    function(error){myDis(error);}
  );
//Set time out using promise
let mynewProm = new Promise(function (reslove, reject) {
  setTimeout(Time, 3000);
  function Time() {
    reslove("This is a promise");
  }
});
mynewProm.then(
  function(value){console.log(value);}
);

