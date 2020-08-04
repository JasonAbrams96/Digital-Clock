//Author: Jason Abrams
//Idea:   From a coding train video (https://www.youtube.com/watch?v=MlRlgbrAVOs), go watch his stuff, he is amazing!

let c;        //Clock
let rSlider;  //a Slider
let gslider;  //a Slider
let bSlider;  //a Slider

//Global variables for the slider
var rSliderValue;
var gSliderValue;
var bSliderValue;

function setup() {
  createCanvas(700, 340);
  //frameRate(1);
  c = new Clock();

  //Setting each slider with a color value between 0 and 255 with red only being on in the beginning and each has a step counter of 1
  rSlider = createSlider(0, 255, 255, 1);
  gSlider = createSlider(0, 255, 0, 1);
  bSlider = createSlider(0, 255, 0, 1);

}

function draw() {
  background(0);
  rSliderValue = rSlider.value();
  gSliderValue = gSlider.value();
  bSliderValue = bSlider.value();
  c.update();
  c.draw();
}

