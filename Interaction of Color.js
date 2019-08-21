// Interaction of Color Exploration (with Sliders!)
// Coding for Artists 
// by Urban Reininger
// 2019

var leftBoxSlider;  // variable for slider
var rightBoxSlider; // variable for slider

function setup() {
  createCanvas(640, 329);
	colorMode(HSB); // set color mode to hue, saturation, brightness instead of RGB
	noStroke(); // remove outlines of shapes

  // create sliders
  leftBoxSlider = createSlider(0, 255, 31);  // 
  leftBoxSlider.position(20, 20);
	
  rightBoxSlider = createSlider(0, 255, 202);  // 
  rightBoxSlider.position(500, 20);
}  // end of setup

function draw() {
	background(127);
	var leftBoxHue = leftBoxSlider.value();
	var rightBoxHue = rightBoxSlider.value();
	
	fill(leftBoxHue,98,99);
	rect(0,0,187,height);

	fill(rightBoxHue,62,71);
	rect(470,0,240,height);
		// the bar
	fill(29,88,67);
	rect(114,124,440,80);
	
	fill(58,86,99);
	rect(187,0,142,height);
	
	fill(242,58,39);
	rect(329,0,142,height);
	
	if (mouseIsPressed){
		fill(leftBoxHue,98,99);
		rect(0,0,187,height);

		fill(rightBoxHue,62,71);
		rect(470,0,240,height);

		fill(58,86,99);
		rect(187,0,142,height);

		fill(242,58,39);
		rect(329,0,142,height);

		// the bar
		fill(29,88,67);
		rect(114,124,440,80);
	} // end if
	
	fill(128);
	text("Drag the sliders",10,15);
} // end draw
