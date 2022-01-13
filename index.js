const numbers = [80, 120, 90, 130, 145, 99, 85, 125, 132];

const newNumbers = numbers.filter((number) => number > 100);
const newNumbers2 = numbers.filter((number) => number > 100 && number < 140);

console.log("newNUmberArray:",`${newNumbers}`);
console.log("newNUmberArray2:", `${newNumbers2}`);
