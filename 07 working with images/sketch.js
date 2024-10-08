// working with images
// sai prasad
//oct 4

let lionL, lionR;
let facingRight = true;
let pinImages = []; // empty array
let currentFrame = 0;

function preload(){
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  for(let i = 0; i<9; i++){
    pinImages.push(loadImage("assets/pin-0" + i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function drawLions(){
  if(mouseX > pmouseY) facingRight = true;
  else if(mouseX < pmouseX) facingRight = false;

  if(facingRight){
    image(lionR,mouseX,mouseY,lionR.width/2,lionR.height/2);
  }
  else{
    image(lionL,mouseX,mouseY,lionL.width/2,lionL.height/2);
  }
}

function drawPinWheel(){
  image(pinImages[currentFrame],width/2,height/2);
  if(frameCount % 5 === 0){ //every fith frame
    currentFrame++;
    if(currentFrame > 8) currentFrame = 0;
  }
}

function draw() {
  background(220);
  imageMode(CENTER);
  drawPinWheel();
  drawLions();
}
