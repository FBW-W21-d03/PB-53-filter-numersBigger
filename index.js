// 1 )const
 zahlen = [80, 120, 90, 130, 145, 99, 85, 125, 132

];
// 2 )
const zahlenFilered = zahlen.filter((zahl)=> zahl > 100);
// 3 )
console.log(zahlenFilered);
// Zusatz )
const zahlenFilered = zahlen.filter((zahl)=> zahl > 100 && zahl<= 140);

console.log(zahlenFilered);