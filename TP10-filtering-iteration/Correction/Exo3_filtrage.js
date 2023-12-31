const readline = require("readline-sync");
const utils = require("./utils.js");

/**
 * Etant donné tab un tableau de nombre, renvoie un nouveau tableau ne contenant que les 
 * valeurs de tab situées dans un intervalle donné.
 * @param {Array} tab le tableau à filtrer
 * @param {number} minValue  borne inférieure de l'intervalle de filtrage
 * @param {number} maxValue  borne supérieure de l'intervalle de filtrage
 * @returns un nouveau tableau contenant les valeurs de tab comprises entre minValue et maxValue.
 */
function filtrerSeuil(tab, minValue, maxValue) {
	return tab.filter((elt) => elt >= minValue && elt <= maxValue);
}

//----------------------------------
// le programme principal
//----------------------------------

const tab1 = utils.lireTableauDeNombres();

console.log("\nfiltrage sans modifier le tableau filtré\n")
do {
	console.log("données à filtrer " + tab1);
  let valMin = readline.questionInt("seuil minimal : ");
  let valMax = readline.questionInt("seuil maximal : ");
	console.log("Données filtrées : " + filtrerSeuil(tab1, valMin, valMax));
} while (utils.encore("\nautre filtrage ? "));

console.log("Au revoir");

