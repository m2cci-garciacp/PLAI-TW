const readline = require('readline-sync');

/**
 * Order 2 values
 * @param {number} a first number
 * @param {number} b second number
 * @returns tableau of the ordered values
 */
function order2Values (a, b)
{
    if (a>b) {
        return [a, b];
    } else {
        return [b, a];
    }
    
}

/**
 * Order 3 values
 * @param {number} a first number
 * @param {number} b second number
 * @param {number} c thrid number
 * @returns tableau of the ordered values
 */
function order3Values (a, b, c)
{
    [a, b] = order2Values(a, b);
    console.log(a, b);
    [b, c] = order2Values(b, c); 
    console.log(a, b, c);
    [a, b] = order2Values(a, b);

    return [a, b, c]
}



let val1 = readline.question("Value 1: ");
let val2 = readline.question("Value 2: ");
let val3 = readline.question("Value 3: ");

[val1, val2, val3] = order3Values (val1, val2, val3);

console.log(val1, val2, val3);
