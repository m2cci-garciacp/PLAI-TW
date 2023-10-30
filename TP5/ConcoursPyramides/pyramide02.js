const readline = require('readline-sync');
const taille = readline.question("Donnez la taille du motif : ");

for (let i = 1; i <= taille; i++) {
  let ligne = '';
  let espaces = '';

  // Ajoute des espaces pour centrer l'étoile
  for (let j = 1; j <= taille - i; j++) {
    espaces += ' ';
  }

  // Ajoute les étoiles
  for (let k = 1; k <= 2 * i - 1; k++) {
    ligne += '*';
  }

  console.log(espaces + ligne);
}
