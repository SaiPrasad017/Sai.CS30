// Perlin Noise Project (Terrain Generation)
// Sai prasad
// 10/1/2024
// create a landscape  using perlin noise

//declearing global varibles
let time = 5;
let interval = 0.01;
let w = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(100);
}

function generateTerrain(){
  //create terrain using perlin noise

  interval = map(w, 1, 20, 0.01, 0.1);
  //the x,y crd of the heightest square on screen
  let highestY = 0;
  let highestX = 0;

  time = 5;
  time = 5 + frameCount/10;

  //total height of square and amount of squares
  let heightTotal = 0;
  let totalSquares = 0;

  //generate the squares
  for(let x = 0; x < width; x+= w){

    //creating size of the square
    let squareSize = noise(time);
    squareSize = map(squareSize, 0, 1, 1, 500);
    heightTotal += squareSize;

    //finding the highest square
    if(squareSize > highestY){
      highestY = squareSize;
      highestX = x;
    }

    //drawing the squares
    fill(0);
    rect(x, windowHeight, w, -squareSize);

    //updating varibles
    totalSquares += 1;
    time += interval;
  }

  //giving the flag and avrage new data
  drawFlag(highestX,height - highestY);
  average(heightTotal/totalSquares);
}

function keyReleased(){
  //changing the size of the terrain

  //making it smaller
  if (keyCode === LEFT_ARROW){
    if(w <= 1){
      w = 1;
      return w;
    }
    else{
      w = w - 1;
      return w;
    }
  }

  //making it bigger
  if (keyCode === RIGHT_ARROW){
    w = w + 1;
    return w;
  }
}

function average(y){
  //creating the red average line
  fill(255,0,0);
  noStroke();
  rect(0,height - y,width,5);
}




function drawFlag(highestX,highestY){
  // drawing a flag
  fill(0);
  rect(highestX, highestY - 20, 3, 30);
  fill(255,0,0);
  square(highestX, highestY-20, 15);
}

function draw() {
  background(220);
  generateTerrain();
  drawFlag();
}
