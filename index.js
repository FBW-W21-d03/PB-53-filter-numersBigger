const zahlen = [80, 120, 90, 130, 145, 99, 85, 125, 132];

const neueZahlen = zahlen.filter((number) => number > 100);
const neuZahlen2 = zahlen.filter((number) => number > 100 && number < 140);

console.log(neueZahlen);
console.log(neuZahlen2);