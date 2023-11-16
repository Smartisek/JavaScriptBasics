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


