// Interaction of Color Experiments 2 by Urban Reininger

var leftBoxSlider;
var rightBoxSlider;

function setup() {
  createCanvas(640, 329);
	colorMode(HSB);
	noStroke();

  // create sliders
  leftBoxSlider = createSlider(0, 255, 31);  // 
  leftBoxSlider.position(20, 20);
	
	rightBoxSlider = createSlider(0, 255, 202);  // 
  rightBoxSlider.position(500, 20);
}

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
	}
	
	fill(128);
	text("Drag the sliders",10,15);
}
