const SHAPE = Object.freeze({
  CIRCLE: 2,
  SQUARE: 1,
  LINE_HORIZ: 6,
  LINE_VERT: 3,
  IMG:5,
  SPHERE:22
});

const BEHAVIOR = Object.freeze({
  MOVE: 1,
  FALL:2,
  MOVEANDCOLLIDE:33,
  COLLIDE:3,
  FALLSTATIC:22,

});

class Particle {

  constructor(size,color,img_src,velocity,force,x,y,type,ctx,behavior,canvas,animate,id,particles){
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
    this.startX = x;
    this.exploded = false;
    this.startY = y;
    this.particles = particles ? particles : [];
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
    else if (this.type == SHAPE.SPHERE){

      const gradient = ctx.createRadialGradient(this.x, this.y, this.size * 0.2, this.x, this.y, this.size);

      gradient.addColorStop(0, "#ffffff");
      gradient.addColorStop(0.1, this.color);
      gradient.addColorStop(1, "#000000");

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

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
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x, this.y + this.size);
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 1;
          ctx.stroke();
    }
    else{
      this.ctx.arc(this.x,this.y,this.size,0,Math.PI * 2);
      this.ctx.fill();
    }

  }

  decide_behavior(){

   if(this.behavior == BEHAVIOR.FALLSTATIC){
      this.fallStatic();
    }
    else{
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

  explode() {
      if(this.exploded){
        return;
      }
      this.exploded = true;
      for (let i = 0; i < 10; i++) {

          const angle = Math.random() * Math.PI * 2;
          const size = this.size / 2;
          const v = {
            x:Math.cos(angle) * this.velocity.x,
            y:Math.sin(angle) * this.velocity.y
          }

          this.particles.push(

            new Particle(
              size,
              this.color,
              null,
              v,
              1,
              this.x,
              this.y,
              this.type,
              this.ctx,
              BEHAVIOR.COLLIDE,
              this.canvas,
              this.animate,
              this.id,
              this.particles
            ));



        }

        this.particles.splice(this.particles.indexOf(this), 1);

  }

  move(){

    this.x +=  Math.abs( this.velocity.x) *  Math.random() * this.dx;
    this.y += Math.abs( this.velocity.y) * this.dy;

    if(this.y > this.canvas.height || this.y <= 0){
      if(BEHAVIOR.MOVEANDCOLLIDE){
        this.explode();
      }else{
        this.dy *= -1;
      }
    }

    if(this.x > this.canvas.width || this.x <= 0){

      if(BEHAVIOR.MOVEANDCOLLIDE){
        this.explode();
      }else{
        this.dx *= -1;
      }

    }

  }

  draw(){
    this.ctx.fillStyle= this.color;
    this.ctx.strokeStyle = this.color;

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
