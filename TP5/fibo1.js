
const utils = require("./utils.js");

function nthFibonacci(n) {
    let u0 = 0, ui = 1, ec;
    let index = 1;

    if (n === 0) 
    {
        return 0;
    } 
    else if (n === 1) 
    {
        return 1;
    } else if (n > 1) 
    {
        for (index = 2; index <= n; index++) {
            ec = ui + u0;
            u0 = ui;
            ui = ec;
        }

        return ui;
    } 
    else 
    {
        return -1;
    }
}

function main() {
    let n = utils.lireNumber(1, 20, message="Donnez number: ");
    let nthFibo = nthFibonacci(n);
    console.log(`Le ${n}th element de la serie de Fibonnaci est ${nthFibo}.`); 
}


main();
