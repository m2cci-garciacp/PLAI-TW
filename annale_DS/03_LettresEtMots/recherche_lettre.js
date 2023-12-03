
const readline = require('readline-sync');
const utils = require('utils.js');

function nbreOccurences1(lettre, mot) 
{
    let cpt = 0;
    for (let e of mot){
        cpt+=(lettre===e)?1:0;
    }
    return cpt;
}



let mot;
let lettre;
do {
mot = readline.question(" insert mot : ");
lettre = readline.question(" insert lettre : ");
console.log(nbreOccurences1(lettre, mot));
 } while (utils.encore(" continuer encore ?"));