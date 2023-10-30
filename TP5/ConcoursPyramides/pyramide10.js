const readline = require("readline-sync");

let taille = readline.question("Donnez la taille du motif : ");

for (let noLigne = 0; noLigne < taille; noLigne++) {
  for (let j = taille - 1; j >= 0; j--) {
    process.stdout.write(j <= noLigne ? "* " : " ");
  }
  process.stdout.write("\n");
}
