// Cars Cars Cars!
// Sai
// oct 18 2024


let eastbound = [];
let westbound = [];


//issues
//no trucks
//no comments

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 20; i++){
    eastbound.push(new Vehicle(width,random(height/2 - 20, height/2 - 200),0,0,color(random(0,255),random(0,255),random(0,255))));
  }
  for(let i = 0; i < 20; i++){
    westbound.push(new Vehicle(width,random(height/2 + 20, height/2 + 200),0,1,color(random(0,255),random(0,255),random(0,255))));
  }

}


function draw() {
  background(220);
  drawRoad();
  for(let car of eastbound){
    car.action();
  }
  for(let car of westbound){
    car.action();
  }
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
  constructor(x,y,type,d,c){
    this.type = type;
    this.xs = 1; // speed
    this.x = x;
    this.y = y;
    this.d = d; // direction
    this.chance;
    this.c = c; // color
  }

  drawCar(){
    rectMode(CENTER);
    fill(this.c);
    rect(this.x, this.y, 50, 25);
    //change cars size if needed
    //wheels
    fill(255);
    rect(this.x - 20, this.y - 15, 10, 6);
    rect(this.x - 20, this.y + 15, 10, 6);
    rect(this.x + 20, this.y + 15, 10, 6);
    rect(this.x + 20, this.y - 15, 10, 6);
  }


  drawTruck(){
    rectMode(CENTER);
    fill(this.c);
    rect(this.x, this.y, 80, 50);
    rect(this.x + 40, this.y, 25, 50);
  }
  
  display(){
    if(this.type === 0){
      this.drawCar();
    }
    if(this.type === 1){
      this.drawTruck();
    }
  }

  
  move(){
    if(this.d === 1){
      this.x = this.x - this.xs;
    }
    else{
      this.x = this.x + this.xs;
    }
    

    if(this.x < 0){
      this.x += width;
    }
    if(this.x > width){
      this.x -= width;
    }
  }

  
  speedUp(){
    if(this.d === 0){
      if(this.xs >= 15){
        this.xs - 1;
      }
      else{
        this.xs = this.xs + 15;
      }
    }
    else{
      if(this.xs <= 15){ 
        this.xs + 1;
      }
      else{
        this.xs = this.xs - 15;
      }
    }
  }


  speedDown(){
    if(this.d === 0){
      if(this.xs <= 15){
        this.xs + 1;
      }
      else{
        this.xs = this.xs - 15; //do we need =
      }
    }
    else{
      if(this.xs >= 15){ 
        this.xs - 1;
      }
      else{
        this.xs = this.xs + 15;
      }
    }
  }

  changeColor(){
    this.c = color(random(0,255),random(0,255),random(0,255));
  }






  action(){
    this.display();
    this.move();
    this.chance = int(random(0,100));
    if(this.chance === 1){
      this.speedUp();
    }
    if(this.chance === 2){
      this.speedDown();
    }
    if(this.chance === 3){
      this.changeColor();
    }
  }



}

