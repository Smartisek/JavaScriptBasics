const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Player{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 5;
    }
    draw(){ //inside class dont have declare function
            ctx.fillStyle = "white";
            ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveLeft(){
        this.x -= this.speed;
        if(this.x < 0){
            this.x =0;
        }
    }

    moveRight(){
        this.x += this.speed;
        if(this.x + this.width > canvas.width){
            this.x = canvas.width - this.width;
        }
    }

    fire(){
        const bullet = new Bullet(this.x + this.width/2-2.5, this.y, 5, 10, 7);
        bullets.push(bullet);
    }
}

class Bullet{
    constructor(x, y, width, height, speed){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }
    draw(){
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update(){
        this.y -= this.speed;
    }
}

class Alien{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(){
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

const allienRows = 4;
const allienColumns = 10;
const allienWidth = 40;
const allienHeight =  30;
const alienPadding = 10;
let allienDirection = 1;
let allienmoveDown = false;

const player = new Player(canvas.width/2 -25, canvas.height-50, 50, 20);
let bullets = [];
const aliens = createAlliens();

function createAlliens(){
    let alliensArray = [];
    for(let row =0; row<allienRows; row++){
        for(let col = 0; col<allienColumns; col++){
            const x = cool *(allienWidth+alienPadding);
            const y = row * (allienHeight+alienPadding);
            alliensArray.push(new Alien(x,y,allienWidth, allienHeight));
        }
    }
}

const keyStates = {
    ArrowLeft: false,
    ArrowRight: false,
    Space: false,
};

function update(){

}

function draw(){
    if(keyStates.ArrowLeft){
        player.moveLeft();
    }
    if(keyStates.ArrowRight){
        player.moveRight();
    }

    if(keyStates.Space){
        player.fire();
        keyStates.Space = false;
    }

    bullets.forEach((bullets, index) =>{
        bullet.update();
        if(bullet.y < 0){
            bullets.splice(index,1);
        }
    });

    let moveDownThisFrame = false;
    if(allienmoveDown){
        moveDownThisFrame = true;
        allienmoveDown = false;
    }

    aliens.forEach((alien) =>{
        if(moveDownThisFrame){
            alien.y += 20;
        } else {
            alien.x += 2*allienDirection;
        }
    });
}

function gameLoop(){
    if(isGameOver()){
        alert("Game Over");
        return;
    }
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

function handleKeyDown(){
    if(e.code in keyStates){
        keyStates[e.code] = true;
    }
}

function handleKeyUp(){
    if(e.code in keyStates){
        keyStates[e.code] = false;
    }
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyyp", handleKeyUp);

gameLoop();