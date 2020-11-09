
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var bob1
var bob2
var bob3
var bob4
var bob5
var rope1,rope2,rope3,rope4,rope5
var roof1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
roof1=new roof(width/2,height/4,300,20)
bob1=new Bob(200,100,20,20)
bob2=new Bob(300,200,20,20)
bob3=new Bob(400,300,20,20)
bob4=new Bob(500,400,20,20)
bob5=new Bob(600,500,20,20)
ropr1=new rope(200,70,20,20)
rope2=new rope(300,180,20,20)
rope3=new rope(400,280,20,20)
rope4=new rope(500,380,20,20)
rope5=new rope(600,450,20,20)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites()
  roof1.display()
bob1.display()
bob2.display()
bob3.display()
bob4.display()
bob5.display()
rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()

}
