const readline = require("readline-sync");

let n = readline.questionInt("Entrez une nombre \n");
let i = 1;

while (i <= n) {
  let ligne = "";

  let j = 1;

  while (j <= n - i) {
    ligne +=" ";

    j++;
  }

  let k = 1;

  while (k <= 2 * i - 1) {
    ligne += "*";

    k++;
  }

  console.log(ligne);

  i++;
}
