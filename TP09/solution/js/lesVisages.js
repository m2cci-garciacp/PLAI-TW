/*
 * © Philippe GENOUD - Université Grenobles Alpes
 * Equipe STeamer - Laboratoire d'Informatique de Grenoble
 *
 * lesVisages.js : Code exécuté lorsque le document est chargé.
 * Deux objets Visage sont créés et affichés cote à cote dans le canvas "zoneDessin"
 * puis animés.
 */
/**
 * retourne un nombre entier tiré au hasard dans un intervalle (les bornes de l'intervalle
 * sont incluses).
 * pour en savoir plus :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param {number} min la borne inférieure de l'intervalle.
 * @param {number} max la borne supérieure de l'intervalle.
 * @returns {Number} le nombre tiré au hasard.
 */
function getRandomInt(min, max) {
	min = Math.ceil(min); // au cas ou min et max ne seraient pas des entiers
	max = Math.floor(max);
	return Math.floor(Math.random() * (max + 1 - min)) + min;
}

/**
 * permet de créer un Visage dont les caractéristiques (centre, rayon, déplacement
 * élementaire) sont définies de manière aléatoire
 *
 * @param {Canvas} canvas le canvas dans lequel le visage sera dessiné
 * @param {number} rMin le rayon minimal pour un visage
 * @param {number} rMax le rayon maximal pour un visage
 * @param {number} vMin la valeur minimale pour la composante vx ou vy du déplacement élémentaire
 * @param {type} vMax la valeur maximale pour la composante vx ou vy du déplacement élémentaire
 * @returns {Visage} le Visage créé
 */
function creerVisage(canvas, rMin, rMax, vMin, vMax) {
	let rayon = getRandomInt(rMin, rMax);
	let xCentre = getRandomInt(rayon, canvas.width - rayon);
	let yCentre = getRandomInt(rayon, canvas.height - rayon);
	let vx = getRandomInt(vMin, vMax);
	let vy = getRandomInt(vMin, vMax);
	return new Visage(canvas, xCentre, yCentre, rayon, vx, vy);
}

/**
 * génère de manières aléatoire un nombre de visages définis par la valeur
 * de l'input nbreVisages, efface le canvas et les réaffiche
 * @returns {undefined}
 */
function genererVisages() {
	// 'vide' le tableau stockant les visages
	tabVisages.length = 0;
	// génère aléatoirement nbVisages, ce nombre étant donné par l'input 'nbreVisages'
	let nbVisages = parseInt(document.getElementById("nbreVisages").value);
	for (let i = 0; i < nbVisages; i++) {
		tabVisages[i] = creerVisage(canvas, 20, 40, -5, 5);
	}
	// efface le canvas et dessine les nouveaux visages
	afficherVisages();
}

/**
 * Efface le canvas et affiche les visages contenus dans le tableau tabVisages
 * @returns {undefined}
 */
function afficherVisages() {
	// on efface le canvas
	canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
	// parcours du tableau et affichage de chaque visage
	for (let i = 0; i < tabVisages.length; i++) {
		tabVisages[i].dessiner();
	}
}

/**
 * fait effectuer un déplacement élémentaire aux visages contenus dans le
 * tableau tabVisages et les redessine
 * @returns {undefined}
 */
function deplacerVisages() {
	let ctxt = canvas.getContext("2d");
	for (let i = 0; i < tabVisages.length; i++) {
		tabVisages[i].deplacer();
	}
	afficherVisages();
}

/**
 * fonction exécutée pour démarrer l'animation
 * @returns {undefined}
 */
function startAnimation() {
	// change l'état des boutons Start et Stop
	document.getElementById("stopBtn").disabled = false;
	document.getElementById("startBtn").disabled = true;
	// l'animation étant lancée on ne peut pas modifier le nombre de visages à afficher
	document.getElementById("generateVisagesBtn").disabled = true;
	document.getElementById("nbreVisages").disabled = true;
	// création d'un timer qui toutes les 20 milisecondes déplace et
	// réaffiche les visages
	timerId = setInterval(deplacerVisages, 20);
}

/**
 * fonction exécutée pour stopper l'animation
 * @returns {undefined}
 */
function stopAnimation() {
	// change l'état des boutons Start et Stop
	document.getElementById("stopBtn").disabled = true;
	document.getElementById("startBtn").disabled = false;
	// l'animation étant interrompue on peut modifier le nombre de visages à afficher
	document.getElementById("generateVisagesBtn").disabled = false;
	document.getElementById("nbreVisages").disabled = false;
	// interruption du timer
	clearInterval(timerId);
}

//----------------------------------------------------------------------
// le programme 'principal' exécuté lorsque la page HTML a été chargée
//----------------------------------------------------------------------

// définition d'une variable globale servant à référencer le timer contrôlant
// l'animation. On a besoin de la déclarer globale, car elle est utilisée
// en interne par les deux fonctions startAnimation et stopAnimation
let timerId;

// récupération de l'objet correspondant à l'élément canvas
const canvas = document.getElementById("zoneDessin");

// un tableau pour stocker les références des Visages dessinés et animés dans le canvas.
// ce tableau est créé et initialisé avec les deux visages initiaux utilisés dans les exercices précédents
const tabVisages = [
	new Visage(canvas, canvas.width / 2, canvas.height / 2, 40), //  visage avec déplacement par défaut
	new Visage(canvas, canvas.width / 2 + 60, canvas.height / 2, 20, -3, 2), // déplacement vx = -3, vy = 2
];

// affiche les visages contenus dans tabVisages
afficherVisages();

// associe aux boutons start et stop les actions de démarrage et
// d'arrêt de l'animation
document.querySelector("#startBtn").addEventListener("click", startAnimation);
document.querySelector("#stopBtn").addEventListener("click", stopAnimation);

// associe à l'input de saisie des couleurs l'action permettant de modifier
// la couleur de tous les Visages. Au contraire des boutons start et stop
// où une fonction séparée avait été définie pour l'action, l'action est ici
// définie directement à l'aide d'une expression fonction anonyme passée
// directement comme argument de la méthode addEventListener
document.querySelector("#visagesColor").addEventListener("change", function () {
	Visage.prototype.couleurVisage = document.getElementById("visagesColor").value;
	if (document.getElementById("stopBtn").disabled) {
		// le bouton stop est désactivé (c'est donc le bouton start qui est activable),
		// ce qui signifie que l'animation a été stoppée, il faut redessiner les visages pour
		// prendre en compte le changement de couleur
		afficherVisages();
	}
});

// associe au bouton 'generateVisagesBtn' l'action permettant de générer aléatoirement
// des Visages, dont le nombre est donné par l'input 'nbreVisages'
document.querySelector("#generateVisagesBtn").addEventListener("click", genererVisages);
