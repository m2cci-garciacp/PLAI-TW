

const myCanvas = document.getElementById("canvasEscaliers");
const ctx = myCanvas.getContext("2d");

function dessiner() {
    effacer(ctx);
    let height = parseInt(document.getElementById('height').value);
    let stages = parseInt(document.getElementById('stages').value);
    let colorLine = document.getElementById('colorLine').value;
    let colorFill = document.getElementById('colorFill').value;
    let colorBkg = document.getElementById('colorBkg').value;
    let type = document.querySelector('input[name="type"]:checked').value;
    console.log(type);

    let width=0, originx;

    if (type==="LEFT") {
        originx=0;
    } else if (type==="CENTER") {
        originx=myCanvas.width/2;
    } if (type==="RIGHT") {
        originx=myCanvas.width;
    } 

    fillBkg(ctx, colorBkg)
    ctx.lineWidth = 5;

    
    for (i=0; i<stages; i++) {
        if (type==="CENTER") {
            originx=originx-height;
            width=width+2*height;
        } else if (type==="LEFT") {
            width=width+height;
        } else if (type==="RIGHT") {
            originx=originx-height;
            width=width+height;
        }

        ctx.fillStyle = colorFill;
        ctx.fillRect(originx, i*height, width, height);
        ctx.strokeStyle = colorLine;
        ctx.strokeRect(originx, i*height, width, height);
    }
    
}


function fillBkg(ctx, color) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
}

function effacer(ctx) {
    fillBkg(ctx, "white");
}

document.getElementById('dessiner_btn').addEventListener("click", dessiner);
document.getElementById('effacer_btn').addEventListener("click", effacer(ctx));

document.getElementById('canvasEscaliers').addEventListener("mousemove", function(e) {
    document.getElementById("coords").innerHTML = `( ${e.clientX} , ${e.clientY} )`;
  });
document.getElementById('canvasEscaliers').addEventListener("mouseleave", function(e) {
    document.getElementById("coords").innerHTML = `(    ,    )`;
  });