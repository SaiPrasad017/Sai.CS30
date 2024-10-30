//puzzle game
// sai
// oct 30

//setting global varibles
let NUM_ROWS = 4;
let NUM_COLS = 5;
let winCount = 0;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0]];



function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROWS;
  randomStart();
}

function draw() {
  background(220);
  determineActiveSquare(); //figure out which tile the mouse cursor is over
  drawGrid();         //render the current game board to the screen (and the overlay)
  win(); //check if your winning            
}

function mousePressed(){
  // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
  if(keyIsPressed && keyCode === 16){
    //flips a single square
    flip(currentCol, currentRow);
  }
  else{
    //creates the cross shaped pattern
    flip(currentCol, currentRow);
    flip(currentCol-1, currentRow);
    flip(currentCol+1, currentRow);
    flip(currentCol, currentRow-1);
    flip(currentCol, currentRow+1);
  }
}

function flip(col, row){
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS ){
    if (row >= 0 && row < NUM_ROWS){
      if (gridData[row][col] === 0){
        gridData[row][col] = 255;
      } 
      else{
        gridData[row][col] = 0;
      } 
    }
  }
}

function determineActiveSquare(){
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid(){
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      fill(gridData[y][x]); 
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}

function randomStart(){
  // random starting postitions of the squares
  let r;
  //reading though the array
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      //picking between black and white
      r = int(random(0,2));
      if(r === 0){
        //black
        gridData[y][x] = 0;
      }
      else{
        //white
        gridData[y][x] = 255;
      }
    }
  }
}

function win(){
  winCount = 0;
  //reading though the array
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      //checking if it is black or white
      if(gridData[y][x] === 0){
        //counting squares
        winCount += 1;
      }
      else if(gridData[y][x] === 255){
        //counting squares
        winCount += 2;
      }
    }
  }

  //creating the text
  textAlign(CENTER);
  textSize(100);
  //all black
  if(winCount === 20){
    fill(255,0,12);
    text('you win',windowWidth/2,windowHeight/2);
  }
  //all white
  if(winCount === 40){
    fill(255,0,12);
    text('you win',windowWidth/2,windowHeight/2);
  }
}
