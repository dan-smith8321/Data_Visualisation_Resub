//https://github.com/jdorfman/awesome-json-datasets- where got the JSON data from

var data;// creating a variable which can be read and linked back to by the code
var pokemon;
var pokemon2;
var pokemon3;
var pokemon4;
var pokemon5;
var pokemon6;
var img; var img2; var img3; var img4; var img5; var img6;
var value;
var button;
var song;
//var img = [];


function preload() {
data = loadJSON("pokedex.json");
// preloading the JSON file so that it can be read and loaded into the code
//song = loadSound ("Pokemon.mp3");
}

function setup(){
  createCanvas(1200,800);// creating a canvas to display the code
  textFont('Digital-7');// creating the font which all text will be displayed on
  bg = loadImage('assets/images/pokeball_background.jpg'); // this is to enable the background to have an image loaded onto it
  img = loadImage('assets/images/id1.png');//song = loadSound ("Pokemon.mp3");
  img2 = loadImage('assets/images/id2.png');
  img3 = loadImage('assets/images/id3.png');
  //img4 = loadImage('assets/images/id4.png');
  //img5 = loadImage('assets/images/id4.png');
  //img6 = loadImage('assets/images/id5.png');
  button = createButton('1');
  button.position(30, 20);
  button.size(100,30);
  textAlign(CENTER);
  textSize(50);
  button = createButton('2');
  button.position(150, 20);
  button.size(100,30);
  textAlign(CENTER);
  textSize(50);
  button = createButton('3');
  button.position(270, 20);
  button.size(100,30);
  textAlign(CENTER);
  textSize(50);
}

/*function imageClass(){
  img[1] = loadImage("assets/images/id1.png");
  img[2] = loadImage("assets/images/id2.png");
  img[3] = loadImage("assets/images/id3.png");
  img[4] = loadImage("assets/images/id4.png");
  img[5] = loadImage("assets/images/id5.png");
  img[6] = loadImage("assets/images/id6.png");
}*/

//function mousePressed() {
//song.play();
//}

function draw(){
background(bg); // stating that the background is the image loaded in the setup
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
rect(50,210,300,20);
fill(355,255,255);
ellipse(200,220.5,20,20);
fill(0,0,0);
ellipse(200,220,9,9);
fill(255,255,255);
ellipse(200,220,8,8);
fill(235,21,35);
fill(255,255,255);
arc(201, 229, 295, 295, 0, 59.7);

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

pokemon = data.pokemon[0].name; // getting specific data out of JSON using the variable created and arrays
fill(255,255,255) // the colour of the text
text(pokemon,200,95); // so that the data pulled is written in text
textSize(30); // adjusting the text size of the name pulled from JSON
pokemon2 = data.pokemon[1].name;
text(pokemon2,600,40);
pokemon3 = data.pokemon[2].name;
text(pokemon3,980,82);
pokemon4 = data.pokemon[3].name;
//text(pokemon4,175,437);
pokemon5 = data.pokemon[4].name;
//text(pokemon5,600,506);
pokemon6 = data.pokemon[5].name;
//text(pokemon6,980,452);

//images = data.pokemon.img[0];
//buttonPressed(pokemon4);
//alert(JSON.stringify(name));
}

  function mouseClicked() {
  if (value == pokemon)
  image(img1,50,150);
}
