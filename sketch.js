var path,boy,boyImg,leftBoundary,rightBoundary;
var pathImg;
var i;

function preload(){
//pre-load images
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");  
}

function setup(){
   drawSprites();
  createCanvas(400,600);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;
  
  boy = createSprite(70,580,20,20);
  boy.addAnimation("jakeRunning",boyImg);
  boy.scale=0.08;

  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible=false;
  
  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible=false;

}

function draw() {
background(0);
boy.x=World.mouseX;
path.velocityY=4;

edges=createEdgeSprites();
  
boy.collide(edges[3]);
boy.collide(leftBoundary);
boy.collide(rightBoundary);
  if(path.y>400){
  path.y=height/2;
  }

 drawSprites(); 
}
