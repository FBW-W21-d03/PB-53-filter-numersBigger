
const zahlen = [80, 120, 90, 130, 145, 99, 85, 125, 132];
zahlen.sort();

const result = zahlen.filter(checkZahlen);

function checkZahlen(zahl) {
  return zahl  >= 100 && zahl <= 140;
}


console.log(result);


