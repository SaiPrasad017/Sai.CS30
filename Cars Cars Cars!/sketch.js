// Cars Cars Cars!
// Sai
// oct 18 2024

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
}

function drawRoad(){
  let lineSpace = 75;
  fill(25);
  rectMode(CENTER);
  rect(width/2,height/2,windowWidth,500);
  fill(255);
  rectMode(CORNER);
  for(let w = 0; w < width; w += lineSpace){
    rect(w,height/2, 25, 5);
  }
  
}

