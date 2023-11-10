

let operator;
let n1=NaN;
let n2=NaN;
let currentNumber="";

function pushCancel() {
    n1=NaN;
    n2=NaN;
    showNumber("");
}

function pushNumber(e) {
    currentNumber += e.target.innerText;
    showNumber(currentNumber);
}

function pushEqual() {

    if (isNaN(n1)) {
        n1 = parseFloat(currentNumber);
    } else if (operator==="+") {
        n1 += parseFloat(currentNumber);
    } else if (operator==="-") {
        n1 -= parseFloat(currentNumber);
    } else if (operator==="*") {
        n1 *= parseFloat(currentNumber);
    } else if (operator==="/") {
        n1 /= parseFloat(currentNumber);
    }


    showNumber(n1.toString());
}

function pushOperator(e) {
    operator=e.target.innerHTML;

    if (isNaN(n1)) {
        n1 = parseFloat(currentNumber);
    } else if (operator==="+") {
        n1 += parseFloat(currentNumber);
    } else if (operator==="-") {
        n1 -= parseFloat(currentNumber);
    } else if (operator==="*") {
        n1 *= parseFloat(currentNumber);
    } else if (operator==="/") {
        n1 /= parseFloat(currentNumber);
    }

    currentNumber = "";

    showNumber(n1.toString());
}

function showNumber(number) {
    document.getElementById("screen").innerHTML = number;
}

document.getElementById("0").addEventListener("click", pushNumber);
document.getElementById("1").addEventListener("click", pushNumber);
document.getElementById("2").addEventListener("click", pushNumber);
document.getElementById("3").addEventListener("click", pushNumber);
document.getElementById("4").addEventListener("click", pushNumber);
document.getElementById("5").addEventListener("click", pushNumber);
document.getElementById("6").addEventListener("click", pushNumber);
document.getElementById("7").addEventListener("click", pushNumber);
document.getElementById("8").addEventListener("click", pushNumber);
document.getElementById("9").addEventListener("click", pushNumber);

document.getElementById("+").addEventListener("click", pushOperator);

document.getElementById("=").addEventListener("click", pushEqual);

document.getElementById("C").addEventListener("click", pushCancel);

// TODO: after equal, make an operation  => error