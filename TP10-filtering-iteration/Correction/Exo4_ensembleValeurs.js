const readline = require('readline-sync');
const utils = require("./utils.js");

function filtreUnique(tab) {
    let resultat = [];
    for (let nb of tab) {
        if (! resultat.includes(nb)) {
            resultat.push(nb);
        }
    }
    resultat.sort((a,b) => a - b);
    return resultat;
}

//----------------------------------
// le programme principal
//----------------------------------

const tab1 = utils.lireTableauDeNombres();
console.log("\nLe tableau avec les valeurs lues");
console.log(tab1.toString());

let tab2 = filtreUnique(tab1);

console.log("\nLe nouveau tableau trié avec les valeurs uniques");
console.log(tab2.toString());