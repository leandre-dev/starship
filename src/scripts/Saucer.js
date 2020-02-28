import Mobile from './Mobile.js';

import saucerSrc from "../images/flyingSaucer-petit.png";

export default class Saucer extends Mobile {
    constructor(canvas) {
        super(canvas);
        this.x = this.canvas.width-48;
        this.y = this.positionRandom(this.canvas.height-48);
        this.img.src = saucerSrc;
        //this.img.src =  "images/flyingSaucer-petit.png";
        this.speedX = -4;
        this.canBeShot = true;
        this.w = 48;
        this.h = 36;
    }

    move() {
    	if(this.x >= 0) super.move();
    }
    
    handleMove(game, ctx) {
        if(this.canBeShot === true) {
            if(this.x <= 0) {
                game.deleteSaucer(this);
                game.updateScore(-1000);
            }
            else
                super.handleMove(game, ctx);
        }
        else {
            if(game.canvas.height <= this.y + 20 || this.x<=0)
                game.deleteSaucer(this);
            else
                super.handleMove(game, ctx);
        }
    }

    positionRandom(max) {
        return Math.round(Math.random() * (max - 1) + 1);
    }
    
}
