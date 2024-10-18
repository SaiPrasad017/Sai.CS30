// intro to objects
// Sai
// oct 10

let myBook;
let myBook2;
let myBook3;
let myBook4;
let myBook5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("A", "Sai Prasad",12345678311011, "hardcover", 595, width*0.1);
  myBook2 = new Book("B", "Sai Prasad",1234567891011, "softcover", 515, width*0.2);
  myBook3 = new Book("C", "Sai Prasad",123437891011, "leatherbound", 515, width*0.3);
  myBook4 = new Book("D", "Sai Prasad",1234467891011, "softcover", 615, width*0.4);
  myBook5 = new Book("E", "Sai Prasad",1234547891011, "hardcover", 555, width*0.5);
}

function draw() {
  background(220);
  myBook.display();
  myBook2.display();
  myBook3.display();
  myBook4.display();
  myBook5.display();
}

class Book{
  //1.constructure
  constructor(title,author, isbn, cover, pages,x){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.coverType = cover;
    this.pageCount = pages;
    this.x = x;
  }
  //. class methods
  display(){
    //render our book on the screen
    rectMode(CENTER);
    textAlign(CENTER,CENTER);
    textSize(20);
    switch(this.coverType){
    case "softcover":
      fill(250,200,150);
      break;
    case "hardcover":
      fill(120,255,255);
      break;
    case "leatherbound":
      fill(150,100,15);
      break;
    }
    rect(this.x, height/2, this.pageCount/10, 150);
    fill(0);
    text(this.title[0], this.x, height/2 - 50,);
  }

  printOut(){
    //print out our data in a nice format
    print(this.title + ", by " + this.author);
    print("length: " + this.pageCount);
    print("ISBN: " + this.isbn);
  }
}