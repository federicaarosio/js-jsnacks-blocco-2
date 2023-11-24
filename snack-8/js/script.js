// Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

const listaZucchine = [
  {varieta: "varieta verde", peso: 15, lunghezza: 4},
  {varieta: "varieta righe", peso: 3, lunghezza: 23},
  {varieta: "varieta gialla", peso: 3, lunghezza: 16},
  {varieta: "varieta contadina", peso: 2, lunghezza: 17},
  {varieta: "varieta verde", peso: 6, lunghezza: 27},
  {varieta: "varieta sole", peso: 18, lunghezza: 20},
  {varieta: "varieta gialla", peso: 3, lunghezza: 8},
  {varieta: "varieta dolce", peso: 7, lunghezza: 9},
  {varieta: "varieta americana", peso: 10, lunghezza: 6},
  {varieta: "varieta tonda", peso: 14, lunghezza: 4},
  {varieta: "varieta gialla", peso: 5, lunghezza: 10},

];

let pesoTotale = 0;

for (let i = 0 ; i < listaZucchine.length ; i++){
  const zucchinaAttuale = listaZucchine[i];

  pesoTotale = pesoTotale + listaZucchine[i].peso;

  console.log(zucchinaAttuale);
}

console.log(pesoTotale);