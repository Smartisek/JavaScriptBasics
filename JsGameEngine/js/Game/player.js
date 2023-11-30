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
        
        if(!this.isGamepadJump && input.isKeyDown("ArrowUp") && this.isOnPlatform){
            this.startJump();
        }
        if(this.isJumping){
            this.updateJump(deltaTime);
        }

        const collectibles = this.game.gameObjects.filter((obj) => obj instanceof Collectible);
        for(const collectible of collectibles){
            if(physics.isColliding(collectible.getComponent(Physics))){
                this.game.removeGameObject(collectible);
            }
        }

        const enemies = this.game.gameObjects.filter((obj) => obj instanceof Enemy);
        for(const enemy of enemies){
            if(physics.isColliding(enemy.getComponent(Physics))){
                this.collideWithEnemy();
            }
        }
        this.isOnPlatform = false;
        const platforms = this.game.gameObjects.filter((obj) => obj instanceof Platform);
        for(const platform of platforms){
            if(physics.isColliding(platform.getComponent(Physics))){
                if(!this.isJumping){
                    physics.velocity.y = 0;
                    physics.acceleration.y = 0;
                    this.y = platform.y - this.render.height;
                    this.isOnPlatform = true;
                }
            }
        }
        if(this.y > this.game.canvas.height){
            this.resetPlayerState();
        }
        if(this.lives <=0){
            location.reload();
        }
    }
}