var ball;
var database;
var Position;



function setup(){
database=firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
var ballPosition = database.ref('Ball/Position').on("value",readposition, showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
 
  
 database.ref('Ball/Position').set({
     'x':Position.x+x,
     'y':Position.y+y
 })
 
    //  ball.x = ball.x + x;
//    ball.y = ball.y + y;
}

function readposition(data){
Position = data.val()
ball.x = Position.x
ball.y = Position.y

}

function showerror(){

console.log("There was an error")

}
