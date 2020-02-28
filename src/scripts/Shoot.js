import Mobile from './Mobile.js';

import shootSrc from "../images/tir.png";

export default class Shoot extends Mobile {
    constructor(canvas, starship) {
        super(canvas);
        this.x = starship.x+48;
        this.y = starship.y+10;
        this.img = new Image();
        this.img.src = shootSrc;
        this.speedX = 8;
        this.hasHit = false;

        this.w = 32;
        this.h = 8;
    }

    //Il ne faut pas utiliser for/while
    detectHit(saucers) {
        
        /*
        saucers.forEach(function(saucer) {
            console.log(this);
            if(this.collisionWith(saucer))
                this.effect(saucer);
        }.bind(this)
        );
        */
        saucers.forEach(saucer => {
            if(this.collisionWith(saucer))
                this.effect(saucer);
        });

    }

    collisionWith(mobile) {
        if(mobile.canBeShot === true)
           return mobile.isHit(this.x, this.y);
    }

    effect(saucer) {
        this.hasHit = true;
        saucer.speedX = -2;
        saucer.speedY = 3;
    }


    handleMove(game, ctx) {
        this.detectHit(game.saucers);
            
        if(this.hasHit === true) {
            game.deleteShot(this);
            game.updateScore(200);
        }
        else {    
            if(game.canvas.width <= this.x + 20)
                game.deleteShot(this);
            else {
                ctx.clearRect(this.x, this.y, 32, 8);
                this.draw(ctx);
            }
        }
    }
}