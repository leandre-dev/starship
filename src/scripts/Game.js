import StarShip from './StarShip.js';
import Saucer from './Saucer.js'
import Shoot from './Shoot.js'

class Game {
    constructor() {
        this.canvas = undefined;
        this.interval=false;
        this.starship = undefined;
        this.saucers = [];
        this.shoots = [];

        this.score = 0;

        this.raf = undefined;

    }


    initCanvas(canvas) {
        this.canvas = canvas;
        this.starship = new StarShip(this.canvas);
        this.raf = window.requestAnimationFrame(this.animate.bind(this));
    }


    addShot() {
        let newShot = new Shoot(this.canvas, this.starship);
        this.shoots.push(newShot);
    }
    deleteShot(aShot) {
        const index = this.shoots.findIndex(shot => shot == aShot);
        this.shoots.splice(index, 1);
    }


    addSaucer() {
        let newSaucer = new Saucer(this.canvas);
        this.saucers.push(newSaucer);
    }
    deleteSaucer(aSaucer) {
        const index = this.saucers.findIndex(saucer => saucer == aSaucer);
        this.saucers.splice(index, 1);
    }


    updateScore(i) {
        this.score += i;
        document.getElementById("score").innerHTML = this.score;

    }


    //La methode gere trop de chose
    moveAndDraw (mobile) {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(mobile.x, mobile.y, mobile.w, mobile.h);

        mobile.move();
        mobile.handleMove(this, ctx);
    }

    //Les deplacements sont fait rapidement comme dans le TP1
    animate() {
        this.moveAndDraw(this.starship);
        this.saucers.forEach(saucer => this.moveAndDraw(saucer));
        this.shoots.forEach(shot => this.moveAndDraw(shot));
        this.raf = window.requestAnimationFrame(this.animate.bind(this));
    }


    keyDownActionHandler (event) {
        switch (event.key) {
            case "ArrowDown":
            case "Down":
                this.starship.moveDown();
                break;
            case "ArrowUp":
            case "Up":
                this.starship.moveUp();
                break;
            case " ":
            case "Spacebar":
                this.addShot();
            break;
            default: return;
        } 
    }

    keyUpActionHandler(event) {
        switch (event.key) {
            case "ArrowDown":
            case "Down":
            case "ArrowUp":
            case "Up":
            case " ":
            case "Spacebar":
                this.starship.stopMoving();
                break;
            default: return;
        }
    }
}

const theGame = new Game();
export default theGame;
