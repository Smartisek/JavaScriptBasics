import Component from "./component";
import Render from "./render";

class Physics extends Component{
    constructor(velocity = {x:0, y:0}, acceleration = {x:0, y:0}, gravity = {x:0, y:300}){
        super();
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.gravity = gravity;
    }

    update(deltaTime){
        this.velocity.x += this.acceleration.x * deltaTime;
        this.velocity.y += (this.acceleration.y + this.gravity.y)* deltaTime;
        //check why deltatime multiplied out twice 
        this.gameObject.x += this.velocity.x *deltaTime;
        this.gameObject.y += this.velocity.y*deltaTime;

    }
}