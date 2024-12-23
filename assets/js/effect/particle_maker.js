

const SHAPE = Object.freeze({
  CIRCLE: 2,
  SQUARE: 1,
  LINE_HORIZ: 6,
  LINE_VERT: 3,
  IMG:5
});

const BEHAVIOR = Object.freeze({
  MOVE: 1,
  FALL:2,
  FALLSTATIC:22
});

class Particle {

  constructor(size,color,img_src,velocity,force,x,y,type,ctx,behavior,canvas,animate,id){
    this.x = Math.random() * x;
    this.y = y;
    this.size = Math.random() * size +2;
    this.color = color;
    this.img_src = this.img_src;
    this.velocity = velocity;
    this.force = force;
    this.type = type;
    this.behavior = behavior;
    this.ctx = ctx;
    this.canvas = canvas;
    this.dy = -1;
    this.dx = 1;
    this.id =id;
    this.animate = animate;


  }

  decide_shape = () =>{

    var ctx = this.ctx;

    this.ctx.beginPath();

    if(this.img_src != null && this.img_src.length > 0){
        var image = new Image(this.img_src)
        this.ctx.draw_image(image,this.x,this.y);
    }
    else if(this.type == SHAPE.CIRCLE){
        this.ctx.arc(this.x,this.y,this.size,0,Math.PI * 2);
        this.ctx.fill();
    }
    else if(this.type == SHAPE.SQUARE){
        this.ctx.rect(this.size,this.size, this.x,this.y);
        this.ctx.stroke();
    }
    else if(this.type == SHAPE.LINE_HORIZ){
      this.ctx.beginPath();
      this.ctx.moveTo(this.x, this.y);
      this.ctx.lineTo(this.x + this.length, this.y);
      this.ctx.strokeStyle = this.color;
      this.ctx.lineWidth = 1;
      this.ctx.stroke();
    }
    else if(this.type == SHAPE.LINE_VERT){
      this.ctx.beginPath();
      this.ctx.moveTo(this.x, this.y);
      this.ctx.lineTo(this.x, this.y + this.length);
      this.ctx.strokeStyle = this.color;
      this.ctx.lineWidth = 1;
      this.ctx.stroke();
      console.log(this);
    }
    else{
      this.ctx.arc(this.x,this.y,this.size,0,Math.PI * 2);
      this.ctx.fill();
    }

  }

  decide_behavior(){

   if(this.behavior == BEHAVIOR.FALLSTATIC){
      this.fallStatic();
    }else{
      this.move();
    }

  }

  fallStatic() {

    this.y += this.velocity.y;
    if (this.y > this.canvas.height) {
        this.y = Math.random() * -this.canvas.height;
        this.x = Math.random() * this.canvas.width;
    }

  }

  move(){

    this.x +=  Math.abs( this.velocity.x) *  Math.random() * 2 *this.dx;
    this.y += Math.abs( this.velocity.y) * this.dy;

    var s = false

    if(s){

      if(this.y > this.canvas.height || this.y <= 0){
        this.dy *= -1;
      }

      if(this.x > this.canvas.width || this.x <= 0){
        this.dx *= -1;
      }

    }

  }

  draw(){

    this.ctx.fillStyle=this.color;
    this.ctx.strokeStyle=this.color;

    this.decide_shape();

  }

  animate(){
    this.animate();
  }

  update(){
    this.draw()
    this.decide_behavior();
  }

}
