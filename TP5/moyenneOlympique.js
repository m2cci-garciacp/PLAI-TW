const readline = require('readline-sync');

function lireNumber (lowerLim, higherLim, marque) {
    let ec;

    ec = readline.questionFloat("");
    if ( ( (ec>=lowerLim) && (ec<=higherLim) ) || (ec===marque)) {
        return ec
    } else {
        console.log("Le numero doit etre entre",lowerLim," et ", higherLim);
        return lireNumber (lowerLim, higherLim, marque)
    }
}

function calculerMoyenneOlympique() {
    let min = 1e8, max = -1;
    let somme = 0;
    let n = 0;
    const marque=-1;

    console.log("Donnes une sequence d'entier entre 0 et 100. -1 comme marque de fin.")


    ec = lireNumber (0, 100, marque);
    while (ec != marque) {
        somme += ec;
        n++;
        if (ec < min) { min = ec; }
        if (ec > max) { max = ec; }
        ec = lireNumber (0, 100, marque);
    }
    if (n > 2) {
        console.log("La moyenne olympique est ", (somme - min - max) / (n - 2));
    } else {
        console.log("La moyenne olympique n'est pas calculable");

    }
}

calculerMoyenneOlympique();
