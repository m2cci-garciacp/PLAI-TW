const readline = require('readline-sync');
const utils=require("./utils.js");

/**
 * Loops a function with a user confirmation at each iteration
 * @param {function} fun is the function to execute
 * @param {list} args  is the arguments to pass to the functions
 */
exports.loopFunction = function (fun, args)
{
    let continuer=true;

    while (continuer)
    {
        fun.apply(this, args);
        continuer=encore();
    }
}

/**
 * Ask for confirmation  to the user for a yes or no
 * @return true if yes, false otherwise
 */
function encore () {
    let continuer = readline.question("Continue (y/n) : ");
    return ["y", "Y", "yes", "Yes", "YES", "o", "O", "oui", "Oui", "OUI"].includes(continuer);
    
}



/**
 * Read a number from the user without front message; Verifies if in range or if mark
 * @param {number} lowerLim lower limit of the valid range
 * @param {number} higherLim  higher limit of the valid range
 * @param {number} marque  mark.
 * @returns the number in the right range
 */
exports.lireNumber = function (lowerLim, higherLim, message="", marque=null) {
    let ec;

    if (message) {console.log(message);}
    ec = readline.questionFloat("");
    if ( ( (ec>=lowerLim) && (ec<=higherLim) ) || (ec===marque)) {
        return ec
    } else {
        console.log(`Le numero doit etre entre ${lowerLim} et ${higherLim}`);
        return utils.lireNumber (lowerLim, higherLim, marque)
    }
}
