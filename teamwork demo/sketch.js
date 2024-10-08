// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x = 0;
let y = 0;
let amountMoved = 5;
let squareSize = 30;


function setup() {
  createCanvas(530, 530);
  frameRate(30);
}

function sideWalls(){
if(x < 500 && y === 0){
  if(x <= 500){
    x = x + amountMoved;
  }
  }
  if(x === 500 && y < 500){
    y = y + amountMoved;
  }
  if(x >= 0 && y === 500){
    x = x - amountMoved;
  }
  if(x === 0 && y >= 0){
    y = y - amountMoved;
  }
  return x
}

function keyReleased(){
  if(key === "a"){
    if(squareSize > 9 ){
      squareSize = squareSize - 5;
    }
  }

  if(key === "d"){
    if(squareSize < 46 ){
      squareSize = squareSize + 5;
    }
  }


  if(key == "s"){
    if(amountMoved > 1){
      amountMoved = amountMoved - 1;
    }
    
  }

  if(key == "w"){
    if(amountMoved < 30){
      amountMoved = amountMoved + 1;
    }
  }
}

function draw() {
  background(220);
  fill(0);
  sideWalls();
  square(x,y,squareSize);
}
