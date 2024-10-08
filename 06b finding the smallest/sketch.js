// finding min/max
// sai prasad
// october 3

const NUM_CIRCLES = 40;
let seed; //used to stabilize random numbers

function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(100);
}

function drawCircles(){
  // draw NUM_CIRCLES circles on screen
  // with random x,y,d find smallest one
  noFill();
  let smallest = Infinity;  // dummy value
  let smallX = 0;
  let smallY = 0;
  for(let i = 0; i<NUM_CIRCLES; i++){
    let x = random(0,width);
    let y = random(0,height);
    let d = random(20,60);
    if( d < smallest){
      smallest = d;
      smallX = x;
      smallY = y;
    }
    circle(x,y,d);
  }
  fill(255,0,0);
  circle(smallX,smallY,smallest);
}

function draw() {
  randomSeed(seed);
  background(220);
  drawCircles();
}
