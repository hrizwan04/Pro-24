const Body=Matter.Body 
const World=Matter.World
const Bodies= Matter.Bodies
const Engine= Matter.Engine
var engine,world
var ground,paper,leftbody,base,rightbody

function setup(){
	createCanvas(800,400)
	engine=Engine.create()
	world=engine.world
	ground=new Ground(400,380,800,20)
	paper=new Paper(100,350,10)
	leftbody=new Dustbin(700,340,10,50)
	base=new Dustbin(730,365,70,10)
	rightbody=new Dustbin(760,340,10,50)
}

function draw(){
	background("white")
	Engine.update(engine)
	ground.Display()
	paper.Display()
	leftbody.Display()
	base.Display()
	rightbody.Display()
}

function keyPressed(){
	if (keyCode == UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:16,y:-16})
	}
}