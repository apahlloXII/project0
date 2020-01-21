let pstn;

function setup() {
  // put setup code here
  createCanvas(500,500);
  background(255);
  pstn = height;
}

function draw() {
  // put drawing code here 
let w = color(255, 255, 255);
let b = color(0, 0, 0);
let y = color(127, 127, 127);

//moving object
  rectMode(CENTER);
  var size = width * 0.3;
  fill(b);
  rect(width/2, pstn, pstn, 0);

  rectMode(CENTER);
  var size = width * 0.3;
  fill(b);
  rect(width/2, pstn/.5, pstn, 25);

  rectMode(CENTER);
  var size = width * 0.3;
  fill(w);
  rect(width/2, pstn/.2, pstn, 2);

//static objects
//  rectMode(CENTER);
//  var size = width * 0.3;
//  fill(w);
//  rect(width/2, height/2, 500, 20);


  var size = width * 0.3;
  fill(w);
  ellipse(width/2, height/2, size, size);

  var size = width * 0.15;
  fill(y);
  translate(width/2, height/2);
  triangle(0, 0, size, size*2, -size, size*2);

pstn = pstn - 5;

if (pstn < 0) {
  pstn = 500;
  }
}

