
const Personne = require("./Personne.js"); // pour utiliser la classe Personne
const readline = require("readline-sync"); // pour utiliser le module readline-sync

/**
 * 
 * @param {Array} tab un tableu de Personnes
 * @returns l'age moyen des personnes stockées dans tab
 */
function ageMoyen1(tab) {
	let s = 0;
	for (let i=0; i<tab.length; i++) {
		s+=tab[i].age;
	}
    return s/tab.length;  // a faire ....
}
/**
 * 
 * @param {Array} tab un tableu de Personnes
 * @returns l'age moyen des personnes stockées dans tab
 */
function ageMoyen2(tab) {
	let s = 0;
	for (let p of tab) {
		s+=p.age;
	}
    return s/tab.length;  // a faire ....
}
/**
 * 
 * @param {Array} tab un tableu de Personnes
 * @returns l'age moyen des personnes stockées dans tab
 */
function ageMoyen3(tab) {
	let s = 0;
	tab.forEach((p)=>{s+=p.age});
    return s/tab.length;  // a faire ....
}
/**
 * 
 * @param {Array} tab un tableu de Personnes
 * @returns l'age moyen des personnes stockées dans tab
 */
function ageMoyen4(tab) {
	let s = tab.reduce((a,p)=>a+p.age, 0)
    return s/tab.length;  // a faire ....
}

let tabPersonnes = [
	new Personne("Sophie", "DURAND", 30),
	new Personne("Pierre", "DUPONT", 25),
	new Personne("Jean", "SANTER", 41),
	new Personne("Paul", "DUPONT", 30),
	new Personne("Aurélie", "DUPOND", 30),
	new Personne("Jean", "JORESSE", 65),
	new Personne("Jacques", "DURAND", 50),
	new Personne("Mathieu", "DUPOND", 22),
	new Personne("Martine", "DURAND", 51),
	new Personne("Maeva", "DUPOND", 30),
];

console.table(tabPersonnes);
console.log("\nL'age moyen est  : " + ageMoyen1(tabPersonnes));
console.log("L'age moyen est  : " + ageMoyen2(tabPersonnes));
console.log("L'age moyen est  : " + ageMoyen3(tabPersonnes));
console.log("L'age moyen est  : " + ageMoyen4(tabPersonnes));

