var box;

function setup() {
  createCanvas(800,400);
  box = createSprite(200,200,50,80);
  box.shapeColor = "green";

  

}

function draw() {
  background("blue"); 
  
  if(keyIsDown(RIGHT_ARROW)){
  box.position.x = box.position.x + 2 
  background("red")
  }
    if(keyIsDown(DOWN_ARROW)){
      box.position.y = box.position.y + 2
      background("yellow") 
      }
      if(keyIsDown(UP_ARROW)){
        box.position.y = box.position.y - 2 
        background("pink")
        }
        if(keyIsDown(LEFT_ARROW)){
          box.position.x = box.position.x - 2 
          background("purple")
          }
  drawSprites();

}