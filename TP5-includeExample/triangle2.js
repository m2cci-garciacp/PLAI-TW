const readline = require('readline-sync');

let hauteur = readline.questionInt("Introduir l'hauteur de la piramide: ");


let i=0;
let j;
while (i<hauteur) 
{   
    j=0;
    ligne = ""
    while (j<(hauteur+i+1))
    {
        if (j<(hauteur-i)) {
            ligne += " ";
        } else if (j<(hauteur+i+1)) {
            ligne += "*";
        }
        j++;
    }
    console.log(ligne);
    i++;
}
