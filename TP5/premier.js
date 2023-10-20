
const utils=require("./utils.js");

function getNumber(lowerLim, higherLim) {
    let x;
    console.log("Donnez number: ");
    return utils.lireNumber(lowerLim, higherLim, Infinity);
}

function isPremier(n) {
    let i;
    if (n<1) {
        return false;
    } else if (n>1) {
        for (i=2; i<n; i++) {
            if (n%i==0) {return false;}
        }
    }
    return true
    
}

function main () {
    let n=lireNumber(1, 20, "Donnez number: ");
    if (isPremier(n)) {console.log(`${n} est premier.`);}
    else {console.log(`${n} n'est pas premier.`);}
}


main();
