


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Bodies;



function setup() {
  createCanvas(400,400);
//crear engine
  engine = Engine.create();
  world = engine.world
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//crear un fondo
ground = Bodies.rectangle(200,400,400,1,ground_options);
World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  


  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);
  //escribir una función rectangle para mostrar el suelo.
  console.log(ground.position.y)


  
  
}

