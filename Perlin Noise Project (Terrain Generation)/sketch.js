// Perlin Noise Project (Terrain Generation)
// Sai prasad
// 10/1/2024
// create a landscape  using perlin noise

let time = 5;
let interval = 0.01;
let w = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(100)
  // background(220);
  // generateTerrain();
  // drawFlag();
}


function generateTerrain(){
interval = map(w, 1, 20, 0.01, 0.1);
let highestY = 0;
let highestX = 0;
time = 5;
time = 5 + frameCount/10;

let heightTotal = 0;
let totalSquares = 0;

for(let x = 0; x < width; x+= w){
  let squareSize = noise(time);
  squareSize = map(squareSize, 0, 1, 1, 500);
  heightTotal += squareSize;
  if(squareSize > highestY){
    highestY = squareSize;
    highestX = x;
    }
    fill(0);
    rect(x, windowHeight, w, -squareSize);
    totalSquares += 1;
    time += interval;
  }
  drawFlag(highestX,height - highestY);

  average(heightTotal/totalSquares);
}

function keyReleased(){
  if (keyCode === LEFT_ARROW){
    if(w <= 1){
      w = 1;
      return w
    }
    else{
      w = w - 1;
      return w
    }
  }

  if (keyCode === RIGHT_ARROW){
      w = w + 1;
      return w
  }
}

function average(y){
  fill(255,0,0);
  rect(0,y,width,10);
}




function drawFlag(highestX,highestY){
  fill(0);
  rect(highestX, highestY - 20, 3, 30);
  square(highestX, highestY-20, 15);
}

function draw() {
  background(220);
  generateTerrain();
  drawFlag();
}
