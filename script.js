// Wir möchten alle Zahlen filtern, die einen bestimmten Grenzwert überschreiben.

// ## Aufgabenstellung - Teil 1
// Schreibe ein Array mit folgenden Zahlen: 80, 120, 90, 130, 145, 99, 85, 125, 132.
const zifer = [80, 120, 90, 130, 145, 99, 85, 125, 132];
zifer.sort();
// ## Aufgabenstellung - Teil 2
// Wende auf das Array nun die filter-Methode an, um alle Zahlen über 100 in ein neues Array zu filtern.
const filter = zifer.filter(checkZifer);
// ## Aufgabenstellung - Teil 3
// Prüfe nun, ob das Filtern richtig funktioniert hat.


function checkZifer(numbers) {
  return numbers >= 100 && numbers <= 140;

}
// ## Zusatz
// Kannst du auch alle Zahlen zwischen 100 und 140 filtern?
  console.log(filter);