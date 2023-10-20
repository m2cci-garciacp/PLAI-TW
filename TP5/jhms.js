const readline = require('readline-sync');

/**
 * Calcule le quentient et reste de n et div
 * @param {number} n est le numero initial
 * @param {number} div est le numero pour diviser
 * @returns 
 */
function quotientReste (n, div) {
    return [parseInt(n/div), parseInt(n%div)]
}
/**
 * Convertir les secondes données a secondes, minutes, heures et jours
 * @param {number} secondes pour convertir
 */
function s2jhms (secondes) {
    let minutes=0;
    let heures=0;
    let jours=0;

    [minutes, secondes] = quotientReste (secondes, 60);
    [heures, minutes] = quotientReste (minutes, 60);
    [jours, heures] = quotientReste (heures, 24);

    return [secondes, minutes, heures, jours]
}

/**
 * Affiche un temps en jours, heures, minutes et secondes
 * @param {number} secondes a afficher
 * @param {number} minutes a afficher 
 * @param {number} heures a afficher
 * @param {number} jours   afficher
 * @returns 
 */
function afficher_jhms (secondes, minutes, heures, jours) {
    let msg=`Cette durée equivaut a `;


    if (jours > 0) {
        msg += `${jours} jours `;
    }
    if (heures > 0) {
        msg += `${heures} heures `;
    }
    if (minutes > 0) {
        msg += `${minutes} minutes `;
    }
    if (secondes > 0) {
        msg += `${secondes} secondes `;
    }

    console.log(msg);
}


let secs = readline.questionFloat("Donnez une durée en secondes: ");

let min, her, jrs;

[secs, min, her, jrs] = s2jhms(secs);
afficher_jhms (secs, min, her, jrs);
