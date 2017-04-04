function Wall() {
  var self = this;
  
  Entity.call(this);
  
  this.bricks = [];

  init();
  
  function init() {
    for(var i = 0; i < 10; i++) {
      var b = new Brick();
      b.player.setAttribute("id", "brick_" + i);
      b.x += b.width * i;
      b.y = 0;
      
      self.bricks.push(b);
    }
  }
}

Wall.prototype =    Object.create(Entity.prototype);
Wall.prototype.constructor = Wall;


Wall.prototype.update = function () {
  
};

Wall.prototype.draw = function() {
  for(var i = 0; i< this.bricks.length; i++){
      var b = this.bricks[i];
      if (b.show) {
        b.draw();
      } else {
        b.hide();
      }
  }
};
