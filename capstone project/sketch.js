// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let startGame = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  startGame = 1;
  return startGame;
}

function draw() {
  background(220);
  title();
}

function title(){
  if(startGame === 1){
    textSize(150);
    text("adventure of Sai", width/2, height/2);
  }
}
