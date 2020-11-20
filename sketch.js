var canvas, backgroundimg;

var gamestate=0;

var playercount,databse;

var form,game,player;

var allPlayers;

var carimg1,carimg2,carimg3,carimg4,track;

var car1, car2, car3, car4, cars;

function preload(){

    carimg1 = loadImage("imges/car1.png");
    carimg2 = loadImage("imges/car2.png");
    carimg3 = loadImage("imges/car3.png");
    carimg4 = loadImage("imges/car4.png");
    track = loadImage("imges/track1.png");

}

function setup(){
    console.log(displayWidth);
    canvas = createCanvas(displayWidth - 20,displayHeight - 30);
    database = firebase.database();
    game = new Game();
    game.getstate();
    game.start();
}

function draw(){

    if(playercount === 4){
        game.update(1);
    }
    if(gamestate === 1){
        clear();
        game.play();
    }
    if(gamestate===2){
        game.end();
    }

}