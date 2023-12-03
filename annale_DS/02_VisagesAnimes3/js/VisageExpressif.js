/*
 * © Philippe GENOUD - Université Grenobles Alpes
 * Equipe STeamer - Laboratoire d'Informatique de Grenoble
 *
 */

/**
 * VisageExpressif.js : Classe permettant de définir le type objet correspondant à des
 * visages 'rebondissants' qui changent d'expression chaque fois qu'ils touchent l'un des
 * bords du canvas où ils se déplacent.
 */
class VisageExpressif extends Visage {
	/**
	 * les couleurs associées aux différentes expression
	 *  @type Array
	 */
	static couleurs = ["#b7daff", "yellow", "#4caf50"];

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
	constructor(canvas, xCentre, yCentre, rayon = 50, vx = 5, vy = 5, expression = 0) {
		// appel constructeur de la super classe (Visage) ppur définir les propriétés
		// correspondant à un Visage
		super(canvas, xCentre, yCentre, rayon, vx, vy);
		// propriétés supplémentaires pour les Visages expressifs
		this.expression = expression;
		this.couleurVisage = VisageExpressif.couleurs[this.expression];
	}

	/**
	 * redéfinition de la méthode deplacer pour prendre en compte le
	 * changement d'expression et couleur lorsqu'il y a rebond.
	 * @returns {undefined}
	 */
	deplacer() {
		super.deplacer();
		if (
			this.xCentre < this.rayon ||
			this.xCentre > this.canvas.width - this.rayon ||
			this.yCentre < this.rayon ||
			this.yCentre > this.canvas.height - this.rayon
		) {
			// dans son déplacement le Visage a atteint l'un des bords il change de couleur
			// et d'expression
			this.expression = (this.expression + 1) % VisageExpressif.couleurs.length;
			this.couleurVisage = VisageExpressif.couleurs[this.expression];
		}
	}

	/**
	 * redéfinition de la méthode dessinerBouche qui varie selon l'expression
	 * du visage
	 * @returns {undefined}
	 */
	_dessinerBouche() {
		// la bouche
		switch (this.expression) {
			case 0:
				this._dessinerBoucheImpassible();
				break;
			case 1:
				super._dessinerBouche();
				break;
			default:
				this._dessinerBoucheColère();
				break;
		}
	}

	_dessinerBoucheImpassible() {
		this._ctx.beginPath(); // beginPath permet de définir un nouveau chemin de tracé, en
		// l'absence de cette instruction on aurait tracé un trait reliant le point de début de
		// tracé du cercle matérialisant le visage au point de début du cercle
		// matérialisant la bouche
		this._ctx.strokeStyle = "red";
		this._ctx.arc(this.xCentre, this.yCentre - 1.3 * this.rayon, this.rayon * 1.8, 0.4 * Math.PI, 0.6 * Math.PI, false);
		this._ctx.stroke();
	}

	_dessinerBoucheColère() {
		// la bouche
		this._ctx.beginPath(); // beginPath permet de définir un nouveau chemin de tracé, en
		// l'absence de cette instruction on aurait tracé un trait reliant le point de début de
		// tracé du cercle matérialisant le visage au point de début du cercle
		// matérialisant la bouche
		this._ctx.arc(this.xCentre, this.yCentre + this.rayon * 0.8, this.rayon * 0.5, -Math.PI / 5, (-4.0 / 5.0) * Math.PI, true);
		this._ctx.strokeStyle = "red";
		this._ctx.stroke();
	}
}

class VisageClown extends VisageExpressif {
	static couleurs = ["blue", "red", "green"];

	constructor(canvas, xCentre, yCentre, rayon = 50, vx = 5, vy = 5, expression = 0, rayonNez = 10) {
		// appel constructeur de la super classe (Visage) ppur définir les propriétés
		// correspondant à un Visage
		super(canvas, xCentre, yCentre, rayon, vx, vy, expression);

		this.couleurNez = VisageClown.couleurs[this.expression];
		this.rayonNez = rayonNez;
	}

	dessiner() {
		// la bouche
		super.dessiner();
		this._dessinerNez();
	}

	_dessinerNez() {
		this.couleurNez = VisageClown.couleurs[this.expression];
		this._ctx.beginPath();
		this._ctx.strokeStyle = "#369";
		this._ctx.fillStyle = this.couleurNez;
		//this._ctx.arc(this.xCentre + dxYeux, yYeux, this.rayon * 0.1, 0, Math.PI * 2, false);
		this._ctx.arc(this.xCentre, this.yCentre+this.rayon*0.1, this.rayonNez, 0, Math.PI * 2, true);
		this._ctx.fill();
		this._ctx.stroke();
	}
}
