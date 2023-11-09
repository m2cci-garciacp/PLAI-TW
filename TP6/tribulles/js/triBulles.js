
/**
 * effectue un tri à bulles sur un tableau.
 * @param {Array} tab la tableau à trier;
 * @returns {undefined}
 */
function trier(tab) {
    let length = tab.length - 1;
    let noPassage = 1; 
    let swapped = false;
    do {
        console.log("passage " + noPassage);
        document.write("<hr>passage " + noPassage + "<hr>");
        for (let i = 0; i < length; ++i) {
            if (tab[i] > tab[i + 1]) {
                echanger(tab, i, i + 1);
                afficher("échange de " + tab[i + 1] + " et " + tab[i],tab, i);
                swapped = true;
            }
        }
        noPassage++;
    }
    while (swapped === true);
    afficher("", tab);
    document.write("<span class='mess'>pas d'échange d'éléments, le tableau est trié</span>");
}




