const readline = require('readline-sync');

let val1 = readline.question("Value 1: ");
let val2 = readline.question("Value 2: ");
let val3 = readline.question("Value 3: ");

/**
 * change 2 values
 * @param {number} a first number
 * @param {number} b second number
 * @returns tableau of [b, a]]
 */
function change2Values (a,b)
{
    return [b, a]
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
    if (a>b) {
        [a,b]=change2Values(a,b);
    }
    if (c>b) {
        [c,b]=change2Values(c,b);
    }
    if (b>a) {
        [a,b]=change2Values(a,b);
    }

    return [a, b]
}