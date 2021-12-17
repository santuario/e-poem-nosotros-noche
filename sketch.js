/*
 * para ana
 * la noche estrellada remix
 * @author santuario
 * @date 2020/12/17
 */

//scp -ra /path/to/local/storage user@remote.host:/path/to/copy

/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */



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
  

drawInterface();
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

function drawInterface(){
    
    background(255);
    fill(0);
    textAlign(CENTER, CENTER);
    noStroke();
    textFont(geoSmallFont);
    textSize(26*2);
    text('>> nosotros <<',windowWidth/2, windowHeight/3);
    text('>> noche estrellada <<',windowWidth/2, 2*windowHeight/3);

}




function mousePressed() {
    if(mouseY <= windowHeight/2){
        window.location.href = "https://santuario.github.io/e-poem-nosotros-noche/nosotros/index.html";
    }else{
        window.location.href = "https://santuario.github.io/e-poem-nosotros-noche/noche/index.html";
    }

}