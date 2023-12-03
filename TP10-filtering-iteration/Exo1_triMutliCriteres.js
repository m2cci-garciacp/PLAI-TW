const Personne = require("./Personne.js"); // pour utiliser la classe Personne
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
			console.log("\nTri par age"); // slice does not modify the inital table
			console.table(tabPersonnes.slice().sort((a, b) => a.age - b.age)); // plus petit d'abord
			//console.table(tabPersonnes.slice().sort((p1, p2) => p1.nom.localeCompare(p2.nom)));
			break;
		case 2:
			console.log("\nTri par nom");
			console.table(tabPersonnes.slice().sort((a, b) => {
				if (a.nom === b.nom) { return 0; }      // egal, change pas l'ordre
				else if (a.nom < b.nom) { return -1; }  // a dabord
				else { return 1; };                     // b dabord 
			}));
			break;
		case 3:
			console.log("\nTri par prénom");
			console.table(tabPersonnes.slice().sort((a, b) => {
				if (a.prenom === b.prenom) { return 0; }
				else if (a.prenom < b.prenom) { return -1; }
				else { return 1; };
			}));
			break;
		case 4:
			console.log("\nTri par Age, Nom et Prénom");
			console.table(tabPersonnes.slice().sort((a, b) => {
				if (a.prenom === b.prenom) { return 0; }
				else if (a.prenom < b.prenom) { return -1; }
				else { return 1; };
			})
				.sort((a, b) => {
					if (a.nom === b.nom) { return 0; }
					else if (a.nom < b.nom) { return -1; }
					else { return 1; };
				}).sort((a, b) => a.age - b.age)
			);      // succesif SORTs
			//console.table(tabPersonnes.slice().sort((p1, p2) => p1.age - p2.age || p1.nom.localeCompare(p2.nom) || p1.prenom.localeCompare(p2.prenom) ));
			
			break;
		case 5 :
			console.log("case 5");
			console.table(tabPersonnes);
			break;
		default:
			console.log("choix incorrect, recommencez");
			break;
	}
} while (reponse !== 0);

