let readline = require("readline-sync");

function Pyramide() {
    let hauteur;
    let texteVisible = "*" ;
    let texteInvisible = "" ;

    hauteur = readline.questionInt("Quelle hauteur de pyramide voulez vous ?");

    let blanc = hauteur - 1;

    for (let i = 1; i <= blanc; i++) {                   //Definition d'une chaine de caractere vide permettant de décaller la première étoile
        texteInvisible = texteInvisible + " ";
    }


    for (let i = 1; i <= hauteur; i++) {

        texte = texteInvisible + texteVisible  ;     
        console.log(texte);

        texteInvisible = texteInvisible.replace(" ",""); 
        texteVisible = texteVisible + "**"; 

    }

}

Pyramide() ;