//Author: Jason Abrams
//Idea:   From a coding train video (https://www.youtube.com/watch?v=MlRlgbrAVOs), go watch his stuff, he is amazing!

class Clock {

  constructor() {
    //gfedcba, HEX for 0-9
    this.segments = [0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7F, 0x6F];

    //For drawing the display elements of the clock
    this.arrOfX = [40, 140, 140, 40, 20, 20, 40];
    this.arrOfOther = [40, 100, 20, 60, 20, 100, 180, 20, 100, 280, 100, 20, 180, 20, 100, 60, 20, 100, 160, 100, 20];

    // Variables to keep track of first hour, second hour, first minute segment and second minute segment
    this.first = null;
    this.second = null;
    this.third = null;
    this.fourth = null;

  }

  //updates this.first-this.fourth with the values of a hours, minutes, seconds
  update() {
    let d = new Date(Date.now());

    let currentHour = d.getHours();
    let currentMin = d.getMinutes();
    let currentSec = d.getSeconds();  //going to be used later

    //sets first for the first segment of the clock
    this.first = floor(currentHour / 10);

    /*
    if (currentHour > 19) {
        this.first = 2;
    } else if (currentHour > 9)  {
       this.first = 1; 
    } else {
      this.first = 0;
    }*/

    //sets the second segment for the clock
    this.second = currentHour % 10;

    /*if (currentHour > 19){
       this.second =  currentHour % 30 - 20;
    } else if (currentHour > 9) {
      this.second = currentHour % 20 - 10;
    } else {
      this.second = currentHour % 10;
    }*/

    this.third = floor(currentMin / 10);
    this.fourth = currentMin % 10;
  }

  //Gets called and draws the segments of the clock and the dots between them
  draw() {
    this.segOne(this.segments[this.first]);
    this.segTwo(this.segments[this.second]);
    this.dots();
    this.segThree(this.segments[this.third]);
    this.segFour(this.segments[this.fourth]);
  }

  getColor(val, shift) {
    //shows that the r g b values are being acquired from global variables from sketch.js 
    let r = rSliderValue;
    let g = gSliderValue;
    let b = bSliderValue;
    let a = 255 * ((val >> shift) & 1); //Bit shifts  and AND with 1 to see if a segment is a on or off

    if (a == 0) {
      return color(r, g, b, 5)// returns a hard to see version of the color, to make it look like a real life 7 segment display
    }
    return color(r, g, b, a);//returns the color and alpha that is 100
  }

  //Draws the dots between hours and minutes
  dots() {
    push();
    stroke(0);
    fill(rSliderValue, gSliderValue, bSliderValue, 255);
    rect(340, 100, 20, 20);
    rect(340, 220, 20, 20);
    pop();
  }
  
////////////////////////////////////////////////////////////////////
  segOne(val) {
    push();
    stroke(0);
    let otherIndex = 0;
    let otherStopIndex = 2;

    //For loops to display the segments where they need to be
    for (let i = 0; i < this.arrOfX.length; i++) {

      for (let j = otherIndex; j < otherStopIndex; j += 3) {
        fill(this.getColor(val, i));
        rect(this.arrOfX[i], this.arrOfOther[j], this.arrOfOther[j + 1], this.arrOfOther[j + 2]);
      }
      otherIndex = otherStopIndex + 1;
      otherStopIndex += 3;
    }

    /*//A
    fill(this.getColor(val, 0));
    rect(40, 40, 100, 20);

    //B
    fill(this.getColor(val, 1));
    rect(140, 60, 20, 100);

    //C
    fill(this.getColor(val, 2));
    rect(140, 180, 20, 100);

    //D
    fill(this.getColor(val, 3));
    rect(40, 280, 100, 20);

    //E
    fill(this.getColor(val, 4));
    rect(20, 180, 20, 100);

    //F
    fill(this.getColor(val, 5));
    rect(20, 60, 20, 100);

    //G
    fill(this.getColor(val, 6));
    rect(40, 160, 100, 20);*/
    pop();
  }
  ////////////////////////////////////////////////////
  segTwo(val) {
    push();
    stroke(0);

    let otherIndex = 0;
    let otherStopIndex = 2;
    let segTwoLoc = 160;

    //For loops to display the segments where they need to be
    for (let i = 0; i < this.arrOfX.length; i++) {

      for (let j = otherIndex; j < otherStopIndex; j += 3) {
        fill(this.getColor(val, i));
        rect(this.arrOfX[i] + segTwoLoc, this.arrOfOther[j], this.arrOfOther[j + 1], this.arrOfOther[j + 2]);
      }

      otherIndex += 3;
      otherStopIndex += 3;
    }

    /*//A
    fill(this.getColor(val, 0));
    rect(200, 40, 100, 20);

    //B
    fill(this.getColor(val, 1));
    rect(300, 60, 20, 100);

    //C
    fill(this.getColor(val, 2));
    rect(300, 180, 20, 100);

    //D
    fill(this.getColor(val, 3));
    rect(200, 280, 100, 20);

    //E
    fill(this.getColor(val, 4));
    rect(180, 180, 20, 100);

    //F
    fill(this.getColor(val, 5));
    rect(180, 60, 20, 100);

    //G
    fill(this.getColor(val, 6));
    rect(200, 160, 100, 20);
    */
    pop();
  }
  /////////////////////////////////////////////
  segThree(val) {
    push();
    stroke(0);


    let otherIndex = 0;
    let otherStopIndex = 2;
    let segThreeLoc = 360


    for (let i = 0; i < this.arrOfX.length; i++) {

      for (let j = otherIndex; j < otherStopIndex; j += 3) {
        fill(this.getColor(val, i));
        rect(this.arrOfX[i] + segThreeLoc, this.arrOfOther[j], this.arrOfOther[j + 1], this.arrOfOther[j + 2]);
      }

      otherIndex += 3;
      otherStopIndex += 3;
    }

    /*//A
    fill(this.getColor(val, 0));
    rect(400, 40, 100, 20);

    //B
    fill(this.getColor(val, 1));
    rect(500, 60, 20, 100);

    //C
    fill(this.getColor(val, 2));
    rect(500, 180, 20, 100);

    //D
    fill(this.getColor(val, 3));
    rect(400, 280, 100, 20);

    //E
    fill(this.getColor(val, 4));
    rect(380, 180, 20, 100);

    //F
    fill(this.getColor(val, 5));
    rect(380, 60, 20, 100);

    //G
    fill(this.getColor(val, 6));
    rect(400, 160, 100, 20);
    */
    pop();
  }
  /////////////////////////////////////////////////////
  segFour(val) {
    push();
    stroke(0);

    let otherIndex = 0;
    let otherStopIndex = 2;
    let segFourLoc = 520;

    for (let i = 0; i < this.arrOfX.length; i++) {

      for (let j = otherIndex; j < otherStopIndex; j += 3) {
        fill(this.getColor(val, i));
        rect(this.arrOfX[i] + segFourLoc, this.arrOfOther[j], this.arrOfOther[j + 1], this.arrOfOther[j + 2]);
      }

      otherIndex += 3;
      otherStopIndex += 3;
    }


    /*
    //A
    fill(this.getColor(val, 0));
    rect(560, 40, 100, 20);

    //B
    fill(this.getColor(val, 1));
    rect(660, 60, 20, 100);

    //C
    fill(this.getColor(val, 2));
    rect(660, 180, 20, 100);

    //D
    fill(this.getColor(val, 3));
    rect(560, 280, 100, 20);

    //E
    fill(this.getColor(val, 4));
    rect(540, 180, 20, 100);

    //F
    fill(this.getColor(val, 5));
    rect(540, 60, 20, 100);

    //G
    fill(this.getColor(val, 6));
    rect(560, 160, 100, 20);
    */
    pop();
  }

  

}