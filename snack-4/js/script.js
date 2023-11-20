// Crea una funzione che accetta due numeri, se il primo e' divisibile per il secondo, allora ritorna vero, altrimenti ritorna falso. Micro bonus: se sono uguali ritorna il numero.

function twoNumbers (numberOne, numberTwo) {
    const a = numberOne;
    const b = numberTwo;
    if (a % b == 0 ) {
        return true
    } else {
        return false
    }
}

let finalResult = twoNumbers(2, 3);
console.log(finalResult);