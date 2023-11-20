// Crea una funzione che accetta due elementi del dom, uno e' il parent e l'altro e' un elemento che voglio sia aggiunto al parent come figlio.

function parentPlusChild(parent, child) {

    const childElement = document.createElement(child);
    parent.append(childElement);
}