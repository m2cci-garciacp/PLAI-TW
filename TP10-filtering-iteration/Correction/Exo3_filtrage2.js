const readline = require("readline-sync");
const utils = require("./utils.js");


/**
 * retire d'un tableau tous les éléments situés hors d'un intervalle donné
 * @param {Array} tab le tableau à filtrer
 * @param {number} minValue  borne inférieure de l'intervalle de filtrage
 * @param {number} maxValue  borne supérieure de l'intervalle de filtrage
 * @returns le tableau tab modifié
 */
function filtrerSeuil(tab, minValue, maxValue) {
	for (let i = 0; i < tab.length; i++) {
		let val = tab[i];

		// supprimer l'élement si val est en dehors de l'intervalle
		if (val < minValue || val > maxValue) {
			tab.splice(i, 1);
			i--;
		}
	}
	return tab;
}

//----------------------------------
// le programme principal
//----------------------------------

const tab1 = utils.lireTableauDeNombres();

console.log("\nfiltrage en modifiant le tableau filtré\n");
do {
	console.log("données à filtrer " + tab1);
  let valMin = readline.questionInt("seuil minimal : ");
  let valMax = readline.questionInt("seuil maximal : ");
	console.log("Données filtrées : " + filtrerEnPlace(tab1, valMin, valMax));
} while (utils.encore("\nautre filtrage ? "));

console.log("Au revoir");

