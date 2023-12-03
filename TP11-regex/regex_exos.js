
/* exo 1 */
let str = "  valeur1 ,  valeur2 ,   valeur3 composée de plusieurs mots,, valeur4,valeur5,  dernière valeur  ";
let arrayStr = str.matchAll(/[^,]+,?/gi);     /* capture les matches, avec la virgule inclue */
let arrayStr2 = str.matchAll(/([^,]+),?/gi);  /* capture les matches sans la virgule inclue */
console.log(arrayStr2.next().value[0]);       /* str match (avec virgule) */
console.log(arrayStr2.next().value[1]);       /* str capture (sans virgule) */

function csvToStringArray1(str, regex)
{
    let array = [];
    for (let capture of str.matchAll(regex)) {
        array.push(capture[1]);
    }
    return array;
}
function csvToStringArray2(str, regex)
{
    let array = [];
    let iterator = str.matchAll(regex);
    let res = iterator.next();
    while (!res.done) {
        array.push(res.value[1]);
        res = iterator.next();
    }
    return array;
}


let str0 = "ab,c,2,asdas  dasf,,sdasdsadfs";
console.log(csvToStringArray1(str0, /([^,]+),?/gi));
console.log(csvToStringArray2(str0, /([^,]+),?/gi));

/* capture adresse ethernet */

let str3 = "Par exemple: 01-32-54-F7-89-AB ou 01-32-54-f7-89-ab \
ou 01:32:54:F7:89:AB sont des adresses MAC valides. \
Par contre 01-32-54-K7-89-AB et 01:32-54-f7:89-ab ne sont pas valides.";

let iterator = str3.matchAll(/[0-9A-Fa-f]{2}(-|:)[0-9A-Fa-f]{2}((\1)[0-9A-Fa-f]{2}){4}/g);

console.log("Recherche des adresses MAC valides dans la chaîne");
console.log(`'${str3}'`);
for (match of iterator) {
    console.log(`\n${match[0]}  est une adresse MAC valide
     sa position dans la chaîne : ${match.index} a ${match.index + match[0].length} (non inclus)`);}