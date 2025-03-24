// 1. Crea una funzione che accetta due parametri: firstName, lastName. 
// La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.

function createName (firstName, lastName) {

    return {
        firstName,
        lastName
    }
}

// 2. Esporta la funzione dal file.

module.exports = createName;