var tom, jerry;
function preload() {
    //load the images here
   
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    createCanvas(1200,800);
    tom =createSprite(400,200,80,30);
    jerry = createSprite(200,200,50,80);
    
}
    
function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
   tom.velocityX = -5;
   tom.addAnimation("tomTwo.png");
   tom.changeAnimation("tomTwo.png"); 
   




  }

}
