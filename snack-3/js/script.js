// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const firstUserWord = prompt("Type a word");
const secondUserWord = prompt("Type a word");

if (areSameLength(firstUserWord === secondUserWord)) {
    //sono lunghe uguali
    console.log(firstUserWord, secondUserWord);
} else if (firstUserWord.length > secondUserWord.length) {
    console.log(firstUserWord);
} else {
    console.log(secondUserWord);
}

function areSameLength (wordOne, wordTwo) {
    if (wordOne.length === wordTwo.length) {
        return true;
    } else {
        return false;
    }
}
