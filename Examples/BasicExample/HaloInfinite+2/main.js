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

let keys = {};

// main function for game loop
function gameLoop(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
// rect for player 
    ctx.fillStyle = "purple";
    ctx.fillRect(playerX, playerY, playerWidth, playerHeight);

// rect for enemy
    ctx.fillStyle = "orange";
    ctx.fillRect(enemyX, enemyY, enemyWidth, enemyHeight);

    const enemySpeed = 1;
    const dx = playerX - enemyX; //distance between player and enemy
    const dy = playerY - enemyY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if(distance > 0){
        enemyX += dx/distance * enemySpeed;
        enemyY += dy/ distance * enemySpeed;
    }

    const playerSpeed = 3;
    
    if(keys.ArrowLeft && playerX >0){
        playerX -= playerSpeed;
    }

    if(keys.ArrowRight && playerX < canvas.width-playerWidth){
        playerX += playerSpeed;
    }

    if(keys.ArrowUp && playerY > 0){
        playerY -= playerSpeed;
    }

    if(keys.ArrowDown && playerY < canvas.height-playerHeight){
        playerY += playerSpeed;
    }

    requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", event => {
    keys[event.key] = true;
});

document.addEventListener("keyup", event => {
    keys[event.key] = false;
});


requestAnimationFrame(gameLoop);