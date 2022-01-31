var jackImg,pathImg,path,jack,left_boundary,right_boundary;


function preload(){
 pathImg = loadImage("path.png");
 jackImg = loadAnimation("Runner-1.png","Runner-2.png") 
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.scale=0.6;
  path.velocityY=4
  path.y=path.height/30


jack=createSprite(180,340,50,170);
jack.addAnimation("walking", jackImg);
jack.scale=1;

left_boundary=createSprite(0,300,100,600);
right_boundary=createSprite(390,300,80,600);
left_boundary.visible=false
right_boundary.visible=false
}


function draw() {
  background(0);
if(path.y>400){
  path.y=height/2
}


  path.velocityY=4;
 jack.x=world.mouseX
 
 }
  jack.collide(left_boundary);
  jack.collide(right_boundary);
  edges=createSprite()
  jack.collide(edges[3])

  drawSprites();

}
