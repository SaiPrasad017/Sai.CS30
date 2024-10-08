// drawing challenge
// sai prasad
// sept 13 2024

let rx = 60; 
let ry = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER); // corner
}

function draw() {
  //background(220);
  if(keyIsPressed && key==="a"){
    //good to use ind draw() when we want
    // to detect button being held
    ry += 2;
    if(ry > height) ry = 0;
  }

  fill(200,255,125);
  rect(rx, ry, 100, 50, 10, 20, 0, 10);
}

function keyPressed(){
  //automatic
  if(keyCode === DOWN_ARROW){
    ry += 50;
  }
}
