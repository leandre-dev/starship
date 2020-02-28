import Mobile from './Mobile.js';

import starshipSrc from "../images/vaisseau-ballon-petit.png";

var MoveState = { DOWN : 0, UP : 1, NONE : 2};
export default class StarShip extends Mobile {
    constructor(canvas) {
        super(canvas);
        this.img.src = starshipSrc;
        this.moving = MoveState.NONE;
    }

    moveUp() {
        this.speedY = -8;
        this.moving = MoveState.UP;
    }
    
    moveDown() {
        this.speedY = 8;
        this.moving = MoveState.DOWN;
    }

    stopMoving() {
        this.moving = MoveState.NONE;
    }

    move() {
    	if (this.getterUp()) {
          if((this.y + this.speedY) >= 20) {
            super.move();
          } 
        }

        if (this.getterDown()) {
            if((this.y + this.speedY) < this.canvas.height-48) {
                super.move();
            }
        }
    }
    
    getterUp(){
        if (this.moving === MoveState.UP) return true;
        else return false;
    }
    getterDown(){
        if (this.moving === MoveState.DOWN) return true;
        else return false;
    }

    stopMoving() {
        this.moving = MoveState.NONE;
    }
}
