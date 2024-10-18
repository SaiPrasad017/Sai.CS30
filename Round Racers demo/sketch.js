// roundracer
// sai
// oct 15

let dot1;
let dot2;
let dot3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  dot1 = new RoundRacer(height/4,"green");
  dot2 = new RoundRacer(height/3,"red");
  dot3 = new RoundRacer(height/2,"blue");
}

function draw() {
  background(0);
  dot1.move();
  dot1.display();

  dot2.move();
  dot2.display();

  dot3.move();
  dot3.display();
}

class RoundRacer{
  constructor(yPosition, color){
    this.xPosition = 0;
    this.yPosition = yPosition;
    this.color = color;
    this.xSpeed = random(3,15);
  }
  move(){
    this.xPosition = this.xPosition + this.xSpeed;
    if(this.xPosition >= windowWidth){
      this.xPosition = 0;
    }

  }
  display(){
    switch(this.color){
    case "green":
      fill(0,128,0);
      break;
    case "blue":
      fill(0,0,150);
      break;
    case "red":
      fill(150,0,0);
      break;
    }
    circle(this.xPosition,this.yPosition,25);
  }
}