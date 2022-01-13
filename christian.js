const zahlen = [80, 120, 90, 130, 145, 99, 85, 125, 132];

let zahlenÜberHundert = zahlen.filter((zahl) => zahl > 100);
console.log("Alle Zahlen über 100:", zahlenÜberHundert);

let zahlenBereich = zahlen.filter((zahl) => zahl >= 100 && zahl <= 140);
console.log("Alle Zahlen zwischen 100 und 140:", zahlenBereich);
