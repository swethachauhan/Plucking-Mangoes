
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boyImage,ground,treeImage;
function preload()
{
	boyImage=loadImage("images/boy.png");
	treeImage=loadImage("images/tree.png");
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,height-10,800,20);
	stone=new Stone(50,300,20);
	mango1=new Mango(500,150);
	mango2=new Mango(500,200);	
	mango3=new Mango(455,200);
	mango4=new Mango(550,280);
	mango5=new Mango(550,150);
	mango6=new Mango(555,210);
	mango7=new Mango(445,290);
	mango8=new Mango(600,295);
	mango9=new Mango(505,300);
	mango10=new Mango(615,225);

	elasticObj=new Launcher(stone.body,{x:80,y:450});

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  image(boyImage,60,340,120,350);
  image(treeImage,400,80,300,550);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
	
  stone.display();
  elasticObj.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  stroke("white");
  
  
  drawSprites();
 
}
function detectCollision(stone,mango){
	var dis=dist(stone.body.position.x,stone.body.position.y,mango.body.position.x,mango.body.position.y);
	if(dis 	<=stone.r+mango.r){
		Body.setStatic(mango.body,false);
	}

}

function mouseDragged(){
	Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	elasticObj.fly();
}



