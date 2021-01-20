var canva;
var gameState, contestantCount, database, quiz, question,contestant 
var game

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Quiz();
  game.getState();
  game.start()
}
  
  
  function draw(){
  }







