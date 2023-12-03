/*
 * © Philippe GENOUD - Université Grenobles Alpes
 * Equipe STeamer - Laboratoire d'Informatique de Grenoble
 */

//--------------------------------------------------------------------------------
// Programme principal exécuté au chargement de la page testVisagesExpressifs.
// Deux visages sont créés (v1 un VisageExpressif, v2 un Visage 'normal') et
// sont animés dans le canvas "zoneDessin"
// -------------------------------------------------------------------------------


const canvas = document.getElementById("zoneDessin"); // récupération de l'objet correspondant à l'élément canvas
let timerId = null; // identifiant du timer gérant l'animation

let v1 = new VisageExpressif(canvas, canvas.width / 2, canvas.height / 2, 40, 5, 3, 2);
let v2 = new Visage(canvas, canvas.width / 2 + 2 * v1.rayon, canvas.height / 2, 40, 3, -4);
let v3 = new VisageClown(canvas, canvas.width / 2 - 2 * v1.rayon, canvas.height / 2, 40, 5, 3,0);
v1.dessiner();
v2.dessiner();
v3.dessiner();

// associe au bouton start l'action de démarrage de l'animation
document.querySelector("#startBtn").addEventListener("click", function () {
		// change l'état des boutons Start et Stop
		document.getElementById("stopBtn").disabled = false;
		document.getElementById("startBtn").disabled = true;
	// définition d'un timer pour l'animation
	timerId = setInterval(function () {
		// la fonction qui sera appelée par le timer (ici toutes les 20ms)
		v1.deplacer();
		v2.deplacer();
		v3.deplacer();
		// on efface le canvas
		canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
		// on redessine les visages
		v1.dessiner();
		v2.dessiner();
		v3.dessiner();
	}, 20);
});

// associe au bouton stop l'action d'arrêt de l'animation
document.querySelector("#stopBtn").addEventListener("click", function () {
		// change l'état des boutons Start et Stop
		document.getElementById("stopBtn").disabled = true;
		document.getElementById("startBtn").disabled = false;
		// interruption du timer
		clearInterval(timerId);
});
