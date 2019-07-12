//These are all my variables I've used within my sketch.
var cnv;
var song;
var x,y;
let img = [];
var i = 0;
var currentTime;
var gif;

//this is how I've centered my canvas.
function centerCanvas() {
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup(){
  //this is my my actual canvas size.
  cnv = createCanvas(400, 300);
  canvas.style = "border: 8px solid purple";//this is showing how i created the border around my canvas.
  centerCanvas();
  background(160,119,168);//this is setting the colour of my canvas.
  song = loadSound ("SpyroTheme.mp3");// this is how I incorporated loadsound into my sketch in order to load sound onto my assignment.

  img[0] = loadImage("images/spyro1.jpg");
  img[1] = loadImage("images/spyro2.jpg");
  img[2] = loadImage("images/spyro3.jpg");
  //I used arrays here in order to identify my 3 seperate images i wanted to use on my work.
  textFont('Digital-7')//this is the text font I used for my digital clock on my assignment.
  gif = createImg("https://orig00.deviantart.net/c613/f/2015/194/1/8/tumblr_inline_np3mmmvbtd1qd6uv7_500_by_assortedjellies-d917zr8.gif")
// this is the GIF I've included on my work.
}
//when mouse is pressed the sound will start.
function mousePressed() {
  song.play();
}
//this is making sure that the canvas is centered.
function windowResized() {
  centerCanvas();
}

function draw() {
//this is setting the image and text sizes.
//Also the fill and stroke is setting the colour and black border effect on my Digital Clock.
image(img[i], 0, 0, 400, 300 );
textSize(70)
fill(225);
stroke(0)
strokeWeight(5);
text(currentTime,60,160);
gif.position(790,430)
gif.size(150,100)
for(var b=0; b<height+50; b+=100){
for(var a=0; a<width+50; a+=100){
  fill(79, 4, 60)
  ellipse(a,height-1,20,20)
  ellipse(a,1,20,20)
  ellipse(1,b,20,20)
  ellipse(width-1,b,20,20)
// bottom half of this is positioning my gif on the canvas and it's size.
// Also it's included a for function which is being used in order to
// have the ellipses go all around the sides of the canvas.

}
}
}

//When the key "1" is pressed it switches between the 3 images
//However when key "2" is pressed it stops the sound from playing.
function keyPressed(){
  if  (key == "1")

      i = i+1
      if (i>2)i=0;
  if  (key =="2")
  song.stop();


}
//This is the code I've used to create my digital clock.
function showTime() {
var time = new Date();
var hr =  time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
var am_pm = "AM";

if(hr > 12)
{

    hr == 12;
    am_pm = "PM";
}
if (hr == 0)
{
   hr = 12;
}

hr = (hr<10) ? "0"+hr : hr;
min = (min<10) ? "0"+ min: min;
sec = (sec<10) ? "0"+ sec : sec;



currentTime = hr + ":" + min + ":" + sec + " " + am_pm;
setTimeout(showTime , 1000);
}
showTime();
