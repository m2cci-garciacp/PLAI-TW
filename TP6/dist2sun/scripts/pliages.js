/**
 * Calcule le nombre de fois qu'il faut plier une feuille
 * de 1/10 mmm d'épaisseur pour obtenir un épaisseur > à une distance donnée.
 * @param {number} dist la distance (en km)
 * @returns {number} la nombre de pliages nécessaires
 */
function calculerNbrePlis(dist) {
    let epaisseur = .0001;     // épaisseur d'une feuille en mètes (valeur initiale 1/10 mm)
    let nbrePlis = 0; // le nombre de plis effectués
    dist = dist * 1000; // conversion d'unités km -> m
    while (epaisseur < dist) {
        epaisseur *= 2; // la feuille est pliée en deux, l'épaisseur double
        nbrePlis++;
    }
    return nbrePlis;
}



