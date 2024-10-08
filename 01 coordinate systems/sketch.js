// coordniate systems
// sai
// sep 11, 2024
// looking how coordnates how in p5.js


function setup() {
  print("Set up runs once")
  createCanvas(500, 400);
}

function draw() {
  //runs over and over runs at 60 fps
  background(220);
  drawcircles();
}

function drawcircles(){
  fill(204,102,0);
  circle(0,0,50);

  fill(100,200,255);
  circle(width,0,50);

  fill(106,270,755);
  circle(width,height,50);

  fill(196,270,155);
  circle(0,height,50);

  fill(486,190,250);
  circle(width/2,height/2,50);
} 