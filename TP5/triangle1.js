const readline = require('readline-sync');

let hauteur = readline.questionInt("Introduir l'hauteur de la piramide: ");

let i,j;
for (i=0; i<hauteur; i++) 
{   
    j=1;
    ligne = ""
    for (j=0; j<(2*hauteur+1); j++) 
    {
        if (j<(hauteur-i)) {
            ligne += " ";
        } else if (j<(hauteur+i+1)) {
            ligne += "*";
        }
    }
    console.log(ligne);
}