const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const playerWidth = 50;
const playerHeight = 50;
let playerX = 0;
let playerY = canvas.height/2 - playerHeight/2;
const enemyWidth = 50;
const enemyHeight = 50;
let enemyX = canvas.width - enemyWidth;
let enemyY = canvas.height/2 -enemyHeight/2;

// main function for game loop
function gameLoop(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
// rect for player 
    ctx.fillStyle = "purple";
    ctx.fillRect(playerX, playerY, playerWidth, playerHeight);

// rect for enemy
    ctx.fillStyle = "orange";
    ctx.fillRect(enemyX, enemyY, enemyWidth, enemyHeight);

}

requestAnimationFrame(gameLoop);