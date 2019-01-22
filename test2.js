

function setup() {
  createCanvas(800, 600);
  frameRate(60);
  // var coneX = width * 0.6;
  // var coneY = height * 0.5;
  // var coneSize = width * 0.2;
  // var coneRotation = 20;
}

function draw() {
  //background(255);
 background(64,164,193);
    stroke(255,0,150);
    strokeWeight(6);
    fill(255,0,150,0);
  //noCursor();
  ellipse(mouseX, mouseY, 80, 80);


  // ellipse(100, 100, 100, 100);
  // square(50, 50, 80, 80);

	// push();
 //  translate(0, coneY);
 //  fill(255);
 //  rect(0, 0, width*1.5, height);
 //  pop();

rectMode(CENTER);
var size = width * 0.7;
rect(width/2, height/2, size, size);

ellipseMode(CORNER);
var size = width * 0.3;
ellipse(width/2, height/2, size, size);

  beginShape();
  vertex(4, 21);
  quadraticVertex(738, 1107, 1428, 1164);
  bezierVertex(279, 1161, 972, 1161, 51, 591);
endShape(CLOSE)

beginShape();
  vertex(159, 135);
  vertex(288, 135);
  vertex(224, 53);
endShape(CLOSE)

beginShape();
  vertex(159, 135);
  vertex(288, 135);
  vertex(221, 218);
endShape(CLOSE)

beginShape();
  vertex(402, 172);
  vertex(288, 135);
  vertex(221, 218);
endShape(CLOSE)

beginShape();
  vertex(79, 174);
  vertex(288, 135);
  vertex(221, 218);
endShape(CLOSE)

beginShape();
  vertex(131, 396);
  vertex(295, 331);
  vertex(221, 218);
endShape(CLOSE)

beginShape();
  vertex(475, 363);
  vertex(295, 331);
  vertex(490, 327);
endShape(CLOSE)

  // push();
  // translate(coneX, coneY);
  // fill(0);
  // var x = 0;
  // var y = coneSize * 0.28;
  // var w = coneSize * 1.15;
  // var h = coneSize * 1.15;
  // for(var i = 0; i < 3; i++) {
  //   if(i == 1) {
  //     rotate(radians(-coneRotation));
  //     x = -(coneSize*0.12);
  //     y = coneSize * 0.6;
  //     w = coneSize * 1.6;
  //     h = coneSize * 0.5;
  //   }
  //   if(i == 2) {
  //     x -= coneSize;
  //     y += coneSize * 0.3;
  //     w = coneSize * 0.5;
  //     h = coneSize * 0.16;
  //   }
  //   ellipse(x, y, w, h);
  // }
  // pop();

// push();
//   fill(255);
//   translate(coneX, coneY);
//   triangle(-(coneSize/2), 0, coneSize/2, 0, 0, -(coneSize*2));
//   pop();

//noLoop();

}