

let operator;
let ans=NaN;
let currentNumber="";

function pushCancel() {
    ans=NaN;
    n2=NaN;
    showNumber("&nbsp;");
}

function pushNumber(e) {
    currentNumber += e.target.innerText;
    showNumber(currentNumber);
}

function pushOperator(e) {
    getAns();
    showNumber(ans.toString());
    operator=e.target.innerHTML;
    currentNumber = "";
}

function showNumber(number) {
    document.getElementById("screen").innerHTML = number;
}

function getAns() {
    if (isNaN(ans)) {
        ans = parseFloat(currentNumber);
    } else if (operator==="+") {
        ans += parseFloat(currentNumber);
    } else if (operator==="-") {
        ans -= parseFloat(currentNumber);
    } else if (operator==="*") {
        ans *= parseFloat(currentNumber);
    } else if (operator==="/") {
        ans /= parseFloat(currentNumber);
    }
}

function pushChangeSign() {
    ans *= -1;
    showNumber(ans.toString());
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
document.getElementById(".").addEventListener("click", pushNumber);

document.getElementById("+").addEventListener("click", pushOperator);
document.getElementById("-").addEventListener("click", pushOperator);
document.getElementById("*").addEventListener("click", pushOperator);
document.getElementById("/").addEventListener("click", pushOperator);
document.getElementById("=").addEventListener("click", pushOperator);

document.getElementById("C").addEventListener("click", pushCancel);

document.getElementById("+-").addEventListener("click", pushChangeSign);

