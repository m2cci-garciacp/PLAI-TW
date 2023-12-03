/* 
 * © Philippe GENOUD - Université Grenobles Alpes
 * Equipe STeamer - Laboratoire d'Informatique de Grenoble
 *
 * Visage.js : le type objet Visage permettant de définir des
 * visages 'rebondissants'.
 */

//------------------------------------------------------------------------------
// Constructeur et méthodes pour les visages rebondissants
//------------------------------------------------------------------------------

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
 function Visage(canvas, xCentre, yCentre, rayon = 50, vx = 5, vy = 5) {
  this.canvas = canvas;
  this.xCentre = xCentre;
  this.yCentre = yCentre;
  this.rayon = rayon;
  this.vx = vx;
  this.vy = vy;
}

/**
* Dessine le visage.
* @returns {undefined}
*/
Visage.prototype.dessiner = function () {
  let ctx = this.canvas.getContext("2d");
  let yYeux = this.yCentre - this.rayon * 0.20;
  let dxYeux = this.rayon * 0.3;
  
  // le cercle délimitant le Visage
  ctx.beginPath();
  ctx.arc(this.xCentre, this.yCentre, this.rayon, 0, Math.PI * 2, true);
  ctx.strokeStyle = "coral";  // couleur de tracé des contours
  ctx.fillStyle = this.couleurVisage;   // couleur de remplissage
  ctx.fill();
  ctx.stroke();

  // la bouche
  ctx.beginPath();  // beginPath permet de définir un nouveau chemin de tracé, en
  // l'absence de cette instruction on aurait un trait reliant le point de début de
  // tracé du cercle délimitant le visage au point de début du cercle
  // matérialisant la bouche
  ctx.arc(this.xCentre, this.yCentre, this.rayon * 0.6, 0, Math.PI, false);
  ctx.strokeStyle = "red";
  ctx.stroke();

  // les yeux
  ctx.beginPath();
  ctx.strokeStyle = "#369";
  ctx.fillStyle = "#c00";
  ctx.arc(this.xCentre + dxYeux, yYeux, this.rayon * 0.1, 0, Math.PI * 2, false);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(this.xCentre - dxYeux, yYeux, this.rayon * 0.1, 0, Math.PI * 2, false);
  ctx.stroke();
};

/**
 * une propriété couleurVisage qui définit la couleur de remplissage des Visages.
 * Cette propriété sera "héritée" par tous les Visages. 
 * @type String 
 */
 Visage.prototype.couleurVisage = 'bisque';

/**
 * fait effectuer au visage un déplacement élémentaire. Lorsque le visage
 * atteint l'un des côtés du canvas où il se situe, il rebondit en inversant
 * son déplacement horizontal si le bord gauche ou droit du canvas est touché
 * et en inversant son déplacement vertical si le bord haut ou le bord
 * bas du canvas est touché.
 */
 Visage.prototype.deplacer = function () {
  this.xCentre += this.vx;
  this.yCentre += this.vy;
  if (this.xCentre < this.rayon || this.xCentre > (this.canvas.width - this.rayon)) {
      // bord gauche ou bord droit du canvas atteint
      this.vx = -this.vx;
  }
  if (this.yCentre < this.rayon || this.yCentre > (this.canvas.height - this.rayon)) {
      // bord haut ou bord bas du canvas atteint
      this.vy = -this.vy;
  }
};
