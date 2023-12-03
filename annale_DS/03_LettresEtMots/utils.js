const readline = require('readline-sync');  // pour utiliser le module readline-ync

/**
 * Pose une question à l'utilsateur, à laquelle il doit répondre
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


/*

une autre manière d'écrire la fonction encore en utilisant les possibilités de
readline-syn (voir la doc) https://www.npmjs.com/package/readline-sync


exports.encore = function (message) {
    do {
        let rep = readline.question(message + " (O/N): ", {
            trueValue: ['o', 'O', 'y', 'Y'],
            falseValue: ['n', 'N']
        });
        if (typeof rep !== 'boolean') {
            console.log("désolé nous n'avons pas compris votre réponse ");
        } else {
            return rep;
        }
    } while (true);
}

*/
