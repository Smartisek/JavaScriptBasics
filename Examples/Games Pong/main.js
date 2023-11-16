// these will never change thats why const 
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

const paddleWith = 10;
const paddleHeight = 100;
const ballRadius = 5;

let player1Score = 0;
let player2Score = 0;
let ballX = width/2;
let ballY = height/2;
let ballSpeedX = 2;
let ballSpeedY = 2;
let player1Y = height/2 - paddleHeight/2;
let player2Y = height/2 - paddleHeight/2;

let upPressed = false;
let downPressed = false;
let wPressed = false;
let sPressed = false;

function drawCircle(x, y, r, color){
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI*2, false); //2PI full circle
    context.fill();
}

function drawText(text, x, y, color){
    context.fillStyle = color;
    context.font = "30px Arial";
    context.fillText(text, x , y);
}

function reset(){
    ballX = width/2;
    ballY = height/2;
    ballSpeedX = -ballSpeedX;
    ballSpeedY = 5;
}

function collisionDetection(){
    if(ballX - ballRadius< paddleWith && ballY > player1Y && player1Y+paddleHeight){
        ballSpeedX = -ballSpeedX;
        let deltaY = ballY - (player1Y + paddleHeight/2);
        ballSpeedY = deltaY * 0.35;
    }

    if(ballX - ballRadius< paddleWith && ballY > player2Y && player2Y+paddleHeight){
        ballSpeedX = -ballSpeedX;
        let deltaY = ballY - (player2Y + paddleHeight/2);
        ballSpeedY = deltaY * 0.35;
    }
    if(ballY - ballRadius < 0 || ballY + ballRadius > height){
        ballSpeedY = -ballSpeedY;
    }
    if(ballX < 0){
        player2Score++;
        reset();
    } else if (ballX > width){
        player1Score++;
        reset();
    }
}

function update(){

}

document.addEventListener("keydown", (event) =>{
    if(event.key === "ArrowUp"){
        upPressed = true;
    } else if(event.key === "ArrowDown"){
        downPressed = true;
    } else if( event.key === "W"){
        wPressed = true;
    } else if(event.key === "S"){
        sPressed = true;
    }
});

document.addEventListener("keyup", (event) =>{
    if(event.key === "ArrowUp"){
        upPressed = false;
    } else if(event.key === "ArrowDown"){
        downPressed = false;
    } else if( event.key === "W"){
        wPressed = false;
    } else if(event.key === "S"){
        sPressed = false;
    }
});


function gameLoop(){
    update();
    requestAnimationFrame(gameLoop);
}

gameLoop();