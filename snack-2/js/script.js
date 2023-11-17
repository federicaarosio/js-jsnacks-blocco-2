// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da questi due array distinti vuole generare una falsa lista di invitati con nome e cognome.

//Ho lista 1
//ho lista 2

const nomi = [
    "Marta",
    "Claudia",
    "Lorenzo",
    "Francesco"
];

const cognomi = [
    "Bianchi",
    "Rossi",
    "Martini",
    "Motta"
];

//genenrare lista con nome e cognome
    
for (i = 0; i < nomi.length; i++) {
    
    const falseList = console.log(nomi[i] + " " + cognomi[i]);

}