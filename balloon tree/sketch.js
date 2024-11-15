//ballon tree
//sai
//nov 13

let scale = 15;
let seed;
// let levelOfLeaves;

function setup() {
  createCanvas(500, 500);
  seed = random(100);
}

function draw() {
  background(255);
  drawTree(width/2, height*0.9, 90, 6);
  randomSeed(seed);
}

function drawLine( x1, y1, x2, y2, depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle))*depth*scale); //calculate endpoints of current branch
    let y2 = y1 - (sin(radians(angle))*depth*scale); //using trig ratios. Get shorter based on depth
    let treeAngle = map(mouseX, 0, width, 0, 30);
    strokeWeight(depth - 1);
    drawLine(x1, y1, x2, y2, depth);
    //for a 2-branch tree:
    drawTree(x2, y2, angle-treeAngle, depth-1);
    drawTree(x2, y2, angle+treeAngle, depth-1);
    //3-branch Tree
    drawTree(x2, y2, angle, depth-1);
    if(keyCode === 88){
      if(depth < 5){
        drawLeaf(x2,y2,depth*random(5,10));
        // levelOfLeaves = 5;
        // return levelOfLeaves;
      }
    }
  }
}

function drawLeaf(x2, y2, depth){
  fill(random(255),random(255),random(255));
  circle(x2,y2,depth);
}
