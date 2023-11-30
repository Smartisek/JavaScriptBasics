import GameObject from "../Engine/gameObject.js";
import Render from "../Engine/render.js";
import Physics from "../Engine/physics.js";
import {Images} from "../Engine/resources.js";
import Player from "./player.js";

class Enemy extends GameObject{
    constructor(x, y){
        super(x,y);
        this.addComponent(new Render("green", 50, 50, Images.enemy));
        this.addComponent(new Physics({x:50, y:0},{x:0, y:0}));
        this.movementDistance = 0;
        this.movementLimit = 100;
        this.movingRight = true;
    }

    update(deltaTime){
        const physics = this.getComponent(Physics);
        if(this.movingRight){
            if(this.movementDistance < this.movementLimit){
                physics.velocity.x = 50;
                this.movementDistance += Math.abs(physics.velocity.x) * deltaTime;
                this.getComponent(Render).gameObject.direction = 1;
            } else {
                this.movingRight = false;
                this.movementDistance = 0;
            }
        } else {
            if(this.movementDistance < this.movementLimit){
                physics.velocity.x = -50;
                this.movementDistance += Math.abs(physics.velocity.x )* deltaTime;
                this.getComponent(Render).gameObject.direction = -1;
            } else{
                this.movingRight = true;
                this.movingDistance = 0;
            }
        }
        const player = this.game.gameObjects.find((obj) => obj instanceof Player);
        if(physics.isColliding(player.getComponent(Physics))){
            player.collidedWithEnemy(); //already called in player, maybe put this code from player in this script would make mroe sense 
        }

        const platforms = this.game.gameObjects.filter((obj) => obj instanceof Platform);
        this.isOnPLatform = false; // not needed enemy doesnt jump 
        for(const platform of platforms){
            if(physics.isColliding(platform.getComponent(Physics))){
                physics.velocity.y = 0;
                physics.acceleration.y = 0;
                this.y = platform.y - this.getComponent(Render).height;
                this.isOnPLatform = true;
            }
        }
        super.update(deltaTime);
    }
}

export default Enemy;