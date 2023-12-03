
const readline = require('readline-sync');
const utils = require('utils.js');

function estPresente(lettre, mot) 
{
    return mot.indexOf(lettre)!==-1;
}

/*
let mot = readline.question(" insert mot : ");
let lettre = readline.question(" insert lettre : ");
console.log(estPresente(lettre, mot));*/

function toutesPresentes(mot1, mot2) 
{

    let index1=0 ;
    let index2 = mot2.indexOf(mot1[index1]);
    while (mot2[index2]===mot1[index1])
    {
        index1++;
        index2++;
    }
    if (index1!==mot1.length) 
    {return mot1[index1];} else {return "";}

}

let mot1;
let mot2;
do {
    mot1 = readline.question(" insert mot : ");
    mot2 = readline.question(" insert mot : ");
    console.log(toutesPresentes(mot1, mot2));
} while(utils.encore("continuer?"));