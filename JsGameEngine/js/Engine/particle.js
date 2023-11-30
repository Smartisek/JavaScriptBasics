import GameObject from "./gameObject.js";
import Render from "./render.js";
import Physics from "./physics.js";

class Particle extends GameObject{
    constructor(x,y, width, height, color, duration){
        super(x,y);
        this.duration = duration;
        this.addComponent(new Render(color, width, height));
        this.addComponent(new Physics({x:0, y:0}, {x:0, y:0}));
    }

    update(deltaTime){
        this.duration -= deltaTime;
        if(this.duration <= 0){
            this.game.removeGameObject(this);
        }
        super.update(deltaTime);
    }
}
export default Particle;