// Interaction Color Explorations
// Coding for Artists
// Urban Reininger aka: UrbanAtWork 2019
// Inspired by the work of Josef Albers

var leftBoxSlider;

function setup() {
  createCanvas(800, 400);
  textSize(20);
  colorMode(HSB);
  
  //create sliders
  leftBoxSlider = createSlider(0,255,28);
  leftBoxSlider.position(20,26);
  
  rightBoxSlider = createSlider(0,255,202);
  rightBoxSlider.position(650,26);
  noStroke();
  
}// end of setup

function draw() {
  background(255);
  var leftSliderHue = leftBoxSlider.value();
  var rightSliderHue = rightBoxSlider.value();
  
  fill(leftSliderHue,97,95);  // Orange
  rect(0,0,width/4,height);

  fill(rightSliderHue,64,71); // grey blue
  rect(width/4*3,0,width/4,height);

  fill(29,93,67);  // Brown-ish
  rect(width/8,height/3,600,height/3);

  fill(58,86,99);  // happy Yellow
  rect(width/4,0,width/4,height);
  
  fill(240,57,39); // dark blue
  rect(width/2,0,width/4,height);
  
  text("Hue:" + leftSliderHue,20,23);
  text("Hue:" + rightSliderHue,650,23);
  
  if(mouseIsPressed){
    fill(29,93,67);  // Brown-ish
    rect(width/8,height/3,600,height/3);
    
  } // end of if

} // end draw










