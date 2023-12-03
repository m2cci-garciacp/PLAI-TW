const readline = require('readline-sync');
const utils=require("./utils.js");


function temperatureConversion() {
    let conversion = readline.question("conversion: °C->F [1] ou F->°C [2]: ");

    let temp = readline.questionFloat("Temperature : ");
    let converted_temp;

    if (conversion == 2) {
        converted_temp = 5 * (temp - 32) / 9;
        console.log(`${temp.toFixed(1)} °C est ${converted_temp.toFixed(1)} F.`);
    } else if (conversion == 1) {
        converted_temp = temp * 9 / 5 + 32;
        console.log(`${temp.toFixed(1)} F est ${converted_temp.toFixed(1)} °C.`);
    }
}

function encore () {
    let continuer = readline.question("Continue (y/n) : ");
    return ["y", "Y", "yes", "Yes", "YES", "o", "O", "oui", "Oui", "OUI"].includes(continuer);
    
}


utils.loopFunction(temperatureConversion, []);