let tryLefts = 10;
const hiddenNumber=45;
let newgame = true;


document.getElementById("play").onclick( () => {
    let guess = document.getElementById("guess").value;
    let msg1 = "";
    let msg2 = "";
    let mode;
    
    if (guess > hiddenNumber) {
        msg1 = "Trop grand!\n";
        msg2 = "Rejouez, il vous reste "+ tryLefts+ " essais.";
        mode = "hot";
    } else if (guess < hiddenNumber) {
        msg1 = "Trop petit!\n";
        msg2 = "Rejouez, il vous reste "+ tryLefts+ " essais.";
        mode = "cold";
    } else {
        msg1 = "Bravo!\nVous avez gagnez en "+ (10-tryLefts)+ " essais.";
        mode = "success";
        newgame = false;
    }

    tryLefts-=1;

    if (tryLefts === 0 && not (newgame)) {
        msg2 = "Vous avez perdu, le numero était " + hiddenNumber;
        mode = "lost";
    } 

    // update message
    print_msg(msg1+msg2, mode);

    // update buttons
        

    }
)

document.getElementById("forfeit").onclick( () => {
    let msg = "Pourquoi vous abandonnez??\nVous avez perdu, le numero était " + hiddenNumber;
    let mode = "lost";

    // update message
    print_msg(msg, mode);

    // update buttons
        

    }
)

function print_msg(msg, mode) {
    let textBox = document.getElementById("textBox");

    textBox.innerText(msg);
    textBox.classList.addClass(mode);
}