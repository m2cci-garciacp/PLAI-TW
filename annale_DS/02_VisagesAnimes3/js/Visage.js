/*
 * © Philippe GENOUD - Université Grenobles Alpes
 * Equipe STeamer - Laboratoire d'Informatique de Grenoble
 *
 * Visage.js : Classe permettant de définir le type objet correspondant à
 * visages 'rebondissants'.
 */

//------------------------------------------------------------------------------
// Constructeur et méthodes pour les visages rebondissants
//------------------------------------------------------------------------------
class Visage {
	/**
	 * Constructeur pour des objets Visage
	 * @param {Canvas} canvas le canvas dans lequel le visage se déplace
	 * @param {number} xCentre abscisse du centre du visage
	 * @param {number} yCentre ordonnée du centre du visage
	 * @param {number} [rayon=50] rayon du visage
	 * @param {number} [vx = 5] déplacement horizontal élémentaire du visage
	 * @param {number} [vy = 5] déplacement vertical élémentaire du visage
	 * @returns {Visage}
	 */
	constructor(canvas, xCentre, yCentre, rayon = 50, vx = 5, vy = 5) {
		this.canvas = canvas;
		this.xCentre = xCentre;
		this.yCentre = yCentre;
		this.rayon = rayon;
		this.vx = vx;
		this.vy = vy;
		// attribut à usage interne (on préfixe l'identifiant par _ (underscore) pour
		// le signaler (c'est une convention, dans l'état actuel de JavaScript (nov 2022)
		// il n'est pas encore possible de définir des attributs protégés (protected) comme dans Java).
		this._ctx = this.canvas.getContext("2d");
		// l'intérêt de cet attribut est de ne pas avoir à réexecuter cette instruction
		// chaque fois que l'on dessine un des éléments du visage
	}

	//----------------------------------------------------------------------------------
	// propriétés statiques associées à la classe Visage
	//----------------------------------------------------------------------------------
	/**
	 * une propriété couleurVisage qui définit la couleur de remplissage des Visages.
	 * Cette propriété sera utilisée pour tous les Visages n'ayant pas de couleur propre.
	 * @type String
	 */
	static couleurVisage = "bisque";

	//-----------------------------------------------------------------------------------
	// Méthodes
	//-----------------------------------------------------------------------------------
	/**
	 * Dessine le visage.
	 * @returns {undefined}
	 */
	dessiner() {
		this._dessinerTete();
		this._dessinerBouche();
		this._dessinerYeux();
	}

	/**
	 * dessine le disque matérialisant la tête
	 * comme pour _ctx (voir constructeur), on préfixe le nom de la methode par
	 * _ pour indiquer qu'elle est à usage interne.
	 * @returns {undefined}
	 */
	_dessinerTete() {
		// le cercle délimitant le Visage
		this._ctx.beginPath();
		this._ctx.arc(this.xCentre, this.yCentre, this.rayon, 0, Math.PI * 2, true);
		this._ctx.strokeStyle = "coral"; // couleur de tracé des contours
		this._ctx.fillStyle = this.couleurVisage || Visage.couleurVisage; // couleur de remplissage
		// si l'objet a sa propre couleur on utilise celle-ci mais si il n'en a pas
		// on utilise la propriété statique de la classe Visage
		this._ctx.fill();
		this._ctx.stroke();
	}

	/**
	 * dessine la bouche
	 * @returns {undefined}
	 */
	_dessinerBouche() {
		// la bouche
		this._ctx.beginPath(); // beginPath permet de définir un nouveau chemin de tracé, en
		// l'absence de cette instruction on aurait un trait reliant le point de début de
		// tracé du cercle délimitant le visage au point de début du cercle
		// matérialisant la bouche
		this._ctx.arc(this.xCentre, this.yCentre, this.rayon * 0.6, 0, Math.PI, false);
		this._ctx.strokeStyle = "red";
		this._ctx.stroke();
	}

	/**
	 * dessine les yeux
	 * @returns {undefined}
	 */
	_dessinerYeux() {
		let yYeux = this.yCentre - this.rayon * 0.2;
		let dxYeux = this.rayon * 0.3;
		// les yeux
		this._ctx.beginPath();
		this._ctx.strokeStyle = "#369";
		this._ctx.fillStyle = "#c00";
		this._ctx.arc(this.xCentre + dxYeux, yYeux, this.rayon * 0.1, 0, Math.PI * 2, false);
		this._ctx.stroke();
		this._ctx.beginPath();
		this._ctx.arc(this.xCentre - dxYeux, yYeux, this.rayon * 0.1, 0, Math.PI * 2, false);
		this._ctx.stroke();
	}

	/**
	 * fait effectuer au visage un déplacement élémentaire. Lorsque le visage
	 * atteint l'un des côtés du canvas où il se situe, il rebondit en inversant
	 * son déplacement horizontal si le bord gauche ou droit du canvas est touché
	 * et en inversant son déplacement vertical si le bord haut ou le bord
	 * bas du canvas est touché.
	 */
	deplacer() {
		this.xCentre += this.vx;
		this.yCentre += this.vy;
		if (this.xCentre < this.rayon || this.xCentre > this.canvas.width - this.rayon) {
			// bord gauche ou bord droit du canvas atteint
			this.vx = -this.vx;
		}
		if (this.yCentre < this.rayon || this.yCentre > this.canvas.height - this.rayon) {
			// bord haut ou bord bas du canvas atteint
			this.vy = -this.vy;
		}
	}
}
