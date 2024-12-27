  function RainFall(){

    const canvas = document.getElementById('rain_canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = 500;

    const particles = [];
    const limit = 100;

    for (let i = 0; i < limit; i++) {

        const x = Math.random() * canvas.width;

        const y = Math.random() * canvas.height - canvas.height;

        const length = Math.random() * 20 + 10;

        const speed = Math.random() * 4 + 2;

        const color = 'rgba(173, 216, 230, 0.7)';
        particles.push(new Particle(length,color,null,{x:0,y:2},1,x,y,SHAPE.LINE_VERT, ctx, BEHAVIOR.FALLSTATIC, canvas, animate, "rain"+i ));

    }

    function animate() {
       ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
          console.log(particle)
          particle.update();
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

  }

  RainFall();
