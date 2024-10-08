// state variables
// sai
// sept 25, 2024

//global variables
let currentColor = 0; //0,1,2
let circleSize = 50;
let myColor;
let growing = false; //two state (T/F)

function setup() {
  createCanvas(windowWidth, windowHeight);
  myColor = color(50,230,165);
}

function draw() {
  background(255); // 3-tuple

  // circle code - fill value  useing the swith statement
  switch(currentColor){
    case 0:
      fill(255,0,0);
      break;
      case 1:
        fill(myColor);
        break;
      case 2:
        fill(0,255,255);
        break;
  }

  //circle change the color stated variable
  if(frameCount % 30 === 0){ //true once every 10 frames
    currentColor ++;
    if(currentColor > 2){
      currentColor = 0;
    }
  }
//circle grow/shrink
if(growing) circleSize += 2;
else circleSize -=2;

//draw circle
  circle(width/2, height/2, circleSize);
}

function keyPressed(){
  if(key == "a"){
    growing = !growing;
  }
}
