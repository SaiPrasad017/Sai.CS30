// events (mouse/keyboard)
// sai
// sept 12 2024
//

let tsize = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  // if(mouseIsPressed) tsize = random(20, 80);
  textSize(tsize);
  let position = mouseX + ", " + mouseY
  text(position, mouseX, mouseY);
  fill(255, 0 ,0);
  circle(width/2, height/2, 100);
  fill(0, 225 ,0);
  square(width/2, height/2, 50);
  fill(0, 0 ,0);
}

function mousePressed(){
  // this is called automatically
  tsize = random(20, 200);
}

