// drawing with nested loops
// sai prasad
// october 9

let gridSpacing = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function loopReview(){
  //qick recap single and nested loops
  for(let x = 0; x <= 40; x = x + 20){
    for(let y = 0; y<=40; y += 20){
      
    }
  }
}


function draw() {
  background(220);
  rednderGrid();
}

function roundDist(x1, y1, x2, y2){
  //takes 2 coordinate pairs and returns the dist
  //between, but rounded
  let a = abs(x1 - x2);
  let b = abs(y1 - y2);
  let c = sqrt(sq(a) + sq(b));
  return round(c);
}

function rednderGrid(){
  //use nested loop to draw objects in
  // a grid arrangement
  noStroke();
  for(let x = 0; x < width; x += gridSpacing){
    for(let y = 0; y < height; y += gridSpacing){
      let d = roundDist(x,y,mouseX,mouseY);
      if(d > 150){
        fill(0);
      }
      else{
        fill(100,50,230);
      }
      circle(x,y,gridSpacing);
      fill(255,120);
      textAlign(CENTER,CENTER);
      text(d,x,y);


    }
  }
}