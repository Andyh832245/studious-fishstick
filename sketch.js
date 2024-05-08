//The setup function only happens once
var salut-9
var tri1

function setup() { 
  createCanvas(500,500); //create a 500px X 500 px canvas
  background(50,salut,214);
}

//The draw function happens over and over again
function draw() {
	//an RGB color for the canvas' background
	//circle
	stroke(255,25,127)// an RGB color for the circle's border
	strokeWeight(3);
	fill(mouseX,255,127,150); 
	ellipse(random(width),random(height),25,25);
	fill(28,247,106);
	strokeWeight(0);
	ellipse(mouseX,mouseY,50,50);
	fill(247,176,28);
	stroke(28,190,247);
	strokeWeight(5);
	textSize(100);
	textFont('Gramond');
    text('hello',220,250);
    line(50,50,450,salut);
    triangle(200,75,58,400,86,salut);
}
function mousePressed(){