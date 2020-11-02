
var monkey , monkeyruningImage;
var banana ,bananaImage,bananaGroup;
var enemy,enemyImage,enemyGroup;
var enemy,enemyGroup,enemyImage;
var invisivalGround;
function preload(){
var score=0;  
  
  monkeyruningImage =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  enemyImage=loadImage("obstacle.png");
 bananaImage=loadImage("banana.png");
}



function setup() {
  createCanvas(600,400)

  monkey=createSprite(100,300,20,67)
  monkey.addAnimation("runing",monkeyruningImage)
  monkey.scale=0.1;

  invisivalGround=createSprite(100,337,1000,10);
invisivalGround.shapeColor="darkgreen"
  invisivalGround.x=invisivalGround.width/2;
   
bananaGroup=createGroup();
  enemyGroup=createGroup();
  points=0
  
}


function draw(){
background("white")
  
  text("score: "+points,300,40)
  
  invisivalGround.velocityX= -1000;
  if(invisivalGround.x<0){
     invisivalGround.x=invisivalGround.width/2
  }
  banana4()
     
  if(keyDown("space") && monkey.y >=-10  ){
    monkey.velocityY=-7   
  }
  
  
  monkey.velocityY = monkey.velocityY + 0.90
  
  
    
    if(enemyGroup.isTouching(monkey)){
    monkey.scale=0.05 
    }
  
  
  
  
  
  
  if(bananaGroup.isTouching(monkey)){
    monkey.scale=0.1
  }
  monkey.collide(invisivalGround);
  
  
  obs();
  
   drawSprites();
  
  
}


function banana4(){
  

  
  if(frameCount % 100===0){
    var banana678=createSprite(600,100,90,90);
    banana678.addImage(bananaImage);
    banana678.scale=0.1
    banana678.velocityX=-6
    bananaGroup.add(banana678)
    
   
    
  
   
   
      
    }
    
    
  
  
     }


function obs(){
  
  if(frameCount% 300===0){
    
    var og=createSprite(600,316 ,8,8);
    og.addImage(enemyImage)
    og.scale=0.1
    og.velocityX =-3
   enemyGroup.add(og) 
    
    
  }
}
