const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var gameState=0;
var LEVEL1=0;
var LEVEL2=1;
var ground, upperGround, restGround;
var player, playerStanding, playerStanding2, playerRunning, playerRunning2, playerFalling, playerFalling2, playerJumping, playerJumping2;

var Img; 
var img1,img2,img3,img4;

var box1;
var lift1, lift2, lift3, lift4, lift5;
var dot1, dot2, dot3, dot4, dot5, dot6, dot7, dot8, dot9, dot10, dot11, dot12, dot13, dot14, dot15, dot16, dot17, dot18;
var door1;
var button1, button2;
var line1, line2, line3, line4, line5;
var ladder1, ladder1Img;
var laser1, laser2, laser3, laser4, laser5, laser6, laser7, laser8, laser9, laser10, laser11, laser12, laser13, laser14, laser15;
var lava;
var checkPoint1, checkPoint2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11;
var ironRod1, ironRod2, ironRod3, ironRod4, ironRod5, ironRod6, ironRod7, ironRod8, ironRod9, ironRod10;

var a=true;
var b=true;
var c=true;
var d=true;
var j=true;
var f=true;
var g=true;
var h=true;
var i=true;
var z=true;
var y=true;

function preload(){
  Img = loadImage("Images/back_ground.png");
  ladder1Img = loadImage("Images/Ladder.png");
  playerStanding = loadAnimation("Images/Idle 1.png", "Images/Idle 2.png", "Images/Idle 3.png", "Images/Idle 4.png", "Images/Idle 5.png", "Images/Idle 6.png", "Images/Idle 7.png", "Images/Idle 8.png", );
  playerJumping = loadAnimation("Images/Jump 1.png","Images/Jump 2.png");
  playerJumping2 = loadAnimation("Images/Jump 3.png","Images/Jump 4.png");
  playerStanding2 = loadAnimation("Images/Idle 9.png", "Images/Idle 10.png", "Images/Idle 11.png", "Images/Idle 12.png", "Images/Idle 13.png", "Images/Idle 14.png", "Images/Idle 15.png", "Images/Idle 16.png");
  playerRunning = loadAnimation("Images/Run 1.png", "Images/Run 2.png", "Images/Run 3.png", "Images/Run 4.png", "Images/Run 5.png", "Images/Run 6.png", "Images/Run 7.png", "Images/Run 8.png")
  playerRunning2 = loadAnimation("Images/Run 9.png", "Images/Run 10.png", "Images/Run 11.png", "Images/Run 12.png", "Images/Run 13.png", "Images/Run 14.png", "Images/Run 15.png", "Images/Run 16.png")
  playerFalling = loadAnimation("Images/Fall 1.png", "Images/Fall 2.png");
  spearImage = loadImage("Images/Spear.png");
  spearImage2 = loadImage("Images/Spear2.png");
  buttonImage = loadImage("Images/Button.png");
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

   img1 = createSprite(423, 350, 1366, 400);
   img1.shapeColor="skyBlue";
   img1.addImage(Img);
   img1.scale=1.25;
   img2 = createSprite(943, 350, 1366, 400);
   img2.shapeColor="skyBlue";
   img2.addImage(Img);
   img2.scale=1.25; 
   img3 = createSprite(1920, 775, 1366, 400);
   img3.shapeColor="skyBlue";
   img3.addImage(Img);
   img3.scale=2.03; 

  console.log(img2.x)
  //80
  player = createSprite(80, 509, 30, 60);
  //player = createSprite(2500, 560, 30, 60);
  player.addAnimation("idle",playerStanding);
  player.setCollider("rectangle", 0, 20, 40, 60);
  

 ground = createSprite(683, 554, 1366, 10);
 //ground.debug=true;
 ground2 = createSprite(1350, 1090, 240, 40);
 upperGround = createSprite(683, 146, 1366, 10);

 lava = createSprite(1950, 1105, 960, 10);

 restGround = createSprite(2500, 1090, 200, 40);
  

  line1 = createSprite(200, 180, 10, 60);
  line2 = createSprite(200, 450, 10, 200);
  line3 = createSprite(40, 240, 100, 10);
  line4 = createSprite(-5, 350, 10, 418);
  line5 = createSprite(1375, 350, 20, 417.9);
  line6 = createSprite(2615, 770, 30, 680);
  line7 = createSprite(1995, 442, 1220, 25);
  line8 = createSprite(1230, 831, 10, 558);

  door1 = createSprite(200, 300, 10, 180);
  door2 = createSprite(1200, 450, 10, 200)

  button1 = createSprite(20, 203, 5, 5);
  button1.addImage(buttonImage);
  button1.scale=0.13
  //button1.debug=true;
  button1.setCollider("rectangle",0,0,100,500)

  button2 = createSprite(1300, 300, 10, 10);
  button2.addImage(buttonImage);
  button2.scale=0.15
  //button2.debug=true;
  button2.setCollider("rectangle",0,0,100,400)

  
  lift1 = createSprite(150, 500, 70, 10);
  lift1.velocityY = -1;

  lift2 = createSprite(250, 500, 70, 10);
  lift2.velocityY = -1;

  lift3 = createSprite(2560, 900, 80, 10);
  lift3.velocityY = -1.5;

  lift4 = createSprite(2405, 890, 80, 10);
  lift4.velocityX = -3;

  lift5 = createSprite(1560, 880, 80, 10);
  lift5.velocityY = 2;

  dot1 = createSprite(150, 260, 1, 1);
  dot2 = createSprite(150, 500, 1, 1);

  dot3 = createSprite(250, 260, 1, 1);
  dot4 = createSprite(250, 500, 1, 1);

  dot6 = createSprite(1750, 1080, 1, 1);
  dot7 = createSprite(2000, 1080, 1, 1);

  dot8 = createSprite(2060, 1080, 1 , 1);
  dot9 = createSprite(2310, 1080, 1, 1);

  //
  dot10 = createSprite(2560, 1050, 1, 1);
  dot11 = createSprite(2560, 850, 1, 1);

  dot12 = createSprite(2450, 890, 1, 1);
  dot13 = createSprite(1650, 890, 1, 1);

  dot18 = createSprite(1700, 900, 1, 1);
  dot19 = createSprite(1720, 900, 1, 1);

  dot14 = createSprite(1560, 930, 1, 1);
  dot15 = createSprite(1560, 730, 1, 1);

  dot5 = createSprite(-800000, 100, 10, 10);
  dot5.velocityY=1;

  ladder1 = createSprite(1300, 775, 60, 400);
  ladder1.addImage(ladder1Img);
  ladder1.scale=0.075
  ladder1.setCollider("rectangle",0, -1000, 1400, 8000);
  ladder1.debug=false;

  checkPoint1 = createSprite(2460, 1020, 10, 10);
  checkPoint2 = createSprite(1560, 800, 70, 220);
  checkPoint2.visible=false;
  

  box1 = createSprite(850, 360, 1060, 50);
  //box1.debug=true;

  laser1 = createSprite(350, 145, 20, 5);
  laser2 = createSprite(430, 145, 20, 5);
  laser3 = createSprite(510, 145, 20, 5);
  laser4 = createSprite(590, 145, 20, 5);
  laser5 = createSprite(670, 145, 20, 5);
  laser6 = createSprite(750, 145, 20, 5);
  laser7 = createSprite(830, 145, 20, 5);
  laser8 = createSprite(900, 145, 20, 5);
  laser9 = createSprite(980, 145, 20, 5);
  laser10 = createSprite(1060, 145, 20, 5);
  laser11 = createSprite(1140, 145, 20, 5);
  laser12 = createSprite(1220, 145, 20, 5);

  ironRod1 = createSprite(400, 529, 15, 40);
  ironRod1.addImage(spearImage);
  ironRod1.scale=0.15
  //ironRod1.debug=true
  ironRod1.setCollider("rectangle",0,0,80,400)
  ironRod2 = createSprite(470, 405, 15, 40);
  ironRod2.addImage(spearImage2);
  ironRod2.scale=0.15
  //ironRod2.debug=true
  ironRod2.setCollider("rectangle",0,0,80,400)
  ironRod3 = createSprite(540, 529, 15, 40);
  ironRod3.addImage(spearImage);
  ironRod3.scale=0.15
  //ironRod3.debug=true
  ironRod3.setCollider("rectangle",0,0,80,400)
  ironRod4 = createSprite(610, 405, 15, 40);
  ironRod4.addImage(spearImage2);
  ironRod4.scale=0.15
  //ironRod4.debug=true
  ironRod4.setCollider("rectangle",0,0,80,400)
  ironRod5 = createSprite(680, 529, 15, 40);
  ironRod5.addImage(spearImage);
  ironRod5.scale=0.15
  //ironRod5.debug=true
  ironRod5.setCollider("rectangle",0,0,80,400)
  ironRod6 = createSprite(750, 405, 15, 40);
  ironRod6.addImage(spearImage2);
  ironRod6.scale=0.15
  //ironRod6.debug=true
  ironRod6.setCollider("rectangle",0,0,80,400)
  ironRod7 = createSprite(820, 529, 15, 40);
  ironRod7.addImage(spearImage);
  ironRod7.scale=0.15
  //ironRod7.debug=true
  ironRod7.setCollider("rectangle",0,0,80,400)
  ironRod8 = createSprite(890, 405, 15, 40);
  ironRod8.addImage(spearImage2);
  ironRod8.scale=0.15
  //ironRod8.debug=true
  ironRod8.setCollider("rectangle",0,0,80,400)
  ironRod9 = createSprite(960, 529, 15, 40);
  ironRod9.addImage(spearImage);
  ironRod9.scale=0.15
  //ironRod9.debug=true
  ironRod9.setCollider("rectangle",0,0,80,400)
  ironRod10 = createSprite(1040, 405, 15, 40);
  ironRod10.addImage(spearImage2);
  ironRod10.scale=0.15
  //ironRod10.debug=true
  ironRod10.setCollider("rectangle",0,0,80,400)
  ironRod11 = createSprite(1110, 529, 15, 40);
  ironRod11.addImage(spearImage);
  ironRod11.scale=0.15
  //ironRod11.debug=true
  ironRod11.setCollider("rectangle",0,0,80,400)
  ironRod12 = createSprite(1180, 405, 15, 40);
  ironRod12.addImage(spearImage2);
  ironRod12.scale=0.15
  //ironRod12.debug=true
  ironRod12.setCollider("rectangle",0,0,80,400)
  

  block1 = createSprite(1620, 1080, 100, 20);
  block2 = createSprite(1800, 1080, 100, 20);
  block2.velocityX=-1;
  block3 = createSprite(2260, 1080, 100, 20);
  block3.velocityX=-1;

  dot16 = createSprite(1620, 880, 10, 10);
  dot16.velocityY=2;
  dot16.visible=false;

  dot17 = createSprite(1660, 925, 10, 10);
  dot17.velocityY=-1.6;
  dot17.visible=false;

  block4 = createSprite(1440, 700, 90, 20);
  block5 = createSprite(1610, 640, 100, 20);
  block6 = createSprite(1830, 700, 140, 20);
  block7 = createSprite(2050, 660, 120, 20);
  block8 = createSprite(2275, 610, 140, 20);
  
  block11 = createSprite(2540, 620, 180, 20);
}   

function draw() {
  background("black"); 
  Engine.update(engine);




   if(dot16.y<737){
     dot16.velocityY=2;
     block4 = createSprite(1440, 700, 90, 20);
     block6 = createSprite(1830, 700, 140, 20);
     block8 = createSprite(2275, 610, 140, 20);
   }
   if(dot16.y>925){
     dot16.velocityY=-2;
     block4.destroy();
     block6.destroy();
     block8.destroy();
   }
   if(dot17.y<737){
     dot17.velocityY=2;
     block5.destroy();
     block7.destroy();
   }
   if(dot17.y>925){
     dot17.velocityY=-2;
     block5 = createSprite(1610, 640, 100, 20);
     block7 = createSprite(2050, 660, 120, 20);
   }
  
   

  player.velocityY = player.velocityY + 0.8

  if(keyDown("left")){
    player.addAnimation("idle",playerRunning2);
    //player.velocityX=-4;
    player.x = player.x-3.5;
    i=false;
  }
  if(keyWentUp("left")){
    player.addAnimation("idle",playerStanding2);
    //player.velocityX=0;
    
  }
  if(keyDown("right")){
    player.addAnimation("idle",playerRunning);
    //player.velocityX=4;
    player.x = player.x+3.5;
    i=true;
  }
  if(keyWentUp("right")){
    player.addAnimation("idle",playerStanding);
    //player.velocityX=0;
    
  }
  if(i===true){
    if(keyDown("space") && h==false && player.y>145 && (player.collide(ground) || player.collide(restGround) || player.collide(lift3) || player.collide(lift4) || player.collide(lift5) || player.collide(block1) || player.collide(block2) || player.collide(block3) || player.collide(block4) || player.collide(block5) || player.collide(block6) || player.collide(block7) || player.collide(block8) || player.collide(ground2) || player.collide(lift1) || player.collide(lift2) || player.collide(box1))) {
      player.velocityY = -12;
      player.addAnimation("idle",playerJumping);
      h=true
    }
    if(player.collide(ground) && h==true || player.collide(restGround) || player.collide(lift3) || player.collide(lift4) || player.collide(lift5) || player.collide(block1) || player.collide(block2) || player.collide(block3) || player.collide(block4) || player.collide(block5) || player.collide(block6) || player.collide(block7) || player.collide(block8) || player.collide(ground2) || player.collide(lift1) || player.collide(lift2) || player.collide(box1)){
      player.addAnimation("idle",playerStanding);
      h=false;
     }
    }
  
    if(i===false){
    if(keyDown("space") && g==false  && player.y>145 && (player.collide(ground) || player.collide(restGround) || player.collide(lift3) || player.collide(lift4) || player.collide(lift5) || player.collide(block1) || player.collide(block2) || player.collide(block3) || player.collide(block4) || player.collide(block5) || player.collide(block6) || player.collide(block7) || player.collide(block8) || player.collide(ground2) || player.collide(lift1) || player.collide(lift2) || player.collide(box1))) {
      player.velocityY = -12;
      player.addAnimation("idle",playerJumping2);
      g=true;
     }
     if(player.collide(ground) && g==true || player.collide(restGround) || player.collide(lift3) || player.collide(lift4) || player.collide(lift5) || player.collide(block1) || player.collide(block2) || player.collide(block3) || player.collide(block4) || player.collide(block5) || player.collide(block6) || player.collide(block7) || player.collide(block8) || player.collide(ground2) || player.collide(lift1) || player.collide(lift2) || player.collide(box1)){
      player.addAnimation("idle",playerStanding2);
      g=false;
     }
    }



if(gameState==LEVEL1){
  //1.35
  camera.zoom=1.35;
}

  level1();


  
  
  text(mouseX+","+mouseY,mouseX,mouseY);
  drawSprites();
}

function level1(){

  if(player.isTouching(ladder1) && c==true){
    player.x=1300
  }
   if(player.isTouching(ground2)){
     c=false;
     f=true;
   }
  
  camera.position.x=player.x+280;
  if(gameState==LEVEL2){

    camera.zoom=1.1;
  }

 if(player.isTouching(ladder1) && f==true){
 camera.position.y=820;
 //camera.position.x=1940;
 gameState=LEVEL2;
 //1300
 player.x=1300;
 player.y=560;
 }

 if(player.y==560){
   f=false;
 }



 if(player.isTouching(checkPoint1)){
   d=false;
 }
 

 if(player.isTouching(lava) && d==true && j==true){
  player.x=1360;
  player.y=560;
  c=true;
 }
 if(player.isTouching(lava) && d==false && j==true){
  player.x=checkPoint1.x;
  player.y=1000;
 }
 if(player.isTouching(checkPoint2)){
  j=false;
}

 if(player.isTouching(lava) && d==false && j==false){
  player.x=lift5.x;
  player.y=lift5.y-100;
 }


 if(lift1.isTouching(dot1)){
    lift1.velocityY=1;
 }
 if(lift1.isTouching(dot2)){
   lift1.velocityY=-1;
 }
 if(lift2.isTouching(dot3)){
  lift2.velocityY=1;
 }
 if(lift2.isTouching(dot4)){
 lift2.velocityY=-1;
 }


 if(dot5.y>200){
   dot5.y=100;
 }
 if(dot5.y<100){
   dot5.y=200;
 }

  block2.bounceOff(dot6);
  block2.bounceOff(dot7);

  lift3.bounceOff(dot10);
  lift3.bounceOff(dot11);

  lift5.bounceOff(dot15);
  lift5.bounceOff(dot14);

  if(lift4.isTouching(dot12)){
     lift4.velocityX=0;
     dot18.velocityY=-1;
  }
  if(lift4.isTouching(dot13)){
    lift4.velocityX=0;
    dot19.velocityY=-1;
 }
  if(dot18.y<750){
    lift4.velocityX=-3;
    dot18.y=900;
    dot18.velocityY=0;
  }
   if(dot19.y<750){
     lift4.velocityX=3;
     dot19.y=900;
     dot19.velocityY=0;
   }


  

   //dot14.debug=true;

  block3.bounceOff(dot8);
  block3.bounceOff(dot9);

 if(player.isTouching(button1)){
   door1.destroy();
 }

 player.depth=button1.depth=button2.depth;
 player.depth=player.depth+1;
 if(player.isTouching(button2)){
  door2.destroy();
 }
  if(a==true){
    laser1.y=laser1.y+0.5;
    laser1.height=laser1.height+1
    laser2.y=laser2.y+0.5;
    laser2.height=laser2.height+1
    laser3.y=laser3.y+0.5;
    laser3.height=laser3.height+1
    laser4.y=laser4.y+0.5;
    laser4.height=laser4.height+1
    laser5.y=laser5.y+0.5;
    laser5.height=laser5.height+1
    laser6.y=laser6.y+0.5;
    laser6.height=laser6.height+1
    laser7.y=laser7.y+0.5;
    laser7.height=laser7.height+1
    laser8.y=laser8.y+0.5;
    laser8.height=laser8.height+1
    laser9.y=laser9.y+0.5;
    laser9.height=laser9.height+1
    laser10.y=laser10.y+0.5;
    laser10.height=laser10.height+1
    laser11.y=laser11.y+0.5;
    laser11.height=laser11.height+1
    laser12.y=laser12.y+0.5;
    laser12.height=laser12.height+1

  }if(laser1.height==200){
    a=false;
    dot5.velocityY=0;
    dot5.velocityY=-1;
    b=false;
  }

  if(b==false){
    laser1.y=laser1.y-0.5;
    laser1.height=laser1.height-1
    laser2.y=laser2.y-0.5;
    laser2.height=laser2.height-1
    laser3.y=laser3.y-0.5;
    laser3.height=laser3.height-1
    laser4.y=laser4.y-0.5;
    laser4.height=laser4.height-1
    laser5.y=laser5.y-0.5;
    laser5.height=laser5.height-1
    laser6.y=laser6.y-0.5;
    laser6.height=laser6.height-1
    laser7.y=laser7.y-0.5;
    laser7.height=laser7.height-1
    laser8.y=laser8.y-0.5;
    laser8.height=laser8.height-1
    laser9.y=laser9.y-0.5;
    laser9.height=laser9.height-1
    laser10.y=laser10.y-0.5;
    laser10.height=laser10.height-1
    laser11.y=laser11.y-0.5;
    laser11.height=laser11.height-1
    laser12.y=laser12.y-0.5;
    laser12.height=laser12.height-1

  }if(laser1.height==1){
    b=true;
    a=true;
    dot5.velocityY=1;
  }

 player.collide(ground);
 player.collide(door2);
 player.collide(line2);
 player.collide(line4);
 player.collide(line5);
 player.collide(upperGround);
 player.collide(door1);
 player.collide(lift1);
 player.collide(line1);
 player.collide(line3);
 player.collide(line6);
 player.collide(line7);
 player.collide(line8);
 player.collide(lift2);
 player.collide(box1);
 player.collide(ground2)
 player.collide(block1);
 player.collide(block2);
 player.collide(block3);
 player.collide(block4);
 player.collide(block5);
 player.collide(block6);
 player.collide(block7);
 player.collide(block8);    
 player.collide(restGround);
 player.collide(lift3);
 player.collide(lift4);
 player.collide(lift5);
 player.collide(block11);
 if(player.isTouching(laser1)){
  player.x=80;
  player.y= 509;
 }
 if(player.isTouching(laser2)){
  player.x=80;
  player.y= 509;
 }
 if(player.isTouching(laser3)){
  player.x=80;
  player.y= 509;
 }
 if(player.isTouching(laser4)){
  player.x=80;
  player.y= 509;
 }
 if(player.isTouching(laser5)){
  player.x=80;
  player.y= 509;
 }
 if(player.isTouching(laser6)){
  player.x=80;
  player.y= 509;
 }
 if(player.isTouching(laser7)){
  player.x=80;
  player.y= 509;
 }
 if(player.isTouching(laser8)){
  player.x=80;
  player.y= 509;
 }
 if(player.isTouching(laser9)){
  player.x=80;
  player.y= 509;
 }
 if(player.isTouching(laser10)){
  player.x=80;
  player.y= 509;
 }
 if(player.isTouching(laser11)){
  player.x=80;
  player.y= 509;
 }
 if(player.isTouching(laser12)){
  player.x=80;
  player.y= 509;
 }
 
 if(player.isTouching(ironRod1)){
  player.x=330;
  player.y= 509;
 }
 if(player.isTouching(ironRod2)){
  player.x=330;
  player.y= 509;
 }
 if(player.isTouching(ironRod3)){
  player.x=330;
  player.y= 509;
 }
 if(player.isTouching(ironRod4)){
  player.x=330;
  player.y= 509;
 }
 if(player.isTouching(ironRod5)){
  player.x=330;
  player.y= 509;
 }
 if(player.isTouching(ironRod6)){
  player.x=330;
  player.y= 509;
 }
 if(player.isTouching(ironRod7)){
  player.x=330;
  player.y= 509;
 }
 if(player.isTouching(ironRod8)){
  player.x=330;
  player.y= 509;
 }
 if(player.isTouching(ironRod9)){
  player.x=330;
  player.y= 509;
 }
 if(player.isTouching(ironRod10)){
  player.x=330;
  player.y= 509;
 }
 if(player.isTouching(ironRod11)){
  player.x=330;
  player.y= 509;
 }
 if(player.isTouching(ironRod12)){
  player.x=330;
  player.y= 509;
 }
 
 
 
}