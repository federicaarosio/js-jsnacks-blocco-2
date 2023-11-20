// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

function areSameLength (wordOne, wordTwo) {
    const userWordOne = prompt("Type one word");
    const userWordTwo = prompt("Type another word");
    if (userWordOne.length === userWordTwo.length) {
        console.log(userWordOne + " " + userWordTwo);
        return (userWordOne + userWordTwo)
    } else if (userWordOne.length > userWordTwo.length) {
        console.log(userWordOne);
        return (userWordOne)
    } else {
        console.log(userWordTwo);
        return (userWordTwo)
    }
}

areSameLength ();