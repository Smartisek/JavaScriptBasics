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
}

const allienRows = 4;
const allienColumns = 10;
const allienWidth = 40;
const allienHeight =  30;
const alienPadding = 10;
let allienDirection = 1;
let allienmoveDown = false;

const keyStates = {
    ArrowLeft: false,
    ArrowRight: false,
    Space: false,
};

function update(){

}

function draw(){

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