const readline=require('readline-sync');


let taille=readline.questionInt("Donner la taille du motif :");


let espace="";
let motif="*";

for(let i= 0; i<taille;i++){

    for (let k = i; k < taille; k++) {
        espace+=" ";
    }
    
    console.log(espace+motif);
    motif+="**";
    espace="";
    

}

    