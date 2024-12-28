function PollutionMaker(){

      const canvas = document.getElementById('emit_canvas');
      const ctx = canvas.getContext('2d');

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles = [];
      const numPollutes = 300;

      for (let i = 0; i < numPollutes; i++) {

          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height + 2;

          const size = Math.random() * .2 + .5;

          const speedX = Math.random() * 1 - 0.5;
          const speedY = Math.random() * 1 - 0.5;

          const color = `rgba(10,10,10, 0.1)`;

          particles.push(new Particle(size,color,null,{x:speedX,y:speedY},1,x, y, SHAPE.CIRCLE, ctx, BEHAVIOR.MOVE, animate, "pollute"+numPollutes));

        }

      function animate() {

          ctx.clearRect(0, 0, canvas.width, canvas.height);

          particles.forEach(particle => {
              particle.update();
              particle.draw();
          });

          requestAnimationFrame(animate);

      }

     animate();

}


PollutionMaker();
