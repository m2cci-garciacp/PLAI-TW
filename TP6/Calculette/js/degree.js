function calculer() {
    let initialTemp = parseFloat(document.getElementById("initialTemp").value);
    let typeTemp = document.getElementById("typeTemp").value;
    let res;

    switch (typeTemp) {
        case "°C" :
            res = 9*(initialTemp+32)/5;
            res = res.toFixed(2)+" F";
            break;
        case "F" :
            res = 5*initialTemp/9-32;
            res = res.toFixed(2)+" °C";
            break;
    }
    document.getElementById("resultat").innerHTML = res;
}

// code exécuté une fois la page chargée
document.getElementById("typeTemp").setAttribute('onchange', 'calculer()');
document.getElementById("initialTemp").addEventListener("input", calculer);