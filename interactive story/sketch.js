// interactive story
// sai prasad
// sept 16 2024
//

//checklist
//backround gradient
//day/night cilcle
//sun/moon

//let timeOfDay = color(50,100,200);

let cloudY = 300;
let seed = 1;
let currentBack = 1;


function setup() {
  createCanvas(windowWidth, windowHeight);
}


//Set the Scene
function drawTree(){
  //create random x value
let x = random(0,windowWidth);
  //draw trunk
  noStroke();
  fill(170, 95, 0);
  rectMode(CENTER)
  rect(x,700,20,200);
  //draw leaves
  fill(0, 100, 0);
  triangle(x-70,650,x,500,x+70,650); 
}

function cloud() {
  fill(255,255,255);
  rectMode(CENTER);
  rect(mouseX, cloudY, 150, 50);
  circle(mouseX+75, cloudY, 50);
  circle(mouseX-75, cloudY, 50);
  circle(mouseX-50, cloudY-30, 50);
  circle(mouseX+50, cloudY-30, 50);
  circle(mouseX, cloudY-30, 80);
  //smily face
  fill(0);
  circle(mouseX-25, cloudY-20, 10);
  circle(mouseX+25, cloudY-20, 10);
  arc(mouseX, cloudY, 50, 50, 0, PI + QUARTER_PI, open);

}


function keyReleased(){
  if (seed === 1) {
    seed = 3;
  }
   else{
    seed = 1;
  }
}

function mouseReleased(){
  //letting the trees move
  if (mouseButton === LEFT){
    if (seed === 1) {
      seed = 6;
    }
     else{
      seed = 1;
    }
  }

  if (mouseButton === CENTER){
    if (currentBack === 4){
      currentBack = 1;
    }
    else{
      currentBack++;
    }
  }
}
  

function sky(){
  if(currentBack === 1){
    background(50,100,200);
    fill(255, 165, 0);
    circle(50,50,200);
  }

  if(currentBack === 2){
    background(0,0,139);
    fill(255, 165, 0);
    circle(50,50,200);
  }

  if(currentBack === 3){
    background(25,25,112);
    fill(255, 255, 255);
    circle(50,50,200);

    fill(25,25,112);
    circle(90,90,100);
  }

  if(currentBack === 4){
    background(0);
    fill(255, 255, 255);
    circle(50,50,200);

    fill(0);
    circle(90,90,100);
  }
}



//Set the Scene
function draw() {
  noStroke();
  //create sky
  sky();

  //
  rectMode(CORNER);
  fill(139,69,19);
  rect(0,800,width,200);
  
  fill(0,100,0);
  rect(0,800,width,25);

  randomSeed(seed);
  for(let i = 0; i<7; i++){
    drawTree();
  }


  //An Artist's Mark
  //adding text
  textSize(30);
  fill(0);
  text('Sai Prasad', windowWidth-190, 920);
  
  //adding cloud
  cloud();

}

