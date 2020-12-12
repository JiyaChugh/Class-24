const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1,box2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
 
    ground=new Ground(600,height-20,1200,20);
   box1=new Box(720,320,70,70);
   box2=new Box(900,320,70,70);
pig1=new Pig(810,350);
log1=new Log(810,280,260,PI/2);
box3=new Box(720,240,70,70);
   box4=new Box(900,240,70,70);
pig2=new Pig(810,220);
log2=new Log(810,180,260,PI/2);

box5=new Box(810,160,70,70);
log3=new Log(760,120,130,PI/7);
log4=new Log(870,120,130,-PI/7);
bird= new Bird(100,100);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
   box1.display();
   box2.display();
   pig1.display();
   log1.display();
   box3.display();
   box4.display();
   pig2.display();
   log2.display();
   box5.display();
   log3.display();
   log4.display();
   bird.display();
}