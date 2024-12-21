
function init(x,y){

  for(var i =0; i < count; i++){

    var random_color = colors[Math.floor(0,colors.length)];

    var velocity = {
      x: Math.cos((Math.PI * 2 / count) * i) * speed,
      y:Math.sin((Math.PI * 2 / count) * i) * speed
    }

    var new_particle = new Particle(x,y,velocity,random_color);

    particles.push(new_particle)

  }

}

setInterval(()=>{

  var mouse_pos = {
    x:1300,
    y:500
  }

  for(var i = 0; i < 2;i++){
    init(mouse_pos.x,mouse_pos.y);
  }
  animation();

},2000)
