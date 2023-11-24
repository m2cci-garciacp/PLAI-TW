let faces= [] ;
const R_MAX = 50 ;
const V_MIN = 2 ;
const V_MAX = 50 ;
const TIME_CONST = 100 ;

function createFaces() {
    removeFaces() ;
    let nFaces = document.getElementById("nbFaces").value ;
    for (let i=0; i<nFaces; i++) {
        if (Math.random() <0.5) {faces.push( createRandomFaceE() );}
        else { faces.push( createRandomFace() );}
}
}
function createRandomFaceE() {
    let r = Math.random() * (R_MAX+1);
    let cx = R_MAX + Math.random() * (canvas.width-2*R_MAX);
    let cy = R_MAX + Math.random() * (canvas.height-2*R_MAX);
    let vx = V_MIN + Math.random() * (V_MAX-V_MIN);
    let vy = V_MIN + Math.random() * (V_MAX-V_MIN);
    let colorLine = document.getElementById("colorLine").value;
    let colorFill = document.getElementById("colorFill").value;
    let face = new FaceExpressif(canvas, cx, cy, r, vx, vy, style={fillStyle: colorFill, lineStyle: colorLine}, Math.floor(Math.random() * 3) );
    return face ;
}
function createRandomFace() {
    let r = Math.random() * (R_MAX+1);
    let cx = R_MAX + Math.random() * (canvas.width-2*R_MAX);
    let cy = R_MAX + Math.random() * (canvas.height-2*R_MAX);
    let vx = V_MIN + Math.random() * (V_MAX-V_MIN);
    let vy = V_MIN + Math.random() * (V_MAX-V_MIN);
    let colorLine = document.getElementById("colorLine").value;
    let colorFill = document.getElementById("colorFill").value;
    let face = new Face(canvas, cx, cy, r, vx, vy, style={fillStyle: colorFill, lineStyle: colorLine});
    return face ;
}

function removeFaces() {
    faces = [] ;
}

function drawFaces() {
    // effacer
    effacer(canvas) ;
    // draw
    for (let face of faces) {
        face.draw() ;
    }
}
function moveFaces() {
    // deplacer
    for (let face of faces) {
        face.deplacer() ;
    }
    // redraw: on peut pas les joindre parce que le draw inclu un effaçage decran
    for (let face of faces) {
        face.draw() ;
    }
}



let canvas = document.getElementById("canvas");
let btnStart = document.getElementById("btnStart") ;
let btnStop = document.getElementById("btnStop") ;
let timerId ;


document.getElementById("btnGenerate").addEventListener("click", function () {
    clearInterval( timerId );
    createFaces();
    drawFaces();
    btnStart.disabled = false ;
    btnStop.disabled = true ;
}) ;
document.getElementById("btnStart").addEventListener("click", function () {
    timerId = setInterval(moveFaces, TIME_CONST) ;
    btnStart.disabled = true ;
    btnStop.disabled = false ;
}) ;
document.getElementById("btnStop").addEventListener("click", function () {
    clearInterval( timerId );
    btnStart.disabled = false ;
    btnStop.disabled = true ;
}) ;
document.getElementById("canvas").addEventListener("click", function (e) {
    let coords = getCursorPosition(e) ;
    // TODO 
}) ;

function getCursorPosition(event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    return {x:x, y:y}
}


