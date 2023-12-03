function csvToStringArray1(str){
    let array = [];
    while (str.indexOf(',')!==-1)
    {
        array.push(str.substring(0,str.indexOf(','))); 
        str = str.substring(str.indexOf(',')+1);
    }
    array.push(str);
    return array;
}
function csvToNumberArray2(str){
    let array = [];
    for (let el of str.split(","))
    {
        array.push(parseFloat(el)); /* if not convertible -> NaN */
    }
    return array;
}
function csvToNumberArray3(str){
    let array = [];
    str.split(",").forEach(e=>array.push(parseFloat(e))); /* if not convertible -> NaN */
    return array;
}
/* Complex strings */
function csvToStringArray2(str) {
    let array = [];
    let inWord = false ;
    let word = ``;

    for (let c of str)
    {
        if (c===`"`) {
            inWord = !inWord;
        } else if (!inWord && c===`,`) {
            array.push(word);
            word = "";
        } else {
            word+=c;
        }
    }
    array.push(word);
    return array;
}



let str0 = "ab,c,2,asdasdasf,,sdasdsadfs";
let arr = csvToStringArray1(str0);
console.log(arr);
arr = csvToNumberArray2(str0);
console.log(arr);
arr = csvToNumberArray3(str0);
console.log(arr);
let str1 = `"  Valeur entre quotes "   , Valeur1 , Valeur2,  Valeur avec plusieurs mots,  "   valeur contenant , et , "  ,  autre valeur sans quotes  , "valeur entre quotes suivie d'une valeur vide",, "une dernière après des ,,"   `;

let str2 = `"  ", "une dernière après des ,," ,,  `;


arr = csvToStringArray2(str2);
console.log(arr);