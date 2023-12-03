const Personne = require("./Personne.js");
const readline = require("readline-sync"); // pour utiliser le module readline-sync

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

console.log("Tableau initial");
console.table(tabPersonnes);

let reponse = 0;
do {
	console.log(`\nCritères de tri
- 1: par Age,
- 2: par Nom,
- 3: par Prénom
- 4: par Age, Nom et Prénom
- 5: tableau initial non trié`);
	reponse = readline.questionInt("votre choix (0: pour quitter) : ");
	switch (reponse) {
		case 0:
			console.log("\nAu revoir ");
			break;
		case 1:
			console.log("\nTri par age");
			console.table(tabPersonnes.slice().sort((p1, p2) => p1.age - p2.age));
			break;
		case 2:
			console.log("\nTri par nom");
			console.table(tabPersonnes.slice().sort((p1, p2) => p1.nom.localeCompare(p2.nom)));
			break;
		case 3:
			console.log("\nTri par prénom");
			console.table(tabPersonnes.slice().sort((p1, p2) => p1.prenom.localeCompare(p2.prenom)));
			break;
		case 4:
			console.log("\nTri par Age, Nom et Prénom");
			console.table(tabPersonnes.slice().sort((p1, p2) => p1.age - p2.age || p1.nom.localeCompare(p2.nom) || p1.prenom.localeCompare(p2.prenom) ));
			break;
		case 5:
			console.log("\nTableau initial non trié");
			console.table(tabPersonnes);
			break;
		default:
			console.log("choix incorrect, recommencez");
			break;
	}
} while (reponse !== 0) ;


