if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    });
}

function Background() {
  this.score_player1 = document.getElementById("score_player1");
  this.score_player2 = document.getElementById("score_player2");
}

Background.prototype.draw = function (context) {
  
}

var canvas = document.getElementById("game"),
  game = new Game(canvas);

game.entities = [
    game.ball = new Ball(),
    game.player = new Player(),
    game.wall = new Wall(),
    new Background()
];

game.start();
canvas.focus();