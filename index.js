"use strict";

const array = [80, 120, 90, 130, 145, 99, 85, 125, 132];
const arrayFiltered = array.filter((zahl) => zahl > 100);
console.log(arrayFiltered);
const arrayFiltered2 = array.filter((zahl) => zahl > 100 && zahl <= 140);
console.log(arrayFiltered2);
