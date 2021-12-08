function setup() {
  createCanvas(400, 400);
}

function draw() {
 
  
 var x= 10
  
  draw= function(){
     background(220);
  
  //backboard
  fill(0,0,0);
  rect(x+200, 205, 20, 200);
  fill(255,255,255);
  rect(x+100, 135, 220, 150);
  fill(255,0,0);
  rect(x+152, 165, 120, 10);
  rect(x+152, 175, 10, 60);
  rect(x+152, 226, 120, 10);
  rect(x+260, 175, 10, 60);
  
  //rim
  fill(237, 130, 0);
  rect(x+154, 250, 100, 72, 30);
  fill(255, 255, 255);
  rect(x+162, 257, 82, 57, 30);
    
    //ball
    fill(237, 130, 0);
    ellipse(x+200,x+221, 50,50);
    //ball 2
    fill( 237, 130, 0);
    ellipse (x+5, x+0, 50, 50);
    
    x= x + 1;
    
  }
  
}