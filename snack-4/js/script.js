// Crea una funzione che accetta due numeri, se il primo e' divisibile per il secondo, allora ritorna vero, altrimenti ritorna falso. Micro bonus: se sono uguali ritorna il numero.

function isDivisible (number, divider) {
       
    if (number === divider) {
        return number;
    } else if (number % divider === 0 ) {
        return true;
    } else {
        return false;
    }

}