/*This is the draft I used in learning JavaScript. 
I liked implementing as I learned. So, I used this page to run and and view my code. 
 I only started edited it today, 23/02/2022.
 If you find this code,esp as a beginner, you'll definately find it helpful as I have made it simplified step by step 
 
 Star the repo, or build a simple project with what you've learnt. Don't forget to tag me on Twitter(SandraMakis), I'll be sure to cheer you on!
*/

/* ===== TABLE OF CONTENTS ==========
1. VARIABLES
1.1. Commands to the machine =>> console.log()
2. COMMENTS 
3. DATA TYPES
3. CONCATENATION
*/

// 1. ======== VARIABLES ==========

// Egs of variables
var myName = "Makis";
const minutes = 60;
let flower = "Lilac";

console.log(myName); //Makis
console.log(minutes); //60
console.log(flower); //Lilac

const currentYear = 2023;
const age = currentYear - 2000;
const ageInFiveYears = age + 5;

const minutesInAnHour = 60;
const minutesInADay = minutes * 24;

console.log(currentYear); //2023
console.log(age); //23
console.log(ageInFiveYears); //28
console.log(minutesInAnHour); //60
console.log(minutesInADay); //1440

// ========== 3. CONCATENATION ==========
// This is used to add one or two variables or strings
let number = 36;
let state = "Nigeria";

console.log(number + state); //output = 36 states

// ARRAYS

//using the for loop
// var a = document.getElementsByTagName("a");
// for (i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

// // =======do / do while loops=========
// let i = 0;
// while (i < 10) {
//   console.log(i++);
// }

// for each loop

// const header = document.querySelectorAll("h3");
// Array.from(header).forEach(function (h3) {
//   // console.log(h3);
//   console.log(h3.textContent);
//   h3.textContent += " (Foreign Dogs)";
// });

// Learning DOM MANIPULATION

// let div = document.getElementsByTagName("div");
// // Checking if div is an array

// console.log(Array.isArray(div)); //false
// console.log(Array.isArray(Array.from(div))); //true

// // converting it to an array and using the forEach loop to iterate all the div tags
// Array.from(div).forEach(function (item) {
//   console.log(item);
// });

// const title = document.querySelectorAll("h3");
// for (let i = 0; i < title.length; i++) {
//   // title[i].textContent += " (Foreign dogs)";
//   // title[i].innerHTML = "<p> Cute dogs for sale </p>"; //this changes the inner HTML element of all h3 tags to "Cute dogs for sale"
//   title[i].innerHTML += "<p>20% discount</p>"; //this right here adds a p tag to the end of the page, right after the h3 element
// }

// let man = 0;
// let children = ["Bekee", "Makis", "Mecky", "Angel", "Bobo", "Kam-kam"];
// do {
//   console.log("My mother's children are", `${man}`, ".", `${children[man]}`);
//   man++;
// } while (man < children.length);

// let fav = [
//   "Red",
//   "Blue",
//   "Green",
//   "Yellow",
//   "Pink",
//   "Orange",
//   "Lemon",
//   "Purple",
// ];
// let color = 1;

// do {
//   console.log(`${fav[color]}`);
//   color++;
//   color++;
// } while (color < fav.length);

// let g = 0;
// while (g <= 15) {
//   console.log(g);
//   g++;
//   g++;
//   g++;
//   g++;
// }

// // 1. test

// // ===== first method ====

// let x = 0;
// let miles = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// while (x < miles.length) {
//   console.log("The speed of the car is", `${miles[x]}`, "MPH");
//   x++;
// }

// // ======second method==

// let speed = 0;
// while (speed <= 100) {
//   console.log(`The speed of the car is ${speed}MPH`);
//   speed += 10;
// }

// // second test
// let a = 1;
// let b = 10;

// do {
//   console.log(a);
//   a++;
// } while (a <= b);

// Arrays, object and Array of Objects
// arrays

// let siblings = [
//   "Onyinye",
//   "Chiamaka",
//   "Obiamaka",
//   "Chiemelie",
//   "Chibuikem",
//   "Kamsiyochukwu",
// ];
// console.log(siblings);
// console.log(`${siblings[5]}`, `and ${siblings[2]} are the most loving`);

// for (let i = 0; i <= siblings.length - 1; i++) {
//   console.log(siblings[i]);
// }

// objects

// let student1 = {
//   name: "Sandra Makis",
//   school: "UNN",
//   level: "300 Level",
//   department: "History and International Studies",
//   age: 20,
//   hobbies: ["Singing", " Swimming", " Eating", " Partying", " Aloneness"],
// };
// let student2 = {
//   name: "Bekee Onyii",
//   school: "ANSU",
//   level: "Graduate",
//   department: "Banking and Finance",
//   age: 23,
// };
// let student3 = {
//   name: "Lady Mecky",
//   school: "ANSU",
//   level: "100 Level",
//   department: "Mass Communication",
//   age: 19,
// };

// console.log(student1.school);
// console.log(student3.department);
// console.log(student2.level);
// console.log(
//   `My hobbies are ${student1.hobbies}.But my most favorite hobby is ${student1.hobbies[0]}`
// );

// This can be to bulky writing similar properties with different names, Array of objects thus group these similar objects together
// Array of objects is simply an array that has object properties

// let students = [
//   {
//     name: "Sandra Makis",
//     school: "UNN",
//     level: "300 Level",
//     department: "History and International Studies",
//     age: 20,
//     hobbies: ["Singing", "Swimming", "Eating", "partying", "aloneness"],
//   },
//   {
//     name: "Bekee Onyii",
//     school: "ANSU",
//     level: "Graduate",
//     department: "Banking and Finance",
//     age: 23,
//   },
//   {
//     name: "Lady Mecky",
//     school: "ANSU",
//     level: "100 Level",
//     department: "Mass Communication",
//     age: 19,
//   },
//   {
//     name: "Angel Star",
//     school: "FGGCO",
//     level: "SS3",
//     department: "Med and Surg",
//     age: 17,
//   },
// ];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].name + ", " + students[i].level);
// }

// identity("Makis", 20, "Female", "6.0ft");

// function identity(name, age, sex, height) {
//   console.log(
//     `Hey there, my name is ${name}. I am ${age} years old. I'm a ${sex} and I'm ${height} tall`
//   );
// }

// identity("Makis", 20, "Female", "6.0ft");

// LEARNING JAVASCRIPT
// 2. JS DATATYPES

// EG:
// let javascriptIsFun = true;
// console.log(javascriptIsFun); //This outputs True un a string
// //To check the type of value, we use
// console.log(typeof javascriptIsFun); //It returns Booleean as its's data type

// let firstName = "Makis";
// console.log(firstName);
// console.log(typeof firstName); // string

// let lastName;
// console.log(lastName);
// console.log(typeof lastName); // undefined

// let age = 21;
// console.log(age);
// console.log(typeof age); // number

// FUNCTIONS FROM THE HTML
function previousTransition() {
  document.querySelector("#color").style.marginLeft = ".4rem";
  document.querySelector("#color").style.backgroundColor = "yellow";
  // document.querySelector("#color").style.backgroundColor =
  //   Math.random(animateColors);
  document.querySelector("#color").style.borderRadius = "0 100% 0 0";
  document.querySelector("#color").style.boxShadow =
    "1px 3px 4px rgba(0,0,0,0.4)";
}

function nextTransiton() {
  document.querySelector("#color").style.marginLeft = "300px";
  // document.querySelector("#color").style.backgroundColor = "violet";
  document.querySelector("#color").style.backgroundColor =
    Math.random(animateColors);
  document.querySelector("#color").style.borderRadius = "50%";
  document.querySelector("#color").style.boxShadow =
    "0 3px 5px rgba(0,0,0,0.6)";
}

function nameAnswer() {
  let name = "Sandra Chiamaka Nwakeze";
  const myNameTag = document.querySelector(".my-name");
  myNameTag.innerHTML += `<p> My name is ${name} </p>`;
  myNameTag.style.color = "darkGreen";
  console.log(nameAnswer);
}

function country() {
  let myCountry = "Nigeria";
  const countryTag = document.querySelector(".my-country");
  countryTag.style.color = "darkGreen";
  countryTag.innerHTML += `<p> I'm from ${myCountry} </p>`;
  console.log(country);
}

function course() {
  let whyCourse =
    "I figured a lot of people may be having a hard time understanding the basics of Javascript, hoping on this, I decided to give a quick overview of it. I hope you like it as much as I like helping you";
  const courseTag = document.querySelector(".my-course");
  courseTag.style.color = "darkGreen";
  courseTag.innerHTML += whyCourse;
  console.log(course);
}

// LEARNING MATH METHODS

// let maximum = 689;
// let minimum = 236;

// console.log(Math.max(minimum, 967));
// console.log(Math.floor(maximum));
// console.log(Math.round(Math.random(5)));
// console.log(Math.pow(minimum, 9));
// console.log(Math.sqrt(maximum, 9));
// console.log(Math.abs(maximum));
