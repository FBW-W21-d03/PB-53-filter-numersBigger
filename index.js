//Teil 1

//const number = ["80", "120", "90", "130", "145", "99", "85", "125", "132"];
const number = [80, 120, 90, 130, 145, 99, 85, 125, 132];
number.sort();

//Teil 2

const filter = number.filter(checkNumber);

//Teil 3

function checkNumber(number) {
  return number>= 100 && number<= 140;
}
//Zusatz Aufgabe

console.log(filter);