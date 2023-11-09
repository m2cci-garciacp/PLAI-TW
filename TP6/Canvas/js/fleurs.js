

let canvas2 = document.getElementById("canvasFleurs");
let ctx2 = canvas2.getContext("2d");

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

function fleur(ctx, cx, cy, rx, ry, style) {
    for (i=0; i<12; i++) {
        ellipse(ctx, cx, cy, rx, ry,i*30, style);
    }
}
function dessinerFleurs() {
    effacer(ctx2);
    let number = parseInt(document.getElementById('nbFleurs').value);
    let px_par_fleur = 500/number;
    console.log(px_par_fleur, number);

    for (let i=0; i<number; i++) {
        for (let j=0; j<number; j++) {
            fleur(ctx2, 0.5*px_par_fleur+px_par_fleur*i, 
                        0.5*px_par_fleur+px_par_fleur*j, 
                        0.45*px_par_fleur,
                        0.05*px_par_fleur,
                        'black');
            console.log(i,j);
        }
    }
    
}




document.getElementById("nbFleurs").setAttribute('onchange', 'dessinerFleurs()');