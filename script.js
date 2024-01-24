"use strict";
// console.log(this);

// let obje = {
//   year: 1991,
//   functionDec: function () {
//     const year = 1991;
//     console.log(this.year);
//   },
// };

// obje.functionDec();

// console.log(this);

// const myfunction = function () {
//   let year = 1991;
//   console.log(this.year);
// };

// myfunction();

// const deleteFunction = function () {
//   let year = 12;
// };

// const myObj = {
//   x: 12,
//   calc: function () {
//     console.log(this.x);
//   },
// };

// myObj.calc();

// function demand(birthYear) {
//   let age = 2024 - birthYear;
//   console.log(age);
// }
// demand(1993);

// const calcAge = function (birthYear) {
//   let age = 2024 - birthYear;
//   console.log(age);
//   console.log(this);
// };

// calcAge(1994);

// const calcAgeArrow = (birthYear) => {
//   let age = 2024 - birthYear;
//   console.log(age);
//   console.log(this);
// };

// calcAgeArrow(2000);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     return 2024 - this.year;
//   },
// };

// console.log(jonas.calcAge());

// const mubashir = {
//   year: 2000,
// };

// mubashir.calcAge = jonas.calcAge;

// console.log(mubashir.calcAge());

// const ali = {
//   name: "ali",
//   useName: function () {
//     return `my name is ${this.name}`;
//   },
// };

// const mubashir = {
//   name: "mubashir",
// };

// mubashir.useName = ali.useName;
// // console.log(mubashir.useName());
// // console.log(ali.useName());

// const f = mubashir.useName;

// f();

// console.log(f);
