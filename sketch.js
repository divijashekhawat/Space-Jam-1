var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var players;
var form, player, game;

var players, player1,player2,player3,player4, player2opp,player3opp,player5,player5opp,player1opp

var ball, ballInfo;


function preload(){
  backgroundpg1 = loadImage("../images/basketball court 1.jpg");

}

function setup(){
  canvas = createCanvas(displayWidth-20, 600);
  backSprite=createSprite(650,300,10,10)
  backSprite.addImage(backgroundpg1)
  backSprite.scale=1.60
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

  
}
