// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da questi due array distinti vuole generare una falsa lista di invitati con nome e cognome.


const firstNames = [
    "Marta",
    "Claudia",
    "Lorenzo",
    "Francesco"
];

const lastNames = [
    "Bianchi",
    "Rossi",
    "Martini",
    "Motta"
];


const numberOfRandomNames = 15;
const resultingArray = [];


while ( resultingArray.length < numberOfRandomNames ){
    // un elemento random dal primo array
    let firstNameGen = firstNames[ Math.floor( Math.random() * firstNames.length)] ;

    //  un elemento random del secondo array
    let lastNameGen = lastNames[ Math.floor( Math.random() * lastNames.length)];

    // genero il nome-cognome completo
    let completeNameGen = firstNameGen + ' ' + lastNameGen;

    //  inseriemo completeNameGen in questo array
    resultingArray.push(completeNameGen);

    console.log(firstNameGen, lastNameGen);
}

console.log(resultingArray);