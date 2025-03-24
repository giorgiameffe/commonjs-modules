// 1. Importa la tua funzione da names.js

const createName = require('./names.js');
// console.log(createName('Giorgia','Meffe'));

// 2. Importa la tua funzione da hobbies.js

const createHobbiesList = require('./hobbies.js');
// console.log(createHobbiesList('horseriding', 'painting', 'boardgames'))

// 3. Crea una funzione che non ha parametri.
// La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. 
// All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

function personalInfo () {

    return {
        fullName: createName('Giorgia', 'Meffe'),
        hobbies: createHobbiesList('horseriding', 'painting', 'boardgames')
    }

}

console.log(personalInfo());