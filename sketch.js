
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
}



function setup() {
  var survivalTime = 0
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  
  FoodGroup = new Group()
  obstaclesGroup = new Group()
}


function draw() {
background("green")
  if (ground.x<0){
    ground.x = ground.width/2
  }
if (keyDown("Space")){
  monkey.velocityY = -8
}
  monkey.velocityY = monkey.velocityY +0.5
  monkey.collide(ground)
 drawSprites() 
  
  spawnFood()
  spawnObstacles()
drawSprites();
  stroke("black")
  textSize(20)
  fill("black")
  text("score:"+score,500,50)
  if (obstaclesGroup.isTouching(monkey)){
    
    ground.velocityX = 0
    monkey.velocityY = 0
    obstaclesGroup.setVelocityXEach(0)
    FoodGroup.setVelocityXEach(0)
    obstaclesGroup.setLifetimeEach(-1)
    FoodGroup.setLifetimeEach(-1)
  }
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,100,50)

}
function spawnFood(){
  if (frameCount%80 === 0){
    banana = createSprite(600,400,40,10)
   banana.y =random(200,300)
    banana.velocityX = -5
    banana.lifetime = 300
    banana.addImage(bananaImage)
    banana.scale = 0.05
    FoodGroup.add(banana)
  }
}
function spawnObstacles(){
  if (frameCount%300 === 0){
    obstacle = createSprite(800,320,10,40)
    obstacle.velocityX = -5
    obstacle.lifetime = 300
    obstacle.addImage(obstaceImage)
    obstacle.scale = 0.15
    obstaclesGroup.add(obstacle)
  }
}