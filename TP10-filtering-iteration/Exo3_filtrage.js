const utils = require("./utils.js"); // pour utiliser les fonctions de lecture contenues dans utils.js
const readline = require("readline-sync"); // pour utiliser le module readline-sync

/* filtrer array */
function filtrerSeuil1(tab, minValue, maxValue) {
	return tab.filter((x) => (x >= minValue && x <= maxValue));
}
/* filtrer array in place */
function filtrerSeuil1(tab, minValue, maxValue) {
	for (let i = 0; i < tab.length; i++) {
		let val = tab[i];

		// supprimer l'élement si val est en dehors de l'intervalle
		if (val < minValue || val > maxValue) {
			tab.splice(i, 1); /* remove 1 element a partir de ith position */
			/* splice(2,1) remove 1 element a partir d'index 2 */
			/* splice(-2,1) remove 1 element a partir d'index -2 (python-like) : -2 and -1 */
			/* splice(2,0, x) inserts x at index 2 */
			/* splice(2,0, x,y) inserts x,y at index 2 */
			/* splice(2,1, x,y) remove el at index 1 and then inserts x,y at index 2 */
			/* splice(2) removes all el from index 2 on */
			i--;
		}
	}
	return tab;
}
/* indexOf donne tjs la premiere occurrence. donc si lelement nest pas la premier occurrence out! */
function unique(tab) {
	return tab.filter(function (item, pos) {
		return tab.indexOf(item) == pos;
	});
}
function unique2(tab) {
	return Array.from(new Set(tab));
}
function unique3(tab) {   /* solution */
    let resultat = [];
    for (let nb of tab) {
        if (! resultat.includes(nb)) {
            resultat.push(nb);
        }
    }
    resultat.sort((a,b) => a - b);
    return resultat;
}
/* intersect */
function intersect1(array1, array2) {
	return array1.filter(value => array2.includes(value));
}
function intersect2(array1, array2) {
	return array1.filter(value => array2.indexOf(value)!==-1);
}


//----------------------------------
// le programme principal
//----------------------------------

let tab1 = utils.lireTableauDeNombres();
let tab2 = utils.lireTableauDeNombres();

console.log("\nfiltrage sans modifier le tableau filtré\n")
do {
	console.log("données à filtrer  " + tab1);
	console.log("données à filtrer  " + tab2);
	
	/* FILTER */
	//let valMin = readline.questionInt("seuil minimal : ");
	//let valMax = readline.questionInt("seuil maximal : ");
	//tab1 = filtrerSeuil(tab1, valMin, valMax) /* recopier sur le precedent */
	//console.log("Données filtrées : " + filtrerSeuil(tab1, valMin, valMax));

	/* set OF ARRAY */
	//console.log("Données filtrées1 : " + unique(tab1).sort((a,b)=>a-b));
	//console.log("Données filtrées2 : " + unique2(tab1).sort((a,b)=>a-b));

	/* INTERSECTION */
	let tab12 = unique(tab1).sort((a,b)=>a-b);
	let tab22 = unique(tab2).sort((a,b)=>a-b);
	console.log("Intersect : " + intersect1(tab12, tab22));
	console.log("Intersect : " + intersect2(tab12, tab22));

	console.log("Données filtrées : " + tab1);
	console.log("Données filtrées : " + tab2);
} while (utils.encore("\nautre filtrage ? "));

console.log("Au revoir");

