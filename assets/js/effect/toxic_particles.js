function RiseInPollutionEffect(){


  var limit = 5;
  var canvas = document.querySelector("#toxic_canvas");
  var ctx = canvas.getContext("2d");
  var particles = [];

  function init(){

    for(var i =0; i < limit; i++){

      var velocity = {x:Math.random() * - 1 + 1,y:Math.random() * 2 + 1};

      var type = SHAPE.CIRCLE;
      var behavior = BEHAVIOR.RISE;

      var x = Math.random() * canvas.width;
      var y = canvas.height;

      var particle_ = new Particle(1,"rgba(0,0,0,.5)",null,velocity,0,x,y,type,ctx,behavior,canvas,animate,i);

      particles.push(particle_);

    }

  }

  function animate(){
    tx.clearRect(0,0,canvas.width,canvas.height)

    requestAnimationFrame(animate);

    for(var i =0; i < particles.length; i++){
      particles[i].update();
    }


  }

  setInterval(()=>{
    init();
  },1000)
  animate();

}


// RiseInPollutionEffect();
