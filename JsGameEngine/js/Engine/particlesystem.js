import GameObject from "./gameObject.js";
import Particle from "./particle.js";
import Physics from "./physics.js";

class ParticleSystem extends GameObject{
    constructor(x,y, color, count, lifeDuration, emitDuration){
        super(x,y);
        this.color = color;
        this.count = count;
        this.lifeDuration = lifeDuration;
        this.emitDuration = emitDuration;
        this.particlesEmitted = 0;
    }

    update(deltaTime){
        if(this.emitDuration > 0){
            this.emitPaticles(deltaTime);
            this.emitDuration -= deltaTime;
        } else if(this.emitDuration <= 0){ //set less or equal because of it being too fast and it would bug 
            this.game.removeGameObject(this);
        }
        super.update(deltaTime);
    }

    emitParticles(deltaTime){
        const particlesToEmit = Math.ceil((this.count/this.emitDuration)*deltaTime); //ceil round to integer

        for(let i=0; i<particlesToEmit && this.particlesEmitted<this.count; i++){
            const lifeDuration = this.lifeDuration + Math.random() - 0.5;
            const particle = new Particle(this.x, this.y, Math.random()*5, Math.random()*5, this.color, lifeDuration);
            particle.addComponent(new Physics({x:(Math.random()-0.5)*50, y:(Math.random()-0.5)*50}, {x:0, y:0})); //already in particles but has physics zero, no problem
            this.game.addGameObject(particle);
            this.particlesEmitted++;
        }
    }
}
export default ParticleSystem;