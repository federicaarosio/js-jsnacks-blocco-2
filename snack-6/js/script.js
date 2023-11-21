// Chiedo all'utente un numero e genero attraverso una funzione un numero di quadrati equivalente al numero inserito dall'utente nel DOM, in qualsiasi forma. 

const userNumber = parseInt(prompt("Type a number"));

const wrapperElement = document.querySelector("section.wrapper");
for (let index = 0; index < userNumber; index++) {
    wrapperElement.appendChild(generateNSquares());
}

function generateNSquares() {
    const divElement =  document.createElement("div");
    divElement.classList.add("square");
    return divElement;
}