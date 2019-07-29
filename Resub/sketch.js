//https://github.com/jdorfman/awesome-json-datasets- where got the JSON data from

// creating variables below in order to store a data type
var data;
var pokemon; var pokemon2; var pokemon3; var pokemon4; var pokemon5; var pokemon6;
var img; var img2; var img3; var img4; var img5; var img6;
var value;
var button;

function preload() {
data = loadJSON("pokedex.json");// preloading the JSON file so that it can be read and loaded into the code
}

function setup(){
  createCanvas(1200,800);// creating a canvas to display the code
  textFont('Digital-7');// creating the font which all text will be displayed on
  bg = loadImage('assets/images/pokeball_background.jpg'); // creating a variable to enable the background to have an image loaded onto it(sourced https://p5js.org)
  img = loadImage('assets/images/id1.png'); // creating a variable which loads each seperate image
  img2 = loadImage('assets/images/id2.png');
  img3 = loadImage('assets/images/id3.png');
  img4 = loadImage('assets/images/id4.png');
  img5 = loadImage('assets/images/id5.png');
  img6 = loadImage('assets/images/id6.png');
  //first button(sourced by https://p5js.org)
  button = createButton('1'); // using a variable to store a button
  button.position(30, 20); // creating a positon on the canvas where the button will display
  button.size(100,30); // adjusts the size of the button
  button.mousePressed(display1);
  textAlign(CENTER); // centers the text
  textSize(50); // adjusts the text size inside the button

  //second button
  button = createButton('2');
  button.position(150, 20);
  button.size(100,30);
  button.mousePressed(display2);
  textAlign(CENTER);
  textSize(50);

  //third button
  button = createButton('3');
  button.position(270, 20);
  button.size(100,30);
  button.mousePressed(display3);
  textAlign(CENTER);
  textSize(50);
}

/*function keyPressed() {
if (key == "80")
song.play();
//}*/

function draw(){
background(bg); // stating that the background is the image loaded in the setup(sourced https://p5js.org)
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

//fourth pokeball(bulba)
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
image(img,100,80,200,150);
image(img2,510,20,190,150);
image(img3,910,65,150,150);
//end of sixth
//all of the shapes were created by myself

//I watched a video from The Coding Train in order to help give a idea of how to pull data from JSON.(https://www.youtube.com/watch?v=_NFkzw6oFtQ&t=485s)
pokemon = data.pokemon[0].name; // getting specific data out of JSON using the variable created and arrays
fill(255,255,255) // chooses the colour of the text
text(pokemon,200,95); // so that the data pulled is written in text and positioned where I want it displayed on my canvas
textSize(50); // adjusting the text size of the name pulled from JSON
pokemon2 = data.pokemon[1].name;
text(pokemon2,600,40);
pokemon3 = data.pokemon[2].name;
text(pokemon3,980,82);
}

function display1() { // function for my first button to enable text and images to load once pressed(sourced https://p5js.org/examples/dom-input-and-button.html to help)
  pokemon4 = data.pokemon[3].name;
  text(pokemon4,175,437);
  image(img4, 100,425,150,150);
}

function display2(){ // function for my second button to enable text and images to load once pressed(sourced https://p5js.org/examples/dom-input-and-button.html to help)
  pokemon5 = data.pokemon[4].name;
  text(pokemon5,600,506);
  image(img5,400,600,150,150);
}

function display3(){ // function for my third button to enable text and images to load once pressed(sourced https://p5js.org/examples/dom-input-and-button.html to help)
  pokemon6 = data.pokemon[5].name;
  text(pokemon6,980,452);
  image(img6,920,550,150,150);
}

function mousePressed(){ // creating a function for when the mouse is pressed it creates no loop
  noLoop();
}

function mouseReleasd(){ //creating a function for when the mouse is released it restarts the loop again
  loop();
}
