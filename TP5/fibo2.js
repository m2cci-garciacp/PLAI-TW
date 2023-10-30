
const utils = require("./utils.js");

function getUpperNthFibonacci(n) {
    let u0 = 0, ui = 1, ec;
    let index = 1;

    if (n === 0) 
    {
        return [0, u0];
    } 
    else if (n === 1) 
    {
        return [1, ui];
    }
    else if (n > 1) 
    {
        while (ui<n) 
        {
            ec=ui+u0;
            u0=ui;
            ui=ec;
            index++;
        }
        return [index, ui];
    } 
    else 
    {
        return [-1, -1];;
    }
}

function main() {
    let x = utils.lireNumber(1, 100);
    let [n, upperNthFibonacci] = getUpperNthFibonacci(x);
    console.log(`${upperNthFibonacci} est l'element at rang ${n} de la serie de Fibonnaci inmediatemen superieur ou egal a ${x}.`);
}


main();
