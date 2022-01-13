// javaScript-filter-numbersBigger
// Aufgabenstellung - Teil 1
const array = [80, 120, 90, 130, 145, 99, 85, 125, 132];
// Aufgabenstellung - Teil 2
const arrayFiltered =  array.filter((zahl) => zahl > 100);
// Aufgabenstellung - Teil 3
console.log(arrayFiltered);
// Zusatz
const arrayFiltered2 =  array.filter((zahl) => zahl > 100 && zahl <= 140);

console.log(arrayFiltered2);
