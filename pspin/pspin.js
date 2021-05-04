function preload(){
  pc=loadFont('data/pictochat.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  angleMode(DEGREES);
  background(220);
  textAlign(CENTER);
  frameRate(15);

}

var spin=0;
var letterSize=50;


function draw() {
  fill(0);
  push();
    translate(width/2, height/2-3);
    rotate(spin);
    letterSize=map(mouseY, 0, height, 30, 120); 
    textSize(letterSize);
    textFont(pc);
    text('ABCDE', 0, -letterSize*0.01);
    spin+=(mouseX, 0, width, -10, 10);
 pop();
 background(220, 51);

}
