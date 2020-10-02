const engine = Matter.Engine
const world = Matter.World
const bodies = Matter.Bodies
var engine1, world1 ;
var ground1;
var ball;
var box1, box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;

function setup() {
  createCanvas(1200,400);
  engine1 = engine.create();
  world1 = engine1.world ;
box1 = new box(700, 320, 70, 70);  
box2 = new box(920, 320, 70, 70);
box3 = new box(700,240,70,70);
box4 = new box(920,240,70,70);
box5 = new box(810,160,70,70);
ground1 = new ground(600, 380, 1200, 20);
pig1 = new pig (810,350);
pig2 = new pig(810,220);
log1 = new log(810,260,300,15,PI);
log2 = new log(810,200,300,15,PI);
log3 = new log(760,120,20,150,PI/7);
log4 = new log(870,120,20,150,-PI/7);
bird1 = new bird(100,100);

}

function draw() {
  background("black"); 
  engine.update(engine1); 
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 ground1.display();
 pig1.display();
 pig2.display();
 log1.display();
 log2.display();
 log3.display();
 log4.display();
 bird1.display();
}