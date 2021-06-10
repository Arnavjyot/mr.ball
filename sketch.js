
var player;
var edges;
var ball;
var ball1Image,ball2Image,ball3Image,ball4Image,ball5Image;
var lifeline1,lifeline1Image;
var lifeline2,lifeline2Image;
var ballGroup;
var rand;
var score=0;
function preload(){
  ball1Image=loadImage("images/9-ball.png")
  ball2Image=loadImage("images/ball.png")
  ball3Image=loadImage("images/dancing ball.png")
  ball4Image=loadImage("images/devil.png")
  ball5Image=loadImage("images/rice-ball.png")
  lifeline1Image=loadImage("images/lifeline.png")
  lifeline2Image=loadImage("images/lifeline.png")
}
function setup(){
  createCanvas(displayWidth,displayHeight-100);
  player=createSprite(displayWidth/2,displayHeight-150,250,30)
  player.shapeColor="green"
  lifeline1=createSprite(40,60,40,40);
  lifeline1.addImage("lifeline1",lifeline1Image);
  lifeline1.scale=0.4;
  lifeline2=createSprite(100,60,40,40);
  lifeline2.addImage("lifeline1",lifeline1Image);
  lifeline2.scale=0.4;
  ballGroup=new Group();
}


function draw(){
  //set background color 
  background("Black");      
  if(keyDown(LEFT_ARROW)){
    player.x=player.x-5;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x=player.x+5;
  }
  edges=createEdgeSprites();
  player.bounce(edges);
  balls();
  // if(player.isTouching(ballGroup)&& rand===2 ){
  //   lifeline1.destroy();
  //   ballGroup.destroyEach();
  //   ball.velocityY=0;
  //   }
    
  drawSprites();
  // var scorerand=Math.round(random(1,5))
  //   if(scorerand===1){
     // ball.addImage(ball1Image)
      if(player.isTouching(ballGroup) ){
        score=score+5;
        console.log(score);
      }
    //}
  textSize(30);
  text("score:"+Math.round(score/7),700,30);
}
function balls(){
  if(frameCount%100===0){
    ball=createSprite(random(10,displayWidth-250),0,40,40);
    ball.velocityY=+5;
    player.depth=ball.depth;
    ballGroup.add(ball)
     rand = Math.round(random(1,5));
    switch(rand) {
      case 1: ball.addImage(ball1Image);
              break;
      case 2: ball.addImage(ball2Image);
      ball.scale=0.7;
      ball.debug=true;
              break;
      case 3: ball.addImage(ball3Image);
        ball.scale=0.7;
              break;
      case 4: ball.addImage(ball4Image);
              break;
      case 5: ball.addImage(ball5Image);
              break;
      default: break;
    }
    
  }

  
  


}
function devil(){
  
}
