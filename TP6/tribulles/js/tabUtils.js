/**
 * echange deux éléments d'un tableau
 * @param {Array} tab le tableau concerné
 * @param {type} i indice du premier élément à échanger
 * @param {type} j indice du deuxième élément à échanger
 * @returns {undefined}
 */
function echanger(tab, i, j) {
    let tmp = tab[i];
    tab[i] = tab[j];
    tab[j] = tmp;
}

/**
 * mélange un tableau par algorithme de Fisher-Yates
 * (pour en savoir plus consulter page de Mike Bostock
 * consacrée à cet alogrithme: http://bost.ocks.org/mike/shuffle/)
 * @param {Array} tab le tableau à mélanger 
 * @returns {Array} le tableau mélangé 
 */
function melanger(tab) {
    let m = tab.length; // le nombre d'élément qui n'ont pas encore été mélangés
    let j;

    while (m > 0) {
        // tab[0..m-1] contient les éléments restant à mélanger
        // on prend un élément au hasard parmis les m éléments non mélangés
        // j sa position , un entier entre 0 et m-1
        j = Math.floor(Math.random() * m);

        // on l'échange avec le m-ième élément
        echanger(tab, m - 1, j);

        // tab[0..m-2] contient les éléments restant à mélanger
        // tab[m-1..tab.length-1] contient les éléments déjà mélangés
        m--;
        // tab[0..m-1] contient les éléments restant à mélanger
    }
    return tab;
}

/**
 * affiche sur une ligne les éléments d'un tableau suivis d'un éventuel
 * message.
 * 
 * @param {sttring} mess le message à afficher en fin de ligne
 * @param {array} tab le tableau à afficher
 * @param {number} pos1 position de l'élément echangé avec son suivant
 * @returns {undefined}
 */
function afficher(mess, tab, pos1) {
    let res = "";
    for (let i = 0; i < tab.length; i++) {
        if (i === pos1) {
          res += '<span class="echange1">' + tab[i] + '</span> ';
        } else if (i === pos1 + 1) {
          res += '<span class="echange2">' + tab[i] + '</span> ';
        } else {
            res += tab[i] + ' ';
        }
    }
    document.write(res + '<span class="mess">' + mess + "</span><br>");
    console.log(mess);
    console.log(res);
}



