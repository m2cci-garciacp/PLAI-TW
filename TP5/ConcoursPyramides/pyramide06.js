// fonction pour tracer une pyramide
const readline = require('readline-sync');

function pyramide() {
    let haut = readline.questionInt(`donnez la hauteur du motif pyramide : `);
    let motif = ``;
    let separateur = ` `
    let i = 0;
    while (i < haut) {
        motif = separateur.repeat(haut - i - 1) + "*".repeat(i * 2 + 1);
        console.log(motif);
        i++;
    }
}
pyramide();