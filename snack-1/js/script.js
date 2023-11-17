// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const array = [];
let sum = 0;

while (sum < 50) {
    const userNumber = parseInt(prompt("Type a number"));
    if ( !isNaN (userNumber)) {
        sum = sum + userNumber;
        array.push(userNumber);

    }
    
}

console.log(array, sum);