const readline = require('readline-sync');

function loopFunction (fun, args)
{
    let continuer=true;

    while (continuer)
    {
        fun.apply(this, args);
        continuer=encore();
    }
}

function encore () {
    let continuer = readline.question("Continue (y/n) : ");
    return ["y", "Y", "yes", "Yes", "YES", "o", "O", "oui", "Oui", "OUI"].includes(continuer);
    
}
