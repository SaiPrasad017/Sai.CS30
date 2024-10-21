// Cars Cars Cars!
// Sai
// oct 18 2024

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
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


class Vehicle{
  constructor(type){
    // t = type of car
    this.type = random(0, 1);
    this.xs = 5;
    this.x = random(0,width);
    this.y;
    this.d = random(0,1);
    this.c = fill(random(255),random(255),random(255));
  }

  dispaly(){
    if(this.d === 0){
      this.y = random(height/2 + 20, height/2 + 200);
    }
    else{
      this.y = random(height/2 - 20, height/2 - 200);
    }

    rectMode(CENTER);
    if(this.type === 0){
      rect(this.x, this.y, 100, 50);
      //change cars size if needed
      //wheels
      fill(this.c);
      rect(this.x - 25, this.y - 10, 25, 15);
      rect(this.x - 25, this.y + 10, 25, 15);
      rect(this.x + 25, this.y + 10, 25, 15);
      rect(this.x + 25, this.y - 10, 25, 15);
    }
    else{
      fill(this.c);
      rect(this.x, this.y, 200, 150);
      rect(this.x + 100, this.y, 50, 150);
    }
  }

  move(){
    this.x = this.x + this.xs;

    if(this.x < 0){
      this.x += width;
    }
    if(this.x > width){
      this.x -= width;
    }
  }

  speedUp(){
    if(this.xs <= 15){
      this.xs + 5;
    }
  }
  speedDowm(){
    if(this.xs >= 15){
      this.xs - 5;
    }
  }

  changeColor(){
    this.c = fill(random(255),random(255),random(255));
  }

}

