const readline = require("readline-sync");

let taille = readline.questionInt("donnez la taille du motif : ");

/* on crée la ligne avec le bon nombre d'étoiles*/
let motif = "*";
for (let i = 1; i < taille; i++) {
  motif = motif + "**";
}

/* Pour chaque ligne, on affiche la totalité de la ligne d'étoile en modifiant la couleur d'affichage
afin que les étoiles soient des étoiles affichées en jaune sur fond rouge et que les espaces soient 
des étoiles de la même couleur que le fond (noir sur fond noir donc "invisibles").
Attention : dans le terminal intégré de VSCode cela ne marche pas tout à fait, car les étoiles
correspondant aux espaces appraissent en gris clair sur fond noir. */
for (let i = 1; i <= taille; i++) {
  // voir https://stackoverflow.com/questions/67241111/python-colored-text-to-the-terminal
  console.log(
    "\x1b[40m\x1b[30m%s\x1b[41m\x1b[33m%s\x1b[40m\x1b[30m%s\x1b[0m",  // le format
    motif.substring(0, taille - i), // les espaces avant les étoiles
    motif.substring(taille - i, taille + i - 1), // les étoiles
    motif.substring(taille + i - 1, 2 * taille - 1) // les espaces après les étoiles
  );
}
