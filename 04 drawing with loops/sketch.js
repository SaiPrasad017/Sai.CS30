// Project Title
// Your Name
// Date


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  myBackground();
  myForeground();
}

function myBackground(){
  //use loop to draw a backround
  noStroke()
  let rectHeight = 1;
  for(let y = 0; y < height; y+= rectHeight){
    let value = map(y,0,width,0,255);
    fill(value,255-value,100);
    rect(0, y, width, rectHeight);
  }
}

function myForeground(){
  //use for or while to draw on canvas
  for (let x = 0; x < mouseX; x = x + 40){
    fill(0);
    circle(x, height/2, 40)
    fill(255);
    text(x,x,height/2);
  }

  //draw stars
  randomSeed(10);
  let starCount = 0;
  fill(255,0,0);
  while(starCount < 100){
    let x =random(0, width);
    let y = random(0, height);
    circle(x,y,10);
    starCount++;
    
    
  }
}
