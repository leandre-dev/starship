import Mobile from './Mobile.js';
import Saucer from './Saucer.js';
import StarShip from './StarShip.js';
import Shoot from './Shoot.js';
import theGame from './Game.js';

require("../style/style.css");
const setup = function() {
    const theCanvas = document.getElementById("stars");

    let interval;


    theGame.initCanvas(theCanvas);
    const unSaucer=document.getElementById("nouvelleSoucoupe");
    const flotteSaucer =document.getElementById("flotteSoucoupes");

    unSaucer.addEventListener("click", () => {
        unSaucer.blur();
        theGame.addSaucer();
    });

    const createSaucer = () => {
        if(Math.random() > 0.5) theGame.addSaucer();
    }

    const infiniteSaucers = () => {
        flotteSaucer.blur();
        //on vérifie le nombre de click pour interrompre l'arrivée de la flotte de soucoupes volantes
        if(!theGame.interval)
            interval = setInterval(createSaucer, 750);
        else
            window.clearInterval(interval);
        theGame.interval=true;

    }
    flotteSaucer.addEventListener("click", infiniteSaucers);        

}
window.addEventListener('keydown', theGame.keyDownActionHandler.bind(theGame));
window.addEventListener('keyup', theGame.keyUpActionHandler.bind(theGame));
window.addEventListener("DOMContentLoaded",setup);
