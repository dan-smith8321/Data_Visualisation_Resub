//https://github.com/jdorfman/awesome-json-datasets- where got the JSON data from

// creating variables below in order to store a data type
var data;
var bg;
var button;
var img; var img2; var img3; var img4; var img5; var img6;
var pokemon; var pokemon2; var pokemon3; var pokemon4; var pokemon5; var pokemon6;

function preload() {
data = loadJSON("pokedex.json");// preloading the JSON file so that it can be read and loaded into the code
}

function setup(){
  createCanvas(1200,800);// creating a canvas to display the code
  textFont('Digital-7');// creating the font which all text will be displayed as
  bg = loadImage('assets/images/pokeball_background.jpg'); // creating a variable to enable the background to have an image loaded onto it(sourced https://p5js.org/examples/dom-input-and-button.html)
  img = loadImage('assets/images/id1.png'); // creating a variable which loads each seperate image
  img2 = loadImage('assets/images/id2.png');
  img3 = loadImage('assets/images/id3.png');
  img4 = loadImage('assets/images/id4.png');
  img5 = loadImage('assets/images/id5.png');
  img6 = loadImage('assets/images/id6.png');

  //first button(helped to do by using https://p5js.org/examples/dom-input-and-button.html)
  button = createButton('Pokemon 1'); // using a variable to store a button and also adding text on the button
  button.position(30, 20); // creating a positon on the canvas where the button will display
  button.size(100,30); // adjusts the size of the button
  button.mousePressed(display1); // creating a function which works when the button is pressed
  textAlign(CENTER); // centers the text
  textSize(50); // adjusts the text size inside the button

  //second button
  button = createButton('second evolution');
  button.position(150, 20);
  button.size(100,30);
  button.mousePressed(display2);
  textAlign(CENTER);
  textSize(50);

  //third button
  button = createButton('final evolution');
  button.position(270, 20);
  button.size(100,30);
  button.mousePressed(display3);
  textAlign(CENTER);
  textSize(50);

  //fourth button
  button = createButton('Pokemon 2');
  button.position(850, 20);
  button.size(100,30);
  button.mousePressed(display4);
  textAlign(CENTER);
  textSize(50);

  //fifth button
  button = createButton('second evolution');
  button.position(975, 20);
  button.size(100,30);
  button.mousePressed(display5);
  textAlign(CENTER);
  textSize(50);

  //sixth button
  button = createButton('final evolution');
  button.position(1100, 20);
  button.size(100,30);
  button.mousePressed(display6);
  textAlign(CENTER);
  textSize(50);
}

function draw(){ // function which draws onto the canvas
background(bg); // stating that the background is the image loaded in the setup(sourced https://p5js.org/examples/dom-input-and-button.html)

//first pokeball
fill(235,21,35);// filling the shape
ellipse(175, 550, 300, 300); // drawing an ellipse shape
fill(0,0,0);
rect(25,545,300,20);// drawing a rectangle shape
fill(255,255,255);
ellipse(172,555,20,20);
ellipse(172,555,9,9);
fill(255,255,255);
ellipse(172,555,8,8);
fill(235,21,35);
fill(255,255,255);
arc(175, 565, 295, 295, 0, 59.7); // drawing an arc shape

// second pokeball
fill(235,21,35)
ellipse(600, 160, 300, 300);
fill(0,0,0);
rect(450,150,300,20);
fill(255,255,255);
ellipse(600,160,20,20);
fill(0,0,0);
ellipse(600,160,9,9);
fill(255,255,255);
ellipse(600,160,8,8);
fill(235,21,35);
fill(255,255,255);
arc(599.75, 170, 295, 295, 0, 59.7);

//third pokeball
fill(235,21,35);
ellipse(600, 620, 300, 300);
fill(0,0,0);
rect(450,610,300,20);
fill(355,255,255);
ellipse(600,620,20,20);
fill(0,0,0);
ellipse(600,620,9,9);
fill(255,255,255);
ellipse(600,620,8,8);
fill(235,21,35);
fill(255,255,255);
arc(600, 630, 295, 295, 0, 59.7);

//fourth pokeball
fill(235,21,35);
ellipse(200, 210, 300, 300);
fill(0,0,0);
rect(50,220,300,20);
fill(355,255,255);
ellipse(200,230,20,20);
fill(0,0,0);
ellipse(200,229,9,9);
fill(255,255,255);
ellipse(200,229,8,8);
fill(235,21,35);
fill(255,255,255);
arc(201, 239, 295, 295, 0, 59.7);

//fifth pokeball
fill(235,21,35);
ellipse(980, 200, 300, 300);
fill(0,0,0);
rect(830,190,300,20);
fill(355,255,255);
ellipse(980,200.5,20,20);
fill(0,0,0);
ellipse(980,200,9,9);
fill(255,255,255);
ellipse(980,200,8,8);
fill(235,21,35);
fill(255,255,255);
arc(980.5, 211, 295, 295, 0, 59.7);

//sixth pokeball
fill(235,21,35);
ellipse(980, 570, 300, 300);
fill(0,0,0);
rect(830,560,300,20);
fill(355,255,255);
ellipse(980,570.5,20,20);
fill(0,0,0);
ellipse(980,570,9,9);
fill(255,255,255);
ellipse(980,570,8,8);
fill(235,21,35);
fill(255,255,255);
arc(980.5, 580.75, 295, 295, 0, 59.7);
//end of sixth
textSize(50); // adjusting the text size
}

function display1() { // function for the button to enable text and images to load once pressed(sourced https://p5js.org/examples/dom-input-and-button.html to help)
  pokemon4 = data.pokemon[3].name; //I watched a video from The Coding Train in order to help give a idea of how to pull data from JSON.(https://www.youtube.com/watch?v=_NFkzw6oFtQ&t=485s)
  text(pokemon4,175,500); // displaying the name data pulled from JSON on the canvas at a position I want it
  image(img4, 100,565,150,150); // displaying the image pulled from my load image at a position I want it
  fill(235,167,50); // changing the colour of the text on the text after pressing the Pokemon 1 buttons
}
//Charmander

function display2(){ // function for my second button to enable text and images to load once pressed(sourced https://p5js.org/examples/dom-input-and-button.html to help)
  pokemon5 = data.pokemon[4].name;
  text(pokemon5,600,575);
  image(img5,525,625,150,150);
}
//Charmeleon

function display3(){ // function for my third button to enable text and images to load once pressed(sourced https://p5js.org/examples/dom-input-and-button.html to help)
  pokemon6 = data.pokemon[5].name;
  text(pokemon6,975,515);
  image(img6,920,575,140,140);
}
//Charizard

function display4(){ // function for my fourth button to enable text and images to load once pressed(sourced https://p5js.org/examples/dom-input-and-button.html to help)
  pokemon = data.pokemon[0].name;
  text(pokemon,200,165);
  image(img,100,230,200,150);
  fill(23,193,28); // changing the colour of the text on the text after pressing the Pokemon 2 buttons
}
//Bulbasaur

function display5(){ // function for my fifth button to enable text and images to load once pressed(sourced https://p5js.org/examples/dom-input-and-button.html to help)
  pokemon2 = data.pokemon[1].name;
  text(pokemon2,600,100);
  image(img2,510,165,190,150);
}
//Ivysaur

function display6(){ // function for my sixth button to enable text and images to load once pressed(sourced https://p5js.org/examples/dom-input-and-button.html to help)
  pokemon3 = data.pokemon[2].name;
  text(pokemon3,980,142);
  image(img3,910,200,150,150);
}
//Venusaur

function mousePressed(){ // creating a function for when the mouse is pressed it creates no loop
  noLoop(); // creating no loop
}

function mouseReleasd(){ //creating a function for when the mouse is released it restarts the loop again
  loop(); // restarting the loop
}
