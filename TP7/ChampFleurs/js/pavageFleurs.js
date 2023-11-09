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
    const rayon = canvas.width / 2 * nbreFleursLigne;
    let cx, cy; //coordonnées du centre de la fleur à dessiner
    console.log("canvas=(",canvas.width,", ",canvas.height,")    cx=",cx,"     cy=",cy);
    effacer(canvas);
    for (let noLigne = 1; noLigne < nbreFleursLigne; noLigne++) {
        console.log("dessin de la ligne  " + noLigne);
        cx=
        for (let i = 1; i < nbreFleursLigne; i++) {
            console.log("fleur " + i + " de la ligne " + noLigne);
            //TODO
            dessinerFleur(ctx, cx+2*i*rayon/nbreFleursLigne, cy+2*noLigne*rayon/nbreFleursLigne, rayon/nbreFleursLigne, nbEllipses, 'red');
            //cx = cx + rayon;
        }
    }
}

