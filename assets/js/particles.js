var canvas = document.querySelector("#canvas--radar");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var colors = ["#fcc90d","#dc2c1d"];
var c = canvas.getContext("2d");
var count = 100;
var particles = [];
var gravity = .01;
var friction = .999;
var speed = 3;

class Particle{

  constructor(x,y,velocity,color){
      this.x = x;
      // this.color = `hsl(${Math.floor(Math.random() * 360)},50%,50%)`;
      this.y = y;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.alpha = 1;
      this.radius = (Math.floor(Math.random() * 3)) + 1;
      this.velocity = velocity;
  }

  draw(){

    c.save()

    this.globalAlpha = this.alpha;
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false)
    c.fillStyle = this.color;
    c.strokeStyle = this.color;
    c.stroke();
    c.fill();
    c.closePath();
    c.restore();

  }

  update(){

    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if(this.radius > 0){
      this.radius -= .002;
    }
    else{
      this.radius = 0;
    }

    this.draw();

  }

}


function animation(){

  requestAnimationFrame(animation);

  c.fillStyle = "#dc2c1d";
  c.fillRect(0,0,canvas.width,canvas.height);

  for(var i =0; i < particles.length;i++){

    if(particles[i].alpha > 0){
      particles[i].update();
    }
    else{
      particles.splice(i,1);
    }

}
