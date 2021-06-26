
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin,ball,ground;
var engine,world;
var bin1,bin2;
function setup() {
	createCanvas(800, 700);

bin = new Dustbin(500,600,20,100);
bin1= new Dustbin(700,600,20,100);
bin1= new Dustbin(600,600,200,20);
ball = new Paper(200,300);


	engine = Engine.create();
	world = engine.world;


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
}
  
function draw() {
 
  background(0);
  rectMode(CENTER);
 


//dustbin.display();
ball.display();


}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
		
	}
}


