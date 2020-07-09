var database;
var form;
var userCount=0;
var user;
var gameState=0;
var timetable;
var homepage;
function setup() {
  createCanvas(800,400);
  database=firebase.database();

  game= new Game();

  game.start();
}

function draw() {
    clear();
    
   // if(gameState===1){
      game.signup();
   // }

 // if(gameState=2){
    game.home();
 // }
}