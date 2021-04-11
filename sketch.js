var canvas;
var music;
var box1,box2,box3,box4;
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    box1 = createSprite(90,600,200,30);
    box1.shapeColor = "blue"
    box2 = createSprite(295,600,200,30);
    box2.shapeColor = "red"
    box3 = createSprite(500,600,200,30);
    box3.shapeColor = "orange"
    box4 = createSprite(710,600,200,30);
    box4.shapeColor = "green"

    ball = createSprite(random(20,750),100,30,30)
    ball.shapeColor = "black"
    ball.velocityX = 4;
    ball.velocityY = 4;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);
    

    if(box1.isTouching(ball)&&ball.bounceOff(box1)){
        ball.shapeColor = "blue"
        music.play();
    }
    if(box2.isTouching(ball)&&ball.bounceOff(box2)){
        ball.shapeColor = "red"
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop()
    }
    if(box3.isTouching(ball)&&ball.bounceOff(box3)){
        ball.shapeColor = "orange"
        music.play();
    }
    if(box4.isTouching(ball)&&ball.bounceOff(box4)){
        ball.shapeColor = "green"
        music.play();
    }
    drawSprites();
    //add condition to check if box touching surface and make it box
}
