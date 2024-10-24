// Cars Cars Cars!
// Sai
// oct 18 2024

//setting local varibles
let eastbound = [];
let westbound = [];

//no comments

function setup() {
  createCanvas(windowWidth, windowHeight);
  // adding car to the top
  // for(let i = 0; i < 20; i++){
  //   eastbound.push(new Vehicle(width,random(height/2 - 20, height/2 - 200),int(random(0,2)),0,color(random(0,255),random(0,255),random(0,255))));
  // }
  // //adding cars to the bottem
  // for(let i = 0; i < 20; i++){
  //   westbound.push(new Vehicle(width,random(height/2 + 20, height/2 + 200),int(random(0,2)),1,color(random(0,255),random(0,255),random(0,255))));
  // }
}


function draw() {
  background(220);
  //drawing the road
  drawRoad();
  //drawing the cars
  for(let car of eastbound){
    car.action();
  }
  for(let car of westbound){
    car.action();
  }

  if(mousePressed &! keyCode === 16 ){
    eastbound.push(new Vehicle(width,random(height/2 - 20, height/2 - 200),int(random(0,2)),0,color(random(0,255),random(0,255),random(0,255))));
  }
  if(mousePressed & keyCode === 16 ){
    westbound.push(new Vehicle(width,random(height/2 + 20, height/2 + 200),int(random(0,2)),1,color(random(0,255),random(0,255),random(0,255))));
  }
  
}


function drawRoad(){
  let lineSpace = 75;
  //drawing the main road
  fill(25);
  rectMode(CENTER);
  rect(width/2,height/2,windowWidth,500);
  //drawing the white lines
  fill(255);
  rectMode(CORNER);
  for(let w = 0; w < width; w += lineSpace){
    rect(w,height/2, 25, 5);
  }
}


class Vehicle{
  constructor(x,y,type,d,c){
    this.type = type; // type of car
    this.xs = 1; // speed
    this.x = x;  //x position
    this.y = y;  // y position
    this.d = d; // direction
    this.chance;
    this.c = c; // color
  }

  drawCar(){
    //drawing body of car
    rectMode(CENTER);
    fill(this.c);
    rect(this.x, this.y, 50, 25);
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
    //picking the type of car
    if(this.type === 0){
      this.drawCar();
    }
    if(this.type === 1){
      this.drawTruck();
    }
  }

  
  move(){
    //moving the car
    if(this.d === 1){
      this.x = this.x - (this.xs + int(random(1,5)));
    }
    else{
      this.x = this.x + (this.xs + int(random(1,5)));
    }
    
    //wrap around code
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
    //cars on top
    if(this.d === 0){
      if(this.xs <= 15){
        this.xs + 1;
      }
      else{
        this.xs = this.xs - 15;
      }
    }

    else{
      //cars on bottem
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
    //how the car functions
    this.display();
    this.move();
    this.chance = int(random(0,100));
    //fast
    if(this.chance === 1){
      this.speedUp();
    }
    //slow
    if(this.chance === 2){
      this.speedDown();
    }
    //color
    if(this.chance === 3){
      this.changeColor();
    }
  }
}

