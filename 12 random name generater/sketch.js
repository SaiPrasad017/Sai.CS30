// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let names = ['John','jane','steven'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  print(names);
  names.push('liam');
  print(names);

  let lastName = names.pop();
  print(lastName);
  print(names);

  let firstName = names.shift();
  print(firstName);
  print(names);

  names.push('name1');
  names.push('name2');
  names.push('name3');
  names.push('name4');
  names.push('name5');

  for(n of names){
    print(n);
  }
}

function draw() {
  background(220);
}
