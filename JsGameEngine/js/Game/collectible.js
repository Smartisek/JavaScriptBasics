import GameObject from "../Engine/gameObject.js";
import Render from "../Engine/render.js";
import Physics from "../Engine/physics.js";

class Collectible extends GameObject{
    constructor(x,y, width, height, color="gold"){
        super(x,y);
        this.addComponent(new Render(color, width, height));
        this.addComponent(new Physics({x:0, y:0}, {x:0, y:0},{x:0, y:0}));
        this.tag = "collectible";	
        this.value = 1;
    }
}
export default Collectible;