const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine); 
     t1=createSprite(300,370,20,20);
     t2=createSprite(278,370,20,20);
     t3=createSprite(256,370,20,20);
     t4=createSprite(234,370,20,20);
     t5=createSprite(322,370,20,20);
     t6=createSprite(311,348,20,20);
     t7=createSprite(289,348,20,20);
     t8=createSprite(267,348,20,20);
     t9=createSprite(245,348,20,20);
     t10=createSprite(256,326,20,20);
     t11=createSprite(278,326,20,20);
     t12=createSprite(300,326,20,20);
     t13=createSprite(280,304,20,20);
    t14=createSprite(248,180,20,20);
    t15=createSprite(270,180,20,20);
    t16=createSprite(292,180,20,20);
    t17=createSprite(256,158,20,20);
   t18=createSprite(278,158,20,20);
   t19=createSprite(267,136,20,20);
   t20=createSprite(110,230,25,25);
     var ground_options ={
        isStatic: true
    }


        
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    ground1=Bodies.rectangle(270,200,90,20,ground_options);
    World.add(world,ground1);
    console.log(ground);


}



function draw(){
    background(0);
    rectMode(CENTER);
    
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(ground1.position.x,ground1.position.y,90,20);
    
    
    drawSprites();
}

