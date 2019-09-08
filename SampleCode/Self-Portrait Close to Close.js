// Close to Chuck Close
// by Urban Reininger aka: UrbanAtWork
// Spring 2019 - Coding for Artists

// preload for an image
var img;
var stepSize = 20;
var blobSize = 25;

var row = 0;
var col = 0;

var getColor;
var haveIrun = false;

var saving = false;

function preload() {
  img = loadImage('urbanAtWork.jpg');
} // end of preload

// display the image
function setup() {
	createCanvas(400, 400);
	//image(img, 0, 0);
	rectMode(CENTER);
	noStroke();
} // end of setup

function draw() {
//  background(220);
	
	getColor = img.get(row+random(stepSize/1.5),col+random(stepSize/1.5));

		//getColor[3] = 50;
		fill(getColor,128);
	if(!haveIrun){
		stroke(128);
		strokeWeight(0.4);
		rect(row, col,stepSize,stepSize);
		noStroke();
	}else{
		getColor[3] = 20;
		fill(getColor,128);
	push();
	translate(row,col);
	rotate(radians(random(-90,90)));
	translate(-row,-col);
	//(row+random(-3,3), col+random(-3,3),blobSize,blobSize);
		ellipse(row+random(-3,3), col+random(-3,3),blobSize+random(-blobSize/1.5),blobSize+random(-blobSize/1.5));	
	pop();
	}
	row += stepSize;
	if (row>width){
		row = 0;
		col = col + stepSize;
		if (col>height){
			col = 0;
			//stepSize = stepSize/1.2;
			blobSize = blobSize/1.1;
			haveIrun = true;
		}
	}
	
	if(mouseIsPressed){
		saving = true;
	}
	
	if(!mouseIsPressed && saving == true){
		saveThisCanvas();	
		saving = false;
	}	
}// end of draw


function saveThisCanvas(){
	save('myCanvas.jpg');
} // end of save
