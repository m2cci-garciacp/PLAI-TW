
couleurs = [
    "#b7daff", // couleur visage impassible
    "yellow",  // couleur visage joyeux
    "#4caf50"  // couleur visage triste
];

/**
 * Efface le contenu d'un canvas
 * @param {Canvas} canvas le canvas à effacer
 */
function effacer(canvas) {
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
}
/**
 * Objet pour un arc de circle
 * @param {canvas} canvas canvas a dessigner
 * @param {number} cx centre d'axe x du arc de circle
 * @param {number} cy centre d'axe y du arc de circle 
 * @param {number} r radius du arc de circle
 * @param {number} angle0 angle initial du arc de circle
 * @param {number} angle1 angle final du arc de circle
 * @param {number} style style du arc de circle 
 */
function ArcCircle(canvas, cx, cy, r, angle0, angle1, style = { lineStyle: "coral", fillStyle: "white", }) {
    this.canvas = canvas;
    this.cx = cx;
    this.cy = cy;
    this.r = r;
    this.angle0 = angle0;
    this.angle1 = angle1;
    this.style = style;
}
ArcCircle.prototype.draw = function () {
    let ctx = this.canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(this.cx, this.cy, this.r, this.angle0 * Math.PI / 180, this.angle1 * Math.PI / 180, false);
    if (this.style) {
        ctx.fillStyle = this.style.fillStyle; // this.style.fill;
        ctx.strokeStyle = this.style.lineStyle; // this.style.line;
    }
    ctx.fill();
    ctx.stroke();
}

/**
 * Objet pour un circle
 * @param {canvas} canvas canvas a dessigner
 * @param {number} cx centre d'axe x du circle
 * @param {number} cy centre d'axe y du circle 
 * @param {number} r radius du circle
 * @param {color} style style du circle 
 */
function Circle(canvas, cx, cy, r, style) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.cx = cx;
    this.cy = cy;
    this.r = r;
    this.style = style;
    this.path = new ArcCircle(canvas, cx, cy, r, 0, 360, style);

}
Circle.prototype.draw = function () {
    this.path.cx = this.cx;
    this.path.cy = this.cy;
    this.path.draw();
}

class Face {
    constructor(canvas, cx, cy, r, vx = 0, vy = 0, style = { fillStyle: "bisque", lineStyle: 'black' }, expression = 0) {
        this.canvas = canvas;
        this.cx = cx;
        this.cy = cy;
        this.vx = vx;
        this.vy = vy;
        this.r = r;
        this.expression = expression;
        this.style = style;
        this.head = new Circle(canvas, cx, cy, r, this.style);
        this.mouth = new ArcCircle(canvas, cx, cy, 0.6 * r, 0, 180, this.style);
        this.eyeLeft = new Circle(canvas, cx - r * 0.3, cy - r * 0.2, r * 0.1, this.style);
        this.eyeRigth = new Circle(canvas, cx + r * 0.3, cy - r * 0.2, r * 0.1, this.style);
    }
    draw() {
        this.drawHead();
        this.drawMouth();
        this.drawRightEye();
        this.drawLeftEye();
    }
    drawHead() {
        this.head.cx = this.cx;
        this.head.cy = this.cy;
        this.head.draw();
    }
    drawMouth() {
        this.mouth.cx = this.cx;
        this.mouth.cy = this.cy;
        this.mouth.draw();
    }
    drawRightEye() {
        this.eyeRigth.cx = this.cx + this.r * 0.3;
        this.eyeRigth.cy = this.cy - this.r * 0.2;
        this.eyeRigth.draw();
    }
    drawLeftEye() {
        this.eyeLeft.cx = this.cx - this.r * 0.3;
        this.eyeLeft.cy = this.cy - this.r * 0.2;
        this.eyeLeft.draw();
    }
    deplacer() {
        this.cx = this.cx + this.vx;
        this.cy = this.cy + this.vy;
        effacer(canvas);
        this.draw();

        // check borders
        if (((this.cx + this.r > this.canvas.width) && this.vx > 0) ||
            ((this.cx - this.r < 0) && this.vx < 0)) {
            this.vx *= -1;
        } else if (((this.cy + this.r > this.canvas.height) && this.vy > 0) ||
            ((this.cy - this.r < 0) && this.vy < 0)) {
            this.vy *= -1;
        }
    }
}


/**
 * Objet pour un visage
 * @param {canvas} canvas canvas a dessigner
 * @param {number} cx centre d'axe x du visage
 * @param {number} cy centre d'axe y du visage 
 * @param {number} r radius de la tete du visage
 * @param {color} style style du visage 
 * @param {number} vx style du visage 
 * @param {number} vy style du visage 
 */
class FaceExpressif extends Face {
    constructor(canvas, cx, cy, r, vx = 0, vy = 0, style = { fillStyle: "bisque", lineStyle: 'black' }, expression = 0) {
        super(canvas, cx, cy, r, vx, vy, style);
        this.expression = expression;
    }
    draw() {
        this.drawHead();
        this.drawMouth();
        this.drawRightEye();
        this.drawLeftEye();
    }
    drawHead() {
        this.head.style.fillStyle = couleurs[this.expression];//couleurs[this.expression]
        this.head.cx = this.cx;
        this.head.cy = this.cy;
        this.head.draw();
    }
    drawMouth() {
        switch (this.expression) {
            case 0: // impassible                     
                this.mouth.r = 1.5 * this.r;
                this.mouth.angle0 = 75;
                this.mouth.angle1 = 105;
                this.mouth.cx = this.cx;
                this.mouth.cy = this.cy - this.r;
                break;
            case 1: // joyeux
                this.mouth.r = 0.6 * this.r;
                this.mouth.angle0 = 0;
                this.mouth.angle1 = 180;
                this.mouth.cx = this.cx;
                this.mouth.cy = this.cy;
                break;
            default: // triste                    
                this.mouth.r = 0.5 * this.r;
                this.mouth.angle0 = 240;
                this.mouth.angle1 = 300;
                this.mouth.cx = this.cx;
                this.mouth.cy = this.cy + this.r;
                break;
        };
        this.mouth.draw();
    }
    deplacer() {
        console.log(this.cx, this.vx, this.cy, this.vy);
        this.cx = this.cx + this.vx;
        this.cy = this.cy + this.vy;
        effacer(canvas);
        this.draw();

        // check borders
        if ((this.cx + this.r  + this.vx> this.canvas.width) ||
            (this.cx - this.r  + this.vx< 0)) {
            this.vx *= -1;
            this.expression = (this.expression+1) % 3;
        } else if ((this.cy + this.r + this.vy> this.canvas.height) ||
                   (this.cy - this.r + this.vy< 0) ) {
            this.vy *= -1;
            this.expression = (this.expression+1) % 3;
        }
    }
}

/*
class R {
    constructor (nom) {
        this.nom = nom ;
    }
    name() {
        console.log(`my name is ${this.nom}.`);
    }
}

class S extends R {
    constructor (nom, age) {
        super(nom);
        this.age=age;
    }
    name() {
        console.log(`my name is ${this.nom} with ${this.age} yo.`);
    }
}*/