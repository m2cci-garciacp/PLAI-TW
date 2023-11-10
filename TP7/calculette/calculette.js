
/**
 * Global variables:
 * operator (string) : last used operator
 * ans (number) : last value calculated
 * currentNumber (string) : current value input
 * PRINT_LENGTH (number) : length maximal of printing screen
 */
let operator="+";
let ans = 0;
let currentNumber = "";
const PRINT_LENGTH = 15;

/** 
 * Called when Cancel button is pressed. It reinitialises everything.
 * @param {string} msg message to print. Space by default.
 */
function pushCancel(e, msg = "&nbsp;") {
    ans = 0;
    currentNumber = "";
    operator = "+";
    showNumber(msg);
}

/**
 * Called when number button is pressed. This includes '0'-'9' and '.'.
 * It adds the clicked symbol to the currentNumber and print its on screen. 
 * @param {event} e is the event that calls the function.
 */
function pushNumber(e) {
//     if (currentNumber.length < PRINT_LENGTH) {
//         currentNumber += e.target.getAttribute("name");
//     }
if ( (currentNumber.substring(0, 1) === '-' && currentNumber.length <= PRINT_LENGTH)  || (currentNumber.substring(0, 1) !== '-' && currentNumber.length < PRINT_LENGTH) ) {
    currentNumber += e.target.getAttribute("name");
}
showNumber(currentNumber);
}

/**
 * Called when operator button is pressed. This includes '+', '-', '*' and '/'.
 * It performs the calculation of previous operator and prints the result on screen. 
 * @param {event} e is the event that calls the function.
 */
function pushOperator(e) {
    if (currentNumber !== "" || operator === "=") {
        getAns();
        showNumber(ans.toString());
        operator = e.target.getAttribute("name");
        console.log(operator);
        currentNumber = "";
    } else {
        ;
    }
}

/**
 * Prints the number on the screen, cut down to the PRINT_LENGTH size.
 * @param {string} number number to be printed
 */
function showNumber(number) {
    console.log("abc".indexOf("x"));
    if (number === "&nbsp;" ) {
        ;
    } else if (number.indexOf('.') !== -1) {
        if (Number(number) >= 0) {number = Number(number).toString().substring(0, PRINT_LENGTH );}
        else {number = Number(number).toString().substring(0, PRINT_LENGTH + 1);}
    } else if (number.length <= PRINT_LENGTH ) {
        ;
    } else if ( (String(number).substring(0, 1) === '-') && (number.length === (PRINT_LENGTH + 1)) ) {
        number = number.substring(0, PRINT_LENGTH + 1);
    } else {
        number = "O.L";
    }
    document.getElementById("screen").innerHTML = number;
}

/**
 * Calculates the new value in fonction of last operator and stores in memory.
 */
function getAns() {
    if (operator === "+") {
        ans += parseFloat(currentNumber);
    } else if (operator === "-") {
        ans -= parseFloat(currentNumber);
    } else if (operator === "*") {
        ans *= parseFloat(currentNumber);
    } else if (operator === "/") {
        ans /= parseFloat(currentNumber);
    }
}

/**
 * Changes the sign of the current value.
 */
function pushChangeSign() {
    if (currentNumber !== "") {
        // cours d'edition
        if (currentNumber.substring(0, 1) === "-") {
            currentNumber = currentNumber.substring(1);
        } else {
            currentNumber = "-" + currentNumber;
        }
        showNumber(currentNumber);
    } else {
        // edition fini, ans present
        ans *= -1;
        showNumber(ans.toString());
    }

    // TODO: quand on a un ans sur ecran, chg de sign => -ans
    //       mais          ans, chg de sign, op, chg de sign => ans, op
}


/*
 * Call the event handlers for every key.
 */
for (const element of document.getElementsByClassName("number")) {
    element.addEventListener("click", pushNumber);
};
for (const element of document.getElementsByClassName("operator")) {
    element.addEventListener("click", pushOperator);
};

document.getElementById("C").addEventListener("click", pushCancel);

document.getElementById("+-").addEventListener("click", pushChangeSign);

