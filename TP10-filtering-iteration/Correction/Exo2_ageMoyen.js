
const Personne = require("./Personne.js");
const readline = require("readline-sync"); // pour utiliser le module readline-sync

function ageMoyen1(tab) {
    let sommeAges = 0;
    for (let i = 0; i < tab.length; i++) {
         sommeAges += tab[i].age;
    }
    return sommeAges /tab.length;
}

function ageMoyen2(tab) {
    let sommeAges = 0;
    for (let p of tab) {
         sommeAges += p.age;
    }
    return sommeAges /tab.length;
}

function ageMoyen3(tab) {
    let sommeAges = 0;
    tab.forEach( p => sommeAges += p.age);
    return sommeAges /tab.length;
}

function ageMoyen4(tab) {
    return tab.reduce((sommeAges, p) => sommeAges + p.age, 0) /tab.length;
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
console.log("\nl'age moyen est  : " + ageMoyen1(tabPersonnes));
console.log("\nl'age moyen est (for classic) : " + ageMoyen1(tabPersonnes));
console.log("\nl'age moyen est (for of)      : " + ageMoyen2(tabPersonnes));
console.log("\nl'age moyen est (forEach)     : " + ageMoyen3(tabPersonnes));
console.log("\nl'age moyen est (reduce)      : " + ageMoyen4(tabPersonnes));

