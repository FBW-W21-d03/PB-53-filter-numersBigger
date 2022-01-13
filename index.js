const numbertoFilter = [80, 120, 90, 130, 145, 99, 85, 125, 132];
const newFilterNumber = numbertoFilter.filter ((filtering)=> filtering > 100);
console.log ("All numbers after 100:",newFilterNumber);
//Zusatz
const between = numbertoFilter.filter((betwenNumbers) => betwenNumbers > 100 && betwenNumbers < 140);
console.log("All numbers between 100 and 140:",between);