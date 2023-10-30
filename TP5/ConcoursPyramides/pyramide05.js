 const readline = require('readline-sync');


let nb = readline.questionInt ("Saisie la taille de cette fuc**ng pyramide : ");


/**
 * construit une pyramide à nb étages
 * @param {int} nb 
 */
function pyramide(nb) {
    
}
    let nombre = nb;
    let init = " ";
    let etoile = "*";
    let resultat = "";
    i = 1

    while (i <= nb) {
        let ligne = init.repeat(nombre)

        let nbetoile = i * 2 - 1
        nombre = nombre - 1
        i = i + 1
        resultat = ligne + etoile.repeat(nbetoile)
        console.log(resultat)
    }


pyramide(nb)







