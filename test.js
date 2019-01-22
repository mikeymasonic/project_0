// var viewfs;
// var exitfs;
// var showing = true;
// var waitress;
// var img;
 
function setup() {
  createCanvas(windowWidth,windowHeight);
  // img = loadImage("shark.jpg"); 
//   viewfs = document.getElementById("enter");
//   exitfs = document.getElementById("exit");
//   background(0);
//   waitress = millis() + 10000; 
}



// function setup() {
//   createCanvas(800, 600);
//   frameRate(60);
// }

  function draw() {
  //background(255);

    // Show mouse pointer and Enter/Exit FS image when mouse is moved.
  // Hide them 10 seconds after page loads, or 2 seconds after last  
  // mouse movement or window resize. 
  // if ((mouseX != pmouseX) || (mouseY != pmouseY)) { // if mouse moved,
  //   if (!showing) { // and if they're hidden,
  //     cursor(); // show pointer and relevant image
  //     if (fullscreen()) { 
  //       exitfs.style.display = "block";
  //     } else {
  //        viewfs.style.display = "block";
  //     }
  //     showing = true; 
  //   }
  //   if (waitress < currtime + 2000) { // if not in first 10 seconds,
  //     waitress = currtime + 2000; // hide stuff 2 seconds from now
  //   }
  // } else { // mouse has not moved
  //   if (showing) {
  //     if (currtime > waitress) { // they've been visible long enough,
  //       noCursor(); showing = false; // so hide pointer and images
  //       viewfs.style.display = "none";
  //       exitfs.style.display = "none";
  //     }
  //   }
  // }



  // image(img, 0, height/2, img.width/2, img.height/2);

push();

 background(64,164,193);
    stroke(0);
    strokeWeight(20);
    fill(255,0,150,0);
  noCursor();
  ellipse(mouseX, mouseY, 80, 80);
pop();  

push();	
	stroke(255);
	fill(255);
	ellipse (mouseX, mouseY, 20, 20);
pop();	

push();
  beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255,0,150);
  vertex(2, 600);
  vertex(1, 80);
  vertex(windowWidth*.65, 600);
endShape(CLOSE)
pop();

//squares
push();
	stroke(255);
	strokeWeight(0);
	fill(255,0,150);
for(var i = 0; i < 1500; i++) {
  rect(i * mouseX, 10, 50, 50);
}
pop();

  var x = mouseX;
  var y = mouseY;
  var ix = width - mouseX;  // Inverse X
  var iy = height - mouseY; // Inverse Y

push();
	stroke(255);
	strokeWeight(0);
	fill(255);
for(var i = 0; i < 1500; i++) {
  rect(i * ix, windowHeight-55, 50, 50);
}
pop();


pop();
	strokeWeight(0);
  fill(255, 150);
  ellipse(x, height/2, y, y);
  fill(0, 159);
  ellipse(ix, height/2, iy, iy);
push();



//triangles

push();

  beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255);
  vertex(0, 600);
  vertex(0, 80);
  vertex(windowWidth*.60, 600);
endShape(CLOSE)

  beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255,0,150);
  vertex(0, 600);
  vertex(0, 80);
  vertex(windowWidth*.55, 600);
endShape(CLOSE)

  beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255);
  vertex(0, 600);
  vertex(0, 80);
  vertex(windowWidth*.50, 600);
endShape(CLOSE)

  beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255,0,150);
  vertex(0, 600);
  vertex(0, 80);
  vertex(windowWidth*.45, 600);
endShape(CLOSE)

  beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255);
  vertex(0, 600);
  vertex(0, 80);
  vertex(windowWidth*.40, 600);
endShape(CLOSE)

  beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255,0,150);
  vertex(0, 600);
  vertex(0, 80);
  vertex(windowWidth*.35, 600);
endShape(CLOSE)

  beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255);
  vertex(0, 600);
  vertex(0, 80);
  vertex(windowWidth*.30, 600);
endShape(CLOSE)

  beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255,0,150);
  vertex(0, 600);
  vertex(0, 80);
  vertex(windowWidth*.25, 600);
endShape(CLOSE)

  beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255);
  vertex(0, 600);
  vertex(0, 80);
  vertex(windowWidth*.20, 600);
endShape(CLOSE)

  beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255,0,150);
  vertex(0, 600);
  vertex(0, 80);
  vertex(windowWidth*.15, 600);
endShape(CLOSE)

  beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255);
  vertex(0, 600);
  vertex(0, 80);
  vertex(windowWidth*.10, 600);
endShape(CLOSE)

  beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255,0,150);
  vertex(0, 600);
  vertex(0, 80);
  vertex(windowWidth*.05, 600);
endShape(CLOSE)

//////opposite triangles

  beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255);
  vertex(windowWidth, 600);
  vertex(windowWidth, 80);
  vertex(windowWidth*.35, 600);
endShape(CLOSE)

  beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255,0,150);
  vertex(windowWidth, 600);
  vertex(windowWidth, 80);
  vertex(windowWidth*.40, 600);
endShape(CLOSE)

beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255);
  vertex(windowWidth, 600);
  vertex(windowWidth, 80);
  vertex(windowWidth*.45, 600);
endShape(CLOSE)

beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255,0,150);
  vertex(windowWidth, 600);
  vertex(windowWidth, 80);
  vertex(windowWidth*.50, 600);
endShape(CLOSE)

beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255);
  vertex(windowWidth, 600);
  vertex(windowWidth, 80);
  vertex(windowWidth*.55, 600);
endShape(CLOSE)

beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255,0,150);
  vertex(windowWidth, 600);
  vertex(windowWidth, 80);
  vertex(windowWidth*.60, 600);
endShape(CLOSE)

beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255);
  vertex(windowWidth, 600);
  vertex(windowWidth, 80);
  vertex(windowWidth*.65, 600);
endShape(CLOSE)

beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255,0,150);
  vertex(windowWidth, 600);
  vertex(windowWidth, 80);
  vertex(windowWidth*.70, 600);
endShape(CLOSE)

beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255);
  vertex(windowWidth, 600);
  vertex(windowWidth, 80);
  vertex(windowWidth*.75, 600);
endShape(CLOSE)

beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255,0,150);
  vertex(windowWidth, 600);
  vertex(windowWidth, 80);
  vertex(windowWidth*.80, 600);
endShape(CLOSE)

beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255);
  vertex(windowWidth, 600);
  vertex(windowWidth, 80);
  vertex(windowWidth*.85, 600);
endShape(CLOSE)

beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255,0,150);
  vertex(windowWidth, 600);
  vertex(windowWidth, 80);
  vertex(windowWidth*.90, 600);
endShape(CLOSE)

beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255);
  vertex(windowWidth, 600);
  vertex(windowWidth, 80);
  vertex(windowWidth*.95, 600);
endShape(CLOSE)

// beginShape();
//   stroke(0);
//   strokeWeight(5);
//   fill(255,0,150);
//   vertex(windowWidth, 600);
//   vertex(windowWidth, 80);
//   vertex(windowWidth*.100, 600);
// endShape(CLOSE)

pop();


//rainbowheels
push();
    stroke(0);
    strokeWeight(8);
	fill(color(random(255), random(255), random(255)));
	ellipse(windowWidth*.42, windowHeight*.55, windowWidth*.07, windowHeight*.10)
	ellipse(windowWidth*.27, windowHeight*.37, windowWidth*.07, windowHeight*.10)
pop();

//vehicle shape
push();
beginShape();
  stroke(0);
  strokeWeight(5);
  fill(255,0,150);
  vertex(windowWidth*.46, windowHeight*.37);
  vertex(windowWidth*.20, windowHeight*.26);
  vertex(windowWidth*.48, windowHeight*.58);
endShape(CLOSE)
pop();

push();
	stroke(1);
  strokeWeight(5);
  fill(255);
  // rotate(radians(10));
  rect (windowWidth*.42, windowHeight*.40, windowWidth*.04, windowHeight*.02);
pop();



//weird shaky circle mouse
push();
translate(mouseX, mouseY);
stroke(0);
  strokeWeight(5);
  fill(255,0,150,0);
beginShape();
for(var i = 0; i < 100; i++) {


  var radius = 75 + random(5);
  var x = cos(radians(i * 3.6)) * radius;
  var y = sin(radians(i * 3.6)) * radius;
  vertex(x, y);
}
endShape(CLOSE);
pop();


// translate(width/2, height/2);
// beginShape();
// for(var i = 0; i < 10; i++) {
//   var x = cos(radians(i * 36)) * 100;
//   var y = sin(radians(i * 36)) * 100;
//   vertex(x, y);
// }
// endShape();

//translate(width/2, height/2);
// beginShape();
// for(var i = 0; i < 10; i++) {
//   var x = cos(radians(i * 5)) * 100;
//   var y = sin(radians(i * 5)) * 100;
//   vertex(x, y);
// }
// endShape();


// beginShape();
//   vertex(207, 127);
//   quadraticVertex(185, 143, 144, 176);
//   bezierVertex(32, 272, 154, 191, 56, 235);
// endShape(CLOSE)

// strokeWeight(20);
// strokeCap(SQUARE);
// translate((width/2) - 200, height/2);
// beginShape();
// for(var i = 0; i < 200; i++) {
//   var x = i * 2;
//   var y = cos(i * radians(2)) * 100;
//   vertex(x, y);
// }
// endShape();

// push();
// var radius = 100;
// beginShape();
// for(var i = 0; i < 10; i++) {
//   var x = cos(radians(i * 36)) * radius;
//   var y = sin(radians(i * 36)) * radius;
//   vertex(x, y);
//   if(radius == 100) {
//     radius = 50;
//   } else {
//     radius = 100;
//   }
// }
// endShape(CLOSE);
// pop();



}

//  function mouseReleased() {
//   if (mouseX>windowWidth-320 && mouseX<windowWidth-20
//     && mouseY>windowHeight-80 && mouseY<windowHeight-20) {
//     var fs = fullscreen();
//     fullscreen(!fs);
//   }
// }
 
// function windowResized() {
//   waitress = millis() + 2000;
//   if (fullscreen()) {
//     resizeCanvas(displayWidth, displayHeight);
//     viewfs.style.display = "none";
//     exitfs.style.display = "block";
//   } else {
//     resizeCanvas(windowWidth,windowHeight);
//     exitfs.style.display = "none";
//     viewfs.style.display = "block";
//   }
//   cursor();  
//   showing = true;
//   //background(0);
// }