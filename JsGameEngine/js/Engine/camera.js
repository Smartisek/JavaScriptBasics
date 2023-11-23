import Render from "./render";
// doesnt need to inherit all from render just some function

class Camera{
    constructor(target, width, height){
        this.target = target;
        this.width = width;
        this.height = height;
        this.x =0;
        this.y =0;
    }
    update(){
        this.x = this.target.x + this.target.getComponent(Render).width - this.width/2;
        this.y = this.target.y + this.target.getComponent(Render).height - this.height/2;
    }
}
export default Camera;
