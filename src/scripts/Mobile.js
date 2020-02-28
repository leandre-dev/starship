export default class Mobile {
    constructor(canvas) {
        this.canvas = canvas;
        
        this.x = 40;
        this.y = canvas.height/2;
        
        this.speedX = 0;
        this.speedY = 0;


        this.w = 48;
        this.h = 48;

        this.canBeShot = false;

        this.img = new Image(this.w,this.h);
        this.img.addEventListener('load', () =>  canvas.getContext("2d").drawImage(this.img, this.x, this.y));
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    handleMove(game, ctx) {
        this.draw(ctx); 
    }

    draw(context) {
        context.drawImage(this.img, this.x, this.y);
    }

    isHit(shootX, shootY) {
        if(shootX >= this.x && shootX <= (this.x + this.w)) {
            if (shootY >= this.y && shootY <= (this.y+this.h)) {
                this.canBeShot = false;
                return true;
            }

            else if ((shootY+8) >= this.y && (shootY+8) <= (this.y+this.h)) {
                this.canBeShot = false;
                return true;
            }
        }

        else if((shootX+32) >= this.x && (shootX+32) <= (this.x + this.w)) {
            if (shootY >= this.y && shootY <= (this.y+this.h)) {
                this.canBeShot = false;
                return true;
            }

            else if ((shootY+8) >= this.y && (shootY+8) <= (this.y+this.h)) {
                this.canBeShot = false;
                return true;
            }
        }
        return false;
    }
}