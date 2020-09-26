var canvas, backgroundImage;
var Gamestate = 0;
var PlayerCount;
var database;
var form, player, game;

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game ();
  game.setState();
  game.start();
    
}

function draw(){
 
}
