// Basic Transformations Sandbox


let originalSpacing = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //coordinate systems reset at the start
  // of draw()
  background(255);
  drawBasicGrid(220);


  //transformation one: TRANSLATION
  // push();
  // translate(120,120);
  // drawBasicGrid(180);
  // rectangleRed(0,0);
  // pop();

  // rectangleBlue(0,0);
  //add push()  pop()
  //push and pop are stack opperations



  //transformation two: SCALE
  // push();
  // rectMode(CORNER);
  // rectangleRed(40,0);
  // //scale factor
  // //1 no change <1 smaller >1 bigger
  // translate(100,100);
  // let scaleAmount = 2.5;
  // scaleAmount = map(mouseX,0,width,0,4);
  // scale(scaleAmount); //always scales from 0,0
  // drawBasicGrid(180);
  // rectMode(CENTER);
  // rectangleBlue(100,100);

  // pop();


  //transformation three: ROTATION
  //reminder: rotations are measured in radians, not degrees! Functions can help with the conversion...
  // angleMode(DEGREES);
  // push();
  // rectangleRed(20,20);

  // translate(120,120);
  // rotate(frameCount);

  // drawBasicGrid(180);
  // face(0,0); // draw at the origin

  // pop();


  //Combinations of Transformations
  // push();
  // angleMode(DEGREES);
  // scale(5);
  // rotate(45); //+angle === clockwise rot
  // drawBasicGrid(180);
  // translate(100,100);
  // face(0,0);
  // pop();




  //indiviual challange
  push();
  translate(200,200);
  circle(0,0,200);
  angleMode(DEGREES);
  rotate(frameCount)
  let n = map(mouseX,0,width,0,360);
  n = floor(n);

  for(let i = 0; i < n ; i++){
    line(0,0,75,0);
    rotate(360/n);
  }

  pop();

}


function face(x, y) {
  //draw a face at x,y
  push();
  translate(x,y);
  ellipseMode(CENTER);
  fill(200,200,0);
  stroke(0);
  ellipse(0,0,80,80);
  fill(90, 140, 30, 220);
  triangle(-20, 20, 20, 20, 0, 30);
  fill(0);
  ellipse(-25,0,10,10);
  ellipse(25,0,10,10);
  strokeWeight(5);
  line(-30,-10,30,-10);
  strokeWeight(1);
  pop();

}

function rectangleRed(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(255, 0, 0, 150);
  rect(x, y, 50, 50);

}

function rectangleBlue(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(0, 0, 255, 150);
  rect(x, y, 50, 50);

}

function drawBasicGrid(shade) {
  //draw the normal cartesian Coordinate Grid, in a light color. Spaced at 20 px by default
  stroke(shade);
  for (let x = 0; x < width; x += 20) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += 20) {
    line(0, y, width, y);
  }

  //Draw "X" at the origin
  strokeWeight(3);
  stroke(0);
  line(-5,0,5,0);
  line(0,5,0,-5);
  strokeWeight(1);
}