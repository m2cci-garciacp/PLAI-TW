let tryLefts = 10;
let hiddenNumber = Math.floor(Math.random() * 101);
let newgame = false;


function inGame() {
    document.getElementById("play").classList.remove("hidden");
    document.getElementById("forfeit").classList.remove("hidden");
    document.getElementById("newgame").classList.add("hidden");
}

function toNewGame() {
    document.getElementById("play").classList.add("hidden");
    document.getElementById("forfeit").classList.add("hidden");
    document.getElementById("newgame").classList.remove("hidden");
    tryLefts = 10;
    newgame = false;
    hiddennumber = Math.floor(Math.random() * 101);
}

function print_msg(msg, mode) {
    let textBox = document.getElementById("textBox");

    textBox.innerText = msg;
    textBox.className = "";
    textBox.classList.add(mode);
}

function turn () {
    let guess = document.getElementById("guess");
    let msg1 = "";
    let msg2 = "";
    let mode;
    if (!numberIsValid(guess.value, guess.min, guess.max)) {
        print_msg("Entree erronee!", "failure");
        return 0;
    } else {
        guess = parseInt(guess.value);
    }

    tryLefts -= 1;

    if (guess > hiddenNumber) {
        msg1 = "Trop grand!\n";
        msg2 = "Rejouez, il vous reste " + tryLefts + " essais.";
        mode = "hot";
    } else if (guess < hiddenNumber) {
        msg1 = "Trop petit!\n";
        msg2 = "Rejouez, il vous reste " + tryLefts + " essais.";
        mode = "cold";
    } else {
        msg1 = "Bravo!\nVous avez gagnez en " + (10 - tryLefts) + " essais.";
        mode = "success";
        newgame = true;
    }

    if (tryLefts === 0 && !newgame) {
        msg2 = "Vous avez perdu, le numero était " + hiddenNumber;
        mode = "failure";
        newgame = true;
    }

    // update message
    print_msg(msg1 + msg2, mode);

    // update buttons
    if (newgame) {
        toNewGame();
    } else {
        inGame();
    }
}

function numberIsValid(nstr, min=-Infinity, max=Infinity) {
    if (!isNaN(nstr) && parseInt(Number(nstr)) == nstr && !isNaN(parseInt(nstr, 10)) ) {
        if ( parseInt(Number(nstr))>min && parseInt(Number(nstr))<max) {
            return true;
        }
    }
    return false;
}

document.getElementById("play").addEventListener("click", turn);

document.getElementById("forfeit").addEventListener("click", () => {
    let msg = "Pourquoi vous abandonnez??\nVous avez perdu, le numero était " + hiddenNumber;
    let mode = "failure";

    // update message
    print_msg(msg, mode);

    // update buttons
    toNewGame();
}
);

document.getElementById("newgame").addEventListener("click", () => { print_msg("", "normal"); inGame(); });

