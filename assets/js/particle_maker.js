

const SHAPE = Object.freeze({
  CIRCLE: 2,
  SQUARE: 1,
  LINE_HORIZ: 6,
  LINE_VERT: 3,
  IMG:5
});

const BEHAVIOR = Object.freeze({
  RISE: 1,
});

class Effect {

  constructor(size,color,img_src,velocity,force,x,y,type,ctx,behavior,canvas,animate,id){
    this.x = Math.random() * x;
    this.y = y;
    this.size = Math.random() * size +2;
    this.color = color;
    this.img_src = this.img_src;
    this.velocity = velocity;
    this.force = force;
    this.type = type;
    this.ctx = ctx;
    this.canvas = canvas;
    this.dy = -1;
    this.dx = 1;
    this.id =id;
    this.animate = animate;
    console.log(canvas)

  }

  decide_shape = () =>{

    var ctx = this.ctx;

    this.ctx.beginPath();

    if(this.img_src != null && this.img_src.length > 0){
        var image = new Image(this.img_src)
        this.ctx.draw_image(image,this.x,this.y);
    }
    else if(this.type = SHAPE.CIRCLE){
        this.ctx.arc(this.x,this.y,this.size,0,Math.PI * 2);
        this.ctx.fill();
    }
    else if(this.type = SHAPE.SQUARE){
        this.ctx.rect(this.size,this.size, this.x,this.y);
        this.ctx.stroke();
    }
    else if(this.type = SHAPE.LINE_HORIZ){
        this.ctx.moveTo(this.x + this.size,this.y);
        this.ctx.stroke();
    }
    else if(this.type = SHAPE.LINE_VERT){
        this.ctx.moveTo(this.y + this.size,this.y);
        this.ctx.stroke();
    }
    else{
      this.ctx.arc(this.x,this.y,this.size,0,Math.PI * 2);
      this.ctx.fill();
    }

  }

  decide_behavior(){
    this.move();
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
    // this.ctx.fillStyle="rgba(0,0,0,.01)"
    // this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)

    this.draw();
    this.decide_behavior();

  }

}

function RiseInPollutionEffect(){
  // Rise of Pollution Effect

  var toxic = 5;
  var toxic_canvas = document.querySelector("#toxic_canvas");
  var tx = toxic_canvas.getContext("2d");
  var toxic_particles = [];

  function init(){

    for(var i =0; i < toxic; i++){

      var velocity = {x:Math.random() * - 1 + 1,y:Math.random() * 2 + 1};

      var type = SHAPE.CIRCLE;
      var behavior = BEHAVIOR.RISE;

      var x = Math.random() * toxic_canvas.width;
      var y = toxic_canvas.height;

      var toxic_particle_ = new Effect(1,"rgba(0,0,0,.5)",null,velocity,0,x,y,type,tx,behavior,toxic_canvas,animate,i);

      toxic_particles.push(toxic_particle_);

    }

  }

  function animate(){
    tx.clearRect(0,0,toxic_canvas.width,toxic_canvas.height)

    requestAnimationFrame(animate);

    for(var i =0; i < toxic_particles.length; i++){
      toxic_particles[i].update();
    }


  }

  setInterval(()=>{
    init();
  },1000)
  animate();

}


RiseInPollutionEffect();
