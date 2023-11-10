/**
 * Dessine une ellipse dans un canvas
 * @param {CanvasRenderingContext2D} ctx le contexte graphique du canvas
 * @param {number} cx l'abscisse du centre de l'ellipse
 * @param {number} cy l'ordonnée du centre de l'ellipse
 * @param {number} rx le rayon horizontal de l'ellipse
 * @param {number} ry le rayon vertical de l'ellipse
 * @param {number} angle l'angle (en degrés) de l'ellipse par rapport à l'horizontale
 * @param {string} style le style de tracé (couleur) pour le contour de l'ellipse
 */
function ellipse(ctx, cx, cy, rx, ry, angle, style) {
    ctx.save(); // sauvegarde l'état du contexte graphique
    ctx.beginPath();
    ctx.translate(cx, cy);
    ctx.rotate(angle * Math.PI / 180);
    ctx.scale(rx, ry);
    ctx.arc(0, 0, 1, 0, 2 * Math.PI, false);
    ctx.restore(); // restaure l'état original du contexte graphique
    ctx.save();
    if (style) {
        ctx.strokeStyle = style;
    }
    ctx.stroke();
    ctx.restore();
}

/**
 * Dessine une "fleur" dans un canvas 
 * @param {CanvasRenderingContext2D} ctx le contexte graphique du canvas
 * @param {number} xc   abscisse du centre de la fleur
 * @param {number} yc   ordonnée du centre de la fleur
 * @param {number} rayon le rayon de la fleur
 * @param {number} nbEllipses nombre d'ellipses utilisées pour dessiner la fleur 
 * @param {type} style la couleur du trait
 */
function dessinerFleur(ctx, xc, yc, rayon, nbEllipses, style) {
    let angle = 0;
    const deltaAngle = 180.0 / nbEllipses;
    for (i = 0; i < nbEllipses; i++, angle += deltaAngle) {
        ellipse(ctx, xc, yc, rayon, rayon / 10, angle, style);
    }
}

/**
 * Efface le contenu d'un canvas
 * @param {Canvas} canvas le canvas à effacer
 * @returns {undefined}
 */
function effacer(canvas) {
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
}


/**
 * dessine une 'fleur' au centre d'un canvas
 * @param {string} canvasId l'identifiant de l'élément canvas
 * @param {number} nbEllipses le nombre d'ellipses utilisées pour dessiner la fleur
 * @param {string} couleur la couleur des pétales
 * @returns {undefined}
 */
function dessiner1Fleur(canvasId, nbEllipses, couleur) {
    let canvas = document.getElementById(canvasId);
    effacer(canvas);
    // calcul du centre de la fleur (centre du canvas)
    let xCentre = canvas.width / 2;
    let yCentre = canvas.height / 2;
    // calcul du rayon de la fleur
    let rayon = Math.min(canvas.width, canvas.height) / 2;
    // dessin de la fleur
    dessinerFleur(canvas.getContext("2d"), xCentre, yCentre, rayon, nbEllipses, couleur);
}

