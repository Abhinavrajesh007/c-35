var ball
var database,position;

function setup(){
  database=firebase.database()
  createCanvas(500,500);
  ball=createSprite(250,250,10,10)
  ball.shapeColor=("red")

var loc=database.ref("ball/position");
loc.on("value",readop,showerr);
}

function draw(){
  background("white");
  
  
  if(keyDown(UP_ARROW)){
    writePosition(0,-1)
  }

  if(keyDown(DOWN_ARROW)){
    writePosition(0,1)
  }

  if(keyDown(LEFT_ARROW)){
    writePosition(-1,0)
  }

  if(keyDown(RIGHT_ARROW)){
    writePosition(1,0)
  }
  drawSprites()
}
function  writePosition(x,y){
  database.ref("ball/position").set({
    x:ball.x+x,
  y:ball.y+y,
  })
  
}
function readop(data){
  position=data.val()
  ball.x=position.x
  ball.y=position.y

}
function showerr(){
console.log("ERROR")

}