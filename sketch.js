 const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Events;
 const Bodies = Matter.Bodies;
var particle;
var particles = [];
var plinkos = [];
var divisions = [];
var engine,world;
var divisionHeight=300;
var score =0;
var turn = 0;
var gameState = "play";
function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height,width,20);
  line = createSprite(400,500,800,5)
  
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text(" 500 ", 5, 550);
  text(" 500 ", 90, 550);
  text(" 500 ", 175, 550);
  text(" 500 ", 250, 550);
  text(" 100 ", 335, 550);
  text(" 100 ", 420, 550);
  text(" 100 ", 505, 550);
  text(" 200 ", 590, 550);
  text(" 200 ", 675, 550);
  text(" 200 ", 750, 550);
  Engine.update(engine);
  
  if(particle!= null){
    particle.display();
  
    if(particle.body.position.y>500){
    
      if(particle.body.position.x<251){
        score = score+500;
        particle = null;
        if(turn>=5){gameState = "end"}
      }
      else if(particle.body.position.x>251 && particle.body.position.x<506){
        score = score+100;
        particle = null;
        if(turn>=5){gameState = "end"}

      }
      else if(particle.body.position.x>506){
        score = score+200;
        particle = null;
        if(turn>=5){gameState = "end"}


      }
    }
    if (gameState ==="end"){
      textSize(25)
      text("Gameover",400,400)
      



    }






  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  /* if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   }*/
 
  for (var j = 0; j < plinkos.length; j++) {
   
     plinkos[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   drawSprites();
}
function mousePressed(){
if(gameState==="play"){
score++;
particle = new Particle(mouseX,10,10,10);
}


}