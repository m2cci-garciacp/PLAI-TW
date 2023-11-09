const readline = require('readline-sync');

let n = readline.questionInt("Choisir un nombre de motif");

for (let index = 1; index < 1+n; index++) {
    console.log(" ".repeat(n-index),"*".repeat(index*2-1))
    
}