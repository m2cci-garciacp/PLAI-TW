

const myCanvas = document.getElementById("canvasEscaliers");
const ctx = myCanvas.getContext("2d");

function dessiner() {
    effacer(ctx);
    let height = parseInt(document.getElementById('height').value);
    let stages = parseInt(document.getElementById('stages').value);

    ctx.fillStyle = "light green";

    ctx.fillStyle = "#adff2f";
    ctx.fillRect(0,0,500,500);
    ctx.lineWidth = 5;

    
    for (i=0; i<stages; i++) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(0, i*height, (i+1)*height, height);
        ctx.strokeStyle = "red";
        ctx.strokeRect(0, i*height, (i+1)*height, height);
    }
    
}

function effacer(ctx) {
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,500,500);
}

document.getElementById('dessiner_btn').addEventListener('click', dessiner);
document.getElementById('effacer_btn').addEventListener('click', effacer(ctx));