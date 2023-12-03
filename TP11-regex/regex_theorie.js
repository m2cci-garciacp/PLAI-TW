let str = "Bear has tears";
let regex = str.match(/[bt]ear/gi);  /* array of matches if g, premier occ inf not g, null if not found */
console.log(regex);

let iterator = str.matchAll(/(([bt]ea)r)/gi);
console.log(iterator.next());  /* .value[0] = 'Bear', .value[1] = 'Bea' (captured value), .value.index= index of first letter, .value.input=the whole str, .value.groups=, .done=false until fini. */
console.log(iterator.next());
console.log(iterator.next());  /* .done=true */

/* iterate over iterator */
iterator = str.matchAll(/([bt]ear)/gi);
let res = iterator.next();
while (! res.done) {
    console.log(res.value[0] + " : " + res.value.index);
    res = iterator.next();
}
/* or */
iterator = str.matchAll(/([bt]ear)/gi);
for (let value of iterator) {
    console.log(value[0] + " : " + value.index);
}

/* replace */
let str1 = str.replace(/[bnrt]ear/gi, "...");   /*  on ne modifie pas le str initial */
console.log(str);
console.log(str1);
str1 = str.replace(/[bf]ear/gi, "big $&");   /*  remplace premier occ by match=$& . Sinon $`=chaine precedente $'=chaine suivante */
console.log(str);
console.log(str1);

/* regeeex */
regExp = /[bt]ear/i;
regExp.test(str); /* return true ou false */

/*
[ ] permet de définir une classe de caractères c’est-à-dire un ensemble de différents caractères pouvant correspondre
dans une même position. N'importe quel caractère du groupe match
• exemples
• [aeiou] Classe des voyelles
• [0-9] Classe des chiffres (équivaut à [0123456789])
• [0-9a-zA-Z] Classe des chiffres ou lettres (minuscules ou majuscules)
• [\˜\@,;\ˆ_] Classe de caractères spéciaux
• opérateur [^…] négation de classe ou de caractères
• [ˆ0-9] Caractères hors chiffres
• des caractères spéciaux (échappés par \ (antislash)) permettent de désigner des classes prédéfinies
• \n Caractère de retour ligne (sur certains systèmes 2 caractères \f form feed, \r carriage return)
• \t Caractère de tabulation
• \d Caractère numérique (équivaut à [0-9])
• \D Caractère non numérique (équivaut à [^0-9])
• \w Caractère de mot (alphanumérique) (équivaut à # [0-9a-zA-Z_])
• \W Caractère de non mot (équivaut à [ˆ\w])
• \s Espace (équivaut à [ \t\n\r\f])
• \S Non espace (équivaut à [ˆ\s])
• . N'importe quel caractère autre qu'un retour à la ligne

Symboles permettant de définir un nombre de répétitions sur une expression
• * l'expression qui précède doit apparaître 0, une ou plusieurs fois
• + l'expression qui précède doit apparaître au moins une fois
• ? l'expression qui précède doit apparaître au plus une fois (0 ou 1)
• {n} l'expression qui précède doit apparaître exactement n fois
• {n,} l'expression qui précède doit apparaître au moins n fois
• {n,m} l'expression qui précède doit apparaître au moins n fois et au plus m fois
Autres symboles spéciaux
• ^ (caret) correspond au début de la chaîne. L'expression qui suit doit se trouver en début de la chaîne testée
• $ correspond à la fin de chaîne. L'expression qui précède doit se trouver en de la chaîne testée
• \b limite (boundary) de mot
• X|Y alternative soit l'expression X doit apparaître, soit l'expression Y

Capture
/(ba)+/ capture groupes de ba
*/