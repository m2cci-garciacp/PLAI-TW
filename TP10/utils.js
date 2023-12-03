const readline = require('readline-sync');  // pour utiliser le module readline-sync

/**
 * lit sur la console une suite de nombres séparés par des virgules et les stocke dans
 * un tableau
 * @returns le tableau de nombres (tous les éléments du tableau sont de type number)
 */
exports.lireTableauDeNombres = function () {

    let index = 0;
    const entree = readline.question("entrez les valeurs séparées par des virgules:\n");
    const tab = entree.split(',');
    for (let i = 0; i < tab.length; i++) {
        tab[i] = parseFloat(tab[i]); // convertit les string en number
    }
    return tab;
}

/**
 * Pose une question à l'utilasteur, à laquelle il doit répondre
 * par l'affirmative (Oui) ou la négative (Non). La réponse s'effectue 
 * en entrant soit la lettre 'O' ou 'o' pour une réponse affirmative
 * soit la lettre 'N' ou 'n' pour une réponse négative.
 * Si l'utilisateur répond autre  chose que l'une de ces valeurs
 * question lui est reposée à nouveau (et ce jusqu'a ce qu'il donne une
 * réponse correcte)
 * 
 * @param {string} message : la question à poser
 * @returns true si la réponse est affirmative , false sinon
 */
exports.encore = function (message) {
    do {
        let rep = readline.question(message + " (O/N): ");
        rep = rep.toUpperCase(); // transforme la réponse en majuscules
        // on aurait pu le faire directement ligne 17 en écrivant 
        // let rep = readline.question(message + " (O/N): ").toUpperCase();
        if (rep === 'O') {
            return true;
        } 
        else if (rep === 'N') {
            return false;
        } 
        else {
            console.log("désolé nous n'avons pas compris votre réponse ");
        }
    } while (true);
}