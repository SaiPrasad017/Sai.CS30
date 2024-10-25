//array demo
// sai

let myArray = [3, 5, 7, 9];
let shallow;
let deep;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //task 1
  let lastItem = myArray.pop();
  let lastItem2 = myArray.pop();

  myArray.unshift(lastItem);
  myArray.unshift(lastItem2);

  shallow = myArray;
  deep = structuredClone(myArray);
  print('my array ' + myArray);

  //task 2
  myArray.shift();
  let n = random(0,3);
  for(let i = 0; i>n; i++){
    myArray.unshift(0);
  }
  print('my array ' + myArray);

  //task 3
  for(let i = 0; i < myArray.length; i++){
    if(myArray[i] === 9){
      myArray.splice(i,1);
    }
  }
  print('my array ' + myArray);
  print('shallow array ' + shallow);
  print('deep array ' + deep);
}

function draw() {
  background(220);
}