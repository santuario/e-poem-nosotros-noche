/*
 * para bessie
 * la noche estrellada remix
 * @author santuario
 * @date 2017/02/04
 */

//scp -ra /path/to/local/storage user@remote.host:/path/to/copy

/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */

var type;

// Font
var geoMidFont
var geoSmallFont;


var theta = 0.0; 

/*
 *****************************************
 *****************************************
 * LYFE CYCLE METHODS
 *****************************************
 *****************************************
 */

function preload() {
  // Backgrund



  // Fonts
  geoMidFont = loadFont('assets/fonts/Geogtq-Md.otf');
  geoSmallFont = loadFont('assets/fonts/Geogtq-Ul.otf');

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  initialize();


}

function draw() {
  
  if(type == 0) {
      drawDay();
  } else {
      drawNight();
  }

}

/*
 *****************************************
 *****************************************
 * INITIALIZE METHODS
 *****************************************
 *****************************************
 */

function initialize() {



}

function drawDay(){
    background(255);
    fill(0);
    textAlign(CENTER, CENTER);
    noStroke();
    textFont(geoSmallFont);
    textSize(18*2);
    fill(0, 0, 0, random(100,255))
    text('[estrella]',windowWidth/4, windowHeight/8);
    fill(0, 0, 0, random(50,150))
    text('[estrella]',2*windowWidth/4, windowHeight/8);
    fill(0, 0, 0, random(80,170))
    text('[estrella]',3*windowWidth/4, windowHeight/8);
    fill(0);
    text('[luna]',4*windowWidth/5, 2*windowHeight/8);
    push();
    translate(1*windowWidth/3, 3*windowHeight/8);
    rotate(radians(frameCount));
    text('[espiral]',0,0);
    pop();
    fill(0, 0, 0, random(100,255))
    text('[estrella]',2*windowWidth/3, 3*windowHeight/8);
    theta += 0.02;
    var x = theta;
    var movement = 5*sin(x);
    fill(0);
    push();
    translate(8*movement+1*windowWidth/4, 4*windowHeight/8);
    text('[ciprés]',0,0);
    pop();
    fill(0, 0, 0, random(50,150))
    text('[estrella]',4*windowWidth/9, 4*windowHeight/8);
    fill(0);
    push();
    translate(7*windowWidth/9, 4*windowHeight/8);
    rotate(radians(frameCount+50));
    text('[espiral]',0,0);
    pop();  
    push();
    translate(4*movement+1*windowWidth/4, 5*windowHeight/8);
    text('[ciprés]',0,0);
    pop();
    text('[valle]',3*windowWidth/6, 5*windowHeight/8);
    text('[valle]',5*windowWidth/6, 5*windowHeight/8);
    push();
    translate(2*movement+1*windowWidth/4, 6*windowHeight/8);
    text('[ciprés]',0,0);
    pop();
    text('[pueblo]',4*windowWidth/7, 6*windowHeight/8);
    text('[ciprés]',1*windowWidth/4, 7*windowHeight/8);
}

function drawNight(){
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    noStroke();

    
    //Title
    textAlign(RIGHT, CENTER);
    textFont(geoMidFont);
    textSize(28*2);
    text('noche estrellada',windowWidth-30, windowHeight-80*2);
    textFont(geoSmallFont);
    textSize(20*2);
    text('remix',windowWidth-30, windowHeight-60*2);
    textSize(16*2);
    text('v. gogh ft. a. santuario',windowWidth-30, windowHeight-40*2);
    
}


function mousePressed() {
  if(type == 0) {
    type = 1;
  } else {
    type = 0;
  }
}