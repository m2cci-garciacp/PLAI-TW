const readline = require('readline-sync');
const utils = require("./utils.js");


/**
 * retourne un nouveau tableau de nombres trié et qui contient
 * les valeurs en un seul exemplaire (pas deux fois la même valeur)
 * d'un tableau tab passé en paramètre
 * @param {array} tab 
 * @returns le nouveau tableau trié avec les éléments uniques
 */
function valeursUniques(tab) {
    let resultat = [];
    for (let nb of tab) {
        if (! resultat.includes(nb)) {
            resultat.push(nb);
        }
    }
    resultat.sort((a,b) => a - b);
    return resultat;
}

/**
 * retourne un tableau de nombre qui est l'intersection de
 * deux tabelaux de nombres
 * @param {array} tab1 le premier tableau de nombres
 * @param {array} tab2 le deuxième tableau de nombres
 * @returns un nouveau tableau qui est l'intersection de tab1 et tab2
 */
function intersection(tab1,tab2) {
    let tab3 = [];
    for (let nb of tab1) {
        if (tab2.includes(nb)) {
            tab3.push(nb);
        }
    }
    return tab3;
}

//----------------------------------
// le programme principal
//----------------------------------

console.log("Premier tableau (tab1) ")
const tab1 = utils.lireTableauDeNombres();
console.log("Deuxième tableau (tab2) ")
const tab2 = utils.lireTableauDeNombres();

let tab1Unique = valeursUniques(tab1);
let tab2Unique = valeursUniques(tab2);
console.log("\nLes valeurs contenues dans tab1");
console.log(tab1Unique.toString());
console.log("\nLes valeurs contenues dans tab2");
console.log(tab2Unique.toString());

let tab3 = intersection(tab1Unique,tab2Unique);
console.log("\nLes valeurs communes à tab1 et tab2");
console.log(tab3.toString());