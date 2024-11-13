// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tiles = []; //0 is grass, 1 is chicken, 2 is a cow
let level = [
  [0,1,0,0,1],
  [0,1,0,0,1],
  [0,1,1,0,1],
  [0,0,0,0,0],
  [0,1,0,1,1],
];
const COLUMNS = 5;
const ROWS = 5;
const TILE_SIZE = 100;
let playerX = 3;
let playerY = 4;

function preload(){
  for(let i = 0; i < 3; i++){
    tiles.push(loadImage("assets/farm demo images/" + i + ".png"));
  }
}

function setup() {
  createCanvas(COLUMNS*TILE_SIZE, ROWS*TILE_SIZE);
  level[playerY][playerX] = 2;
}

function draw() {
  renderBoard();
}
function swap(x1, y1, x2, y2){
  temp = level[y1][x1];
  level[y1][x1] = level[y2][x2];
  level[y2][x2] = temp;
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    swap(playerX, playerY, playerX, playerY - 1);
    playerY--;
  }
  
  if(keyCode === DOWN_ARROW){
    if(level[playerY + 1][playerX] === 0){
      swap(playerX, playerY + 1, playerX, playerY);
      playerY++;
    }
    else if(level[playerY + 1][playerX] === 1){
      if(playerY < 2 && level[playerY + 2][playerX] === 0){
        swap(playerX, playerY + 1, playerX, playerY + 2);
        swap(playerX, playerY + 1, playerX, playerY);
        playerY++;
      }
    }
  }

  if(keyCode === LEFT_ARROW){
    if(level[playerY][playerX - 1] === 0){
      swap(playerX, playerY, playerX - 1, playerY);
      playerX--;
    }
    else if(level[playerY][playerX - 1] === 1){
      if(playerX > 1 && level[playerY][playerX - 2] === 0){
        swap(playerX - 1, playerY, playerX - 2, playerY);
        swap(playerX - 1, playerY, playerX, playerY);
        playerX--;
      }
    }
  }

  if(keyCode === RIGHT_ARROW){
    if(level[playerY][playerX + 1] === 0){
      swap(playerX, playerY, playerX + 1, playerY);
      playerX++;
    }
    else if(level[playerY][playerX + 1] === 1){
      if(playerX < 2 && level[playerY][playerX + 2] === 0){
        swap(playerX + 1, playerY, playerX + 2, playerY);
        swap(playerX + 1, playerY, playerX, playerY);
        playerX++;
      }
    }
  }
}


function renderBoard(){
  for(let col = 0; col < COLUMNS; col++){
    for(let row = 0; row < ROWS; row++){
      let pos = level[row][col];
      let currentImage = tiles[pos];
      image(currentImage,col*TILE_SIZE, row*TILE_SIZE);
    }
  }
}