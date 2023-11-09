/**
 * Dessine un pavage de fleurs dans un canvas
 * @param {string} canvasId l'identifiant de l'élément canvas
 * @param {number} nbEllipses le nombre d'ellipses pour dessiner une fleur
 * @param {number} nbreFleursLigne le nombre de fleurs par ligne
 * @returns {undefined}
 */
function pavageFleurs(canvasId, nbEllipses, nbreFleursLigne) {
    console.log("dessinerChampFleur");
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");
    const rayon = canvas.width / (2* nbreFleursLigne);
    let cx, cy; //coordonnées du centre de la fleur à dessiner
    console.log("rayon=", rayon, nbreFleursLigne);
    console.log("canvas=(",canvas.width,", ",canvas.height,")    cx=",cx,"     cy=",cy);
    effacer(canvas);
    for (let noLigne = 0; noLigne <= nbreFleursLigne; noLigne++) {
        console.log("dessin de la ligne  " + noLigne);
        for (let i = 0; i <= nbreFleursLigne; i++) {
            console.log("fleur " + i + " de la ligne " + noLigne);
            //TODO
            dessinerFleur(ctx, rayon*(2*i+1), rayon*(2*noLigne+1), rayon, nbEllipses, 'red');
            //cx = cx + rayon;
        }
    }
}

