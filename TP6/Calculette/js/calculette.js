function calculer() {
    let operande1 = parseFloat(document.querySelector("#op1").value); // ES6+ remplace la méthode 'historique' document.getElementById("op1").value;
    let operande2 = dparseFloat(ocument.getElementById("op2").value);
    let operateur = document.getElementById("operateur").value;
    let res;

    switch (operateur) {
        case "+" :
            res = operande1 + operande2;
            break;
        case "-" :
            res = operande1 - operande2;
            break;
        case "*" :
            res = operande1 * operande2;
            break;
        case "/" :
            res = operande1 / operande2;
            break;
    }
    document.getElementById("resultat").innerHTML = res;
}

// code exécuté une fois la page chargée
document.getElementById("btn_calculer").addEventListener("click", calculer);