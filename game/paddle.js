function Paddle() {
  Entity.call(this);

  this.width = 20;
  this.height = 100;
  this.score = 0;

  this.y = 0;
}

Paddle.prototype =    Object.create(Entity.prototype);
Paddle.prototype.constructor = Paddle;

Paddle.prototype.update = function () {
  Entity.prototype.update.apply(this, arguments);
  
  // x will always stay below or equal to 0
  this.x = Math.min(Math.max(this.x, 0), game.width - this.width);
}

Paddle.prototype.moveTo = function (player) {
  this.x = player.x;
  this.y = player.y;
  this.xVelocity = player.xVelocity;
  this.yVelocity = player.yVelocity;
};


function Player() {
  Paddle.call(this);
  this.width = 100;
  this.height = 20;
  this.x = 20;
  this.y = game.height - 20;
  this.name = "player";
  
  var player = document.createElement("div");
  player.style.position = "absolute";
  player.style.width = this.width + 'px';
  player.style.height = this.height + 'px';
  player.style.left = this.x + 'px';
  player.style.top = this.y + 'px';
  player.setAttribute("id", "player");
  this.player = player;
  
  game.canvas.append(player);
}

Player.prototype = Object.create(Paddle.prototype);
Player.prototype.constructor = Player;

Player.prototype.draw = function () {
  var player = this.player;
  player.style.left = this.x +'px';
  player.style.top = this.y +'px';
}


Player.prototype.update = function () {
  var self = this;
  var speed = 10;

  if (game.keyPressed.left) {
    this.xVelocity = -speed;
  } else if (game.keyPressed.right) {
    this.xVelocity = speed;
  } else {
    this.xVelocity = 0; // stop moving if no keys pressed
  }

  Paddle.prototype.update.apply(this, arguments);
}

