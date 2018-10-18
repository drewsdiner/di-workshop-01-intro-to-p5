

function setup() {
  createCanvas(1420, 700)
  strokeWeight(10)
  stroke(50)
  background(255, 192, 203)
  
}

function draw() {
  if (mouseIsPressed)
    
  fill(40, 0, 0)
    
  if (keyIsPressed) 
  if (key == 'r')
  {
  fill(255, 0, 0)
  
 } 
  if (key == 'g'){
    fill(0, 255, 0)

  } 
  if (key == 'b'){
    fill(0, 0, 225)
  

  }
  triangle(mouseX + mouseY + mouseX + mouseY);
  triangle(1, 130, 175, 130, 90, 1);
  //rect(mouseX, mouseY, 30, 160, 100, 100);

}

