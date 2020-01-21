function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
  rectMode(CENTER);
  var size = width * 0.3;
  rect(width, height/10, size, size);

  var size = width * 0.3;
  ellipse(width/2, height/2, size, size);

  var size = width * 0.15;
  translate(width/2, height/2);
  triangle(0, 0, size, size*2, -size, size*2);
}