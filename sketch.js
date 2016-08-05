var myRed = 0;
var myGreen = 25;
var myBlue = 200;

function circle(x,y, diameter){
  ellipse(x,y,diameter,diameter);
}

function setup() {
createCanvas(1000,600);

}

function draw() {
  myRed = myRed + 2 ; 
  if (myRed >255){
    myRed = 0;
  }
  myGreen = myGreen + 1;
  if (myGreen > 200){
    myGreen = 0;
  }
  noStroke(); 
  fill(myRed,myGreen,myBlue);
  ellipse(mouseX,mouseY, 10);
  
if (mouseIsPressed){
  fill(255,255,255);
  ellipse (mouseX,mouseY,40);
}

function (keyPressed)(){
    noStroke(); 
  fill(myRed,myGreen,myBlue);
  ellipse(mouseX,mouseY, 50);
}
  
}