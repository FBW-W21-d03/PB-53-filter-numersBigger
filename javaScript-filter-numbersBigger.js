const zahlen = [80, 120, 90, 130, 145, 99, 85, 125, 132];
console.log("Aufgabe 1:\n", zahlen);

const gröser100 = zahlen.filter((zahl) => zahl >= 100);
console.log("Aufgabe 2:\n", gröser100);

const zwischen100Und140 = zahlen.filter( (zahl) => zahl >= 100 && zahl <= 140);
console.log("Aufgabe 3:\n", zwischen100Und140);