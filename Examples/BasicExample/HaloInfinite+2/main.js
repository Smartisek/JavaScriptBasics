const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const gameArea = document.getElementById("game-container");

const playerWidth = player.offsetWidth;
const playerHeight = player.offsetHeight;
const gameWidth = gameArea.offsetWidth;
const gameHeight = gameArea.offsetHeight;

let playerX =0;
let playerY = 75;
let enemyX = Math.random() * (gameWidth - playerWidth);
let enemyY = Math.random() * (gameHeight - playerHeight);

let gameOver = false;
let keys = {};

function gameLoop(){
    handlePlayerMovement();
    moveEnemyTowardsPlayer();
    updatePlayerPosition();
    updayeEnemyPosition();
    checkCollisions();

    if(!gameOver){
        requestAnimationFrame(gameLoop);
    } else {
        endGame();
    }
}

function endGame(){
    alert("Game Over");
    resetGame();
}

document.addEventListener("keydown", event =>{
keys[event.key]= true;
    
});

document.addEventListener("keyup", event =>{
    keys[event.key]= false;
        
    });

    function handlePlayerMovement(){
        if(keys.ArrowLeft && playerX > 0){
            playerX -= 3;
        }
        if(keys.ArrowRight && playerX < gameWidth - playerWidth){
            playerX += 3;
        }
        if(keys.ArrowUp && playerY > 0){
            playerY -= 3;
        }
        if(keys.ArrowDown && playerY < gameHeight - playerHeight){
            playerY += 3;
        }
    }

    function moveEnemyTowardsPlayer(){
        const enemySpeed = 1;
        const dx = playerX - enemyX;
        const dy = playerY - enemyY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if(distance > 0){
            enemyX += dx / distance * enemySpeed;
            enemyY += dy / distance * enemySpeed;
        }
    }

function resetGame(){
 playerX =0;
 playerY = 75;
 enemyX = Math.random() * (gameWidth - playerWidth);
 enemyY = Math.random() * (gameHeight - playerHeight);
keys = {};
player.style.opacity = 1;
gameOver = false;
requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
