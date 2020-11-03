var fr,mr;

function setup() {
  createCanvas(1200,800);
  fr=createSprite(200, 200, 50, 80);
  mr=createSprite(400, 200, 80, 30);
  fr.shapeColor="green";
  mr.shapeColor="green";
  fr.debug=true;
  mr.debug=true;

}

function draw() {
  background(0);  
  mr.x=World.mouseX
  mr.y=World.mouseY
  
  console.log(fr.x);
  console.log(mr.x);

  console.log(fr.width/2);
  console.log(mr.width/2);

  if(mr.x-fr.x<fr.width/2+mr.width/2 &&fr.x-mr.x<fr.width/2+mr.width/2 &&mr.y-fr.y<mr.height/2+mr.height/2 &&fr.y-mr.y<fr.height/2+mr.height/2){
    mr.shapeColor="red";
    fr.shapeColor="red";
  

  }
  else{
    fr.shapeColor="green";
    mr.shapeColor="green";
  }



  drawSprites();
}