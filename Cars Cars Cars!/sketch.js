// Cars Cars Cars!
// Sai
// oct 18 2024

let car1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //let car1 = new Vehical(x,y,type,direction)
  car1 = new Vehicle(width,random(height/2 + 20, height/2 + 200),0,0,fill(random(255),random(255),random(255)));
}
function draw() {
  background(220);
  drawRoad();
  car1.display(); // test value
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
    this.xs = 5; // speed
    this.x = x;
    this.y = y;
    this.d = d; // direction
    this.c = c; // color
  }

  drawCar(){
    rectMode(CENTER);
    rect(this.x, this.y, 100, 50);
    //change cars size if needed
    //wheels
    fill(this.c);
    rect(this.x - 25, this.y - 10, 25, 15);
    rect(this.x - 25, this.y + 10, 25, 15);
    rect(this.x + 25, this.y + 10, 25, 15);
    rect(this.x + 25, this.y - 10, 25, 15);
  }


  drawTruck(){
    rectMode(CENTER);
    fill(this.c);
    rect(this.x, this.y, 200, 150);
    rect(this.x + 100, this.y, 50, 150);
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
    if(this.d === 0){
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
        this.xs - 5;
      }
      else{
        this.xs = this.xs + 15;
      }
    }
    else{
      if(this.xs <= 15){ 
        this.xs + 5;
      }
      else{
        this.xs = this.xs - 15;
      }
    }
  }


  speedDown(){
    if(this.d === 0){
      if(this.xs <= 15){
        this.xs + 5;
      }
      else{
        this.xs = this.xs - 15; //do we need =
      }
    }
    else{
      if(this.xs >= 15){ 
        this.xs - 5;
      }
      else{
        this.xs = this.xs + 15;
      }
    }
  }

}

