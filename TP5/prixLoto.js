const utils = require("./utils.js");

let minLim, maxLim;

/**
 * printHeader imprime sur l'ecran une affiche drole du jeu
 * @param {number} nMax est le borne superieure du jeu. Le borne inferieur est 1.
 * @param {number} essaisMax est le nombre maximal d'eesais permis
 * @param {number} player est 1 si user ou  autre si ordinateur
 */
function printHeader(nMax, essaisMax, player) {
    if (player === 1) {
        console.log("\n********************************************************");
        console.log("*------------------------------------------------------*");
        console.log("*|                 JEUX DE LA LOTO                    |*");
        console.log("*------------------------------------------------------*");
        console.log("********************************************************");
        console.log(`    Numeros de 1 a ${nMax}, ${essaisMax} essaies.\n`);
    }
}

/**
 * getMove demande ou calcule le prochain numero selon si le playuer est ordinateur ou user
 * @param {number} ec est le dernier element choisi 
 * @param {number} result indique si notre ec est trop grand (-1) ou trop petit (1), ou juste (0)
 * @param {number} nMax est la borne superieure du jeu
 * @param {number} essaisRestants est le nombre essais restants
 * @param {number} player  est 1 si user ou autre si ordinateur
 * @returns le nouveau element choisi
 */
function getMove(ec, result, nMax, essaisRestants, player) {
    if (player == 1) {
        return utils.lireNumber(1, nMax, message = `Enter number (${essaisRestants} left): `);
    } else {
        return computerLoto(ec, result, 1, nMax);
    }
}

/**
 * printEnd imprime un messager sur l'ecran selon la conclusion du jeu: echec ou reussite
 * @param {number} secretNumber est le numero secret qu'il fallait trouver
 * @param {number} essais est le nombre de essaies utilises
 * @returns true si reussi ou false si game over
 */
function printEnd(secretNumber, essais) {
    if (essais == 0) {
        console.log(`\n>>>> GAME OVER: le numero secret est ${secretNumber}<<<<\n\n`);
        return false;
    } else {
        console.log(`\n>>>> BRAVO!!!!!!!!!!!!! Vous avez gagne avec ${essais} essais<<<<\n\n`);
        return true;
    }
}

/**
 * computerLoto calcule le prochain numero
 * @param {*} ec est le dernier numero choisi
 * @param {*} result indique si notre ec est trop grand (-1) ou trop petit (1), ou juste (0)
 * @param {*} mnLim est la borne minimale de posibilite du numero secret
 * @param {*} mxLim est la borne maximale de posibilite du numero secret
 * @returns 
 */
function computerLoto(ec, result) {
    if (minLim == maxLim) {// exact
        return minLim;
    }
    else if (result == 1) {// Too LOW
        minLim = ec + 1;
    }
    else if (result == -1) {// Too high
        maxLim = ec - 1;
    }
    return parseInt(0.5 * (minLim + maxLim));
}

/**
 * mainLoto est le programme principal de la Loto
 * @param {*} nMax est la borne maximale du jeu
 * @param {*} essaisMax est le nombre maximal d'essais permis
 * @param {*} player est 1 si user ou autre si computer
 * @returns true si reussi ou false si game over
 */
function mainLoto(nMax = 1000, essaisMax = 10, player = 1) {
    let x, ec, i = essaisMax, result = -2;

    minLim = 1, maxLim = nMax;
    x = parseInt(Math.random() * nMax) + 1;

    printHeader(nMax, essaisMax, player);

    ec = getMove(ec = ec, result = result,
        nMax = nMax, essaisRestants = i,
        player = player)

    while ((ec != x) && (i > 0)) {
        if (ec > x) {
            if (player != 0) { console.log("Trop grand"); }
            result = -1;
        }
        else if (ec < x) {
            if (player != 0) { console.log("Trop petit"); }
            result = 1;
        } else {
            result = 0;
        }
        i--;

        ec = getMove(ec = ec, result = result,
            nMax = nMax, essaisRestants = i,
            player = player)
    }

    if (player != 0) {
        return printEnd(secretNumber = x, essais = essaisMax - i + 1);
    } else {
        console.log("Essaies: ", essaisMax - i + 1);
        return ec == x;
    }
}

/**
 * main initialize les arguments du jeu et appel mainLoto en boucle.
 */
function main() {
    let nMax = 10, essaisMax = 10; player = 0;  //player=0 computer quiet, player=1 est user, player=2 est computer verbose
    utils.loopFunction(mainLoto, [nMax, essaisMax, player]);

}


main();