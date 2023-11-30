import GameObject from "../Engine/gameObject.js";
import Render from "../Engine/render.js";
import Physics from "../Engine/physics.js";
import Input from "../Engine/input.js";
import {Images} from "../Engine/resources.js";
//import enemy from "./enemy.js";
import Platform from "./platform.js";
import Collectible from "./collectible.js";
import ParticleSystem from "../Engine/particlesystem.js";

class Player extends GameObject{
    constructor(x,y){
        super(x,y);
        this.render = new Render("blue", 50, 50, Images.player);
        this.addComponent(this.render);
        this.addComponent(new Physics({x:0, y:0},{x:0, y:0}));
        this.addComponent(new Input());

        this.direction = 1;
        this.lives = 3;
        this.score = 0;
        this.isOnPlatform = false;
        this.isJumping = false;
        this.jumpForce = 400;
        this.jumpTime = .3;
        this.jumpTimer = 0;
        this.isInvulnerable = false;
        this.isGamepadMovement = false;
        this.isGamepadInput = false;
    }

    update(deltaTime){
        const physics = this.getComponent(Physics);
        const input = this.getComponent(Input);
        this.handleGamepadInput(input);

        if(!this.isGamepadMovement && input.isKeyDown("ArrowRight")){
            physics.velocity.x = 100;
            this.direction = -1;
        } else if(!this.isGamepadMovement && input.isKeyDown("ArrowLeft")){
            physics.velocity.x = -100;
            this.direction = 1;
        } else if(!this.isGamepadMovement){
            physics.velocity.x = 0;
        }
    }
}