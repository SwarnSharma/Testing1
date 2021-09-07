class Brick {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 125, 45, options);
      this.width = 120;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      var angle = this.body.angle;
      var brickpos=this.body.position;	
      push();
      translate(brickpos.x, brickpos.y);
      rotate(angle);
      strokeWeight(6);
      stroke('brown')
      fill('red')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };