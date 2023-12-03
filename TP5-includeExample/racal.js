
const utils = require("./utils.js");

function unRacal(un, x) {
    return 0.5 * (un + x / un)
}

function racineCarree(x, precision = 1e-5) {

    let u1 = x / 2;
    let i = 0;

    while (Math.pow(Math.pow(u1, 2) - x, 2) > Math.pow(precision, 2)) {
        u1 = unRacal(u1, x);
        i++;
    }

    return u1;
}


function main() {
    let x = utils.lireNumber(0, 100, "Entrew un numero [0..100] pour calculer la racine carree: ");
    let racineCarreX = racineCarree(x, precision = 1e-5);
    console.log(`La valleur approchée de la racine carrée de ${x} est ${racineCarreX} .`);
}


main();