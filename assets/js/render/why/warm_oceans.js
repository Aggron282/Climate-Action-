var fact_counter = 0;


function RenderWarmOceans(){

  var container = document.querySelector(".warm_ocean_section");

  container.innerHTML = `
      <div class="grid-container grid-container--warm">

      <div class="bubble-container"></div>

             <div class="text_slideshow_column">
          <div class="text-render--warm">

          </div>
          <div class="toggle-container toggle-container--warm_ocean">


            <div class="toggle_button toggle_button--back" data-toggle="-1">

                <p>Previous </p>
                <div class="underline"></div>
            </div>
            <div class="toggle_button toggle_button--next" data-toggle="1">
              <p>Next </p>
              <div class="underline"></div>
            </div>

          </div>

        </div>
        <div class="image_slideshow_column">
            <div class="img-render--warm">
            </div>
            <div class="lava lava--up parallax"></div>
        </div>

      </div>

      <div class="waves_container">

          <svg data-speed="60" id="wave" class="parallax--wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 430" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(34, 40, 69, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,301L30,279.5C60,258,120,215,180,172C240,129,300,86,360,107.5C420,129,480,215,540,229.3C600,244,660,186,720,164.8C780,143,840,158,900,172C960,186,1020,201,1080,172C1140,143,1200,72,1260,35.8C1320,0,1380,0,1440,50.2C1500,100,1560,201,1620,229.3C1680,258,1740,215,1800,215C1860,215,1920,258,1980,229.3C2040,201,2100,100,2160,57.3C2220,14,2280,29,2340,64.5C2400,100,2460,158,2520,186.3C2580,215,2640,215,2700,243.7C2760,272,2820,330,2880,315.3C2940,301,3000,215,3060,150.5C3120,86,3180,43,3240,28.7C3300,14,3360,29,3420,71.7C3480,115,3540,186,3600,179.2C3660,172,3720,86,3780,93.2C3840,100,3900,201,3960,236.5C4020,272,4080,244,4140,193.5C4200,143,4260,72,4290,35.8L4320,0L4320,430L4290,430C4260,430,4200,430,4140,430C4080,430,4020,430,3960,430C3900,430,3840,430,3780,430C3720,430,3660,430,3600,430C3540,430,3480,430,3420,430C3360,430,3300,430,3240,430C3180,430,3120,430,3060,430C3000,430,2940,430,2880,430C2820,430,2760,430,2700,430C2640,430,2580,430,2520,430C2460,430,2400,430,2340,430C2280,430,2220,430,2160,430C2100,430,2040,430,1980,430C1920,430,1860,430,1800,430C1740,430,1680,430,1620,430C1560,430,1500,430,1440,430C1380,430,1320,430,1260,430C1200,430,1140,430,1080,430C1020,430,960,430,900,430C840,430,780,430,720,430C660,430,600,430,540,430C480,430,420,430,360,430C300,430,240,430,180,430C120,430,60,430,30,430L0,430Z"></path><defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(34, 40, 69, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 50px); opacity:0.9" fill="url(#sw-gradient-1)" d="M0,172L30,150.5C60,129,120,86,180,100.3C240,115,300,186,360,229.3C420,272,480,287,540,301C600,315,660,330,720,301C780,272,840,201,900,186.3C960,172,1020,215,1080,222.2C1140,229,1200,201,1260,157.7C1320,115,1380,57,1440,78.8C1500,100,1560,201,1620,258C1680,315,1740,330,1800,308.2C1860,287,1920,229,1980,229.3C2040,229,2100,287,2160,272.3C2220,258,2280,172,2340,136.2C2400,100,2460,115,2520,136.2C2580,158,2640,186,2700,229.3C2760,272,2820,330,2880,336.8C2940,344,3000,301,3060,301C3120,301,3180,344,3240,336.8C3300,330,3360,272,3420,215C3480,158,3540,100,3600,114.7C3660,129,3720,215,3780,272.3C3840,330,3900,358,3960,372.7C4020,387,4080,387,4140,351.2C4200,315,4260,244,4290,207.8L4320,172L4320,430L4290,430C4260,430,4200,430,4140,430C4080,430,4020,430,3960,430C3900,430,3840,430,3780,430C3720,430,3660,430,3600,430C3540,430,3480,430,3420,430C3360,430,3300,430,3240,430C3180,430,3120,430,3060,430C3000,430,2940,430,2880,430C2820,430,2760,430,2700,430C2640,430,2580,430,2520,430C2460,430,2400,430,2340,430C2280,430,2220,430,2160,430C2100,430,2040,430,1980,430C1920,430,1860,430,1800,430C1740,430,1680,430,1620,430C1560,430,1500,430,1440,430C1380,430,1320,430,1260,430C1200,430,1140,430,1080,430C1020,430,960,430,900,430C840,430,780,430,720,430C660,430,600,430,540,430C480,430,420,430,360,430C300,430,240,430,180,430C120,430,60,430,30,430L0,430Z"></path></svg>

          <svg data-speed="60" id="wave" class="parallax--wave parallax--wave--top" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 430" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(34, 40, 69, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,301L30,279.5C60,258,120,215,180,172C240,129,300,86,360,107.5C420,129,480,215,540,229.3C600,244,660,186,720,164.8C780,143,840,158,900,172C960,186,1020,201,1080,172C1140,143,1200,72,1260,35.8C1320,0,1380,0,1440,50.2C1500,100,1560,201,1620,229.3C1680,258,1740,215,1800,215C1860,215,1920,258,1980,229.3C2040,201,2100,100,2160,57.3C2220,14,2280,29,2340,64.5C2400,100,2460,158,2520,186.3C2580,215,2640,215,2700,243.7C2760,272,2820,330,2880,315.3C2940,301,3000,215,3060,150.5C3120,86,3180,43,3240,28.7C3300,14,3360,29,3420,71.7C3480,115,3540,186,3600,179.2C3660,172,3720,86,3780,93.2C3840,100,3900,201,3960,236.5C4020,272,4080,244,4140,193.5C4200,143,4260,72,4290,35.8L4320,0L4320,430L4290,430C4260,430,4200,430,4140,430C4080,430,4020,430,3960,430C3900,430,3840,430,3780,430C3720,430,3660,430,3600,430C3540,430,3480,430,3420,430C3360,430,3300,430,3240,430C3180,430,3120,430,3060,430C3000,430,2940,430,2880,430C2820,430,2760,430,2700,430C2640,430,2580,430,2520,430C2460,430,2400,430,2340,430C2280,430,2220,430,2160,430C2100,430,2040,430,1980,430C1920,430,1860,430,1800,430C1740,430,1680,430,1620,430C1560,430,1500,430,1440,430C1380,430,1320,430,1260,430C1200,430,1140,430,1080,430C1020,430,960,430,900,430C840,430,780,430,720,430C660,430,600,430,540,430C480,430,420,430,360,430C300,430,240,430,180,430C120,430,60,430,30,430L0,430Z"></path><defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(34, 40, 69, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 50px); opacity:0.9" fill="url(#sw-gradient-1)" d="M0,172L30,150.5C60,129,120,86,180,100.3C240,115,300,186,360,229.3C420,272,480,287,540,301C600,315,660,330,720,301C780,272,840,201,900,186.3C960,172,1020,215,1080,222.2C1140,229,1200,201,1260,157.7C1320,115,1380,57,1440,78.8C1500,100,1560,201,1620,258C1680,315,1740,330,1800,308.2C1860,287,1920,229,1980,229.3C2040,229,2100,287,2160,272.3C2220,258,2280,172,2340,136.2C2400,100,2460,115,2520,136.2C2580,158,2640,186,2700,229.3C2760,272,2820,330,2880,336.8C2940,344,3000,301,3060,301C3120,301,3180,344,3240,336.8C3300,330,3360,272,3420,215C3480,158,3540,100,3600,114.7C3660,129,3720,215,3780,272.3C3840,330,3900,358,3960,372.7C4020,387,4080,387,4140,351.2C4200,315,4260,244,4290,207.8L4320,172L4320,430L4290,430C4260,430,4200,430,4140,430C4080,430,4020,430,3960,430C3900,430,3840,430,3780,430C3720,430,3660,430,3600,430C3540,430,3480,430,3420,430C3360,430,3300,430,3240,430C3180,430,3120,430,3060,430C3000,430,2940,430,2880,430C2820,430,2760,430,2700,430C2640,430,2580,430,2520,430C2460,430,2400,430,2340,430C2280,430,2220,430,2160,430C2100,430,2040,430,1980,430C1920,430,1860,430,1800,430C1740,430,1680,430,1620,430C1560,430,1500,430,1440,430C1380,430,1320,430,1260,430C1200,430,1140,430,1080,430C1020,430,960,430,900,430C840,430,780,430,720,430C660,430,600,430,540,430C480,430,420,430,360,430C300,430,240,430,180,430C120,430,60,430,30,430L0,430Z"></path></svg>

      </div>


      <div class="warmer_container">
        <div class="text-container text-container-warm_ocean_deep">
            <p class="title"></p>
            <p class="description"></p>
        </div>

      </div>
  `

  Generate3DBubbles();
  GenerateOceanWarmingFacts();
  document.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    document.querySelectorAll(".parallax--wave").forEach(el => {
      const speed = parseFloat(el.dataset.speed);
      el.style.transform = `translateY(${scrollY / speed}px)`;
    });

    document.querySelectorAll(".parallax--wave--top").forEach(el => {
      const speed = parseFloat(el.dataset.speed);
      el.style.transform = `translateY(${scrollY / speed}px) rotateX(-180deg)`;
    });

  });

  var toggles = document.querySelectorAll(".toggle_button");

  for(var i =0; i < toggles.length; i++){

   toggles[i].addEventListener("click", (e) => {
     console.log(e)

     var toggle_data = e.target.dataset.toggle;
     toggle_data = parseFloat(toggle_data);
     ToggleFact(toggle_data)
   });

  }

}

function GenerateOceanWarmingFacts(){

  var container = document.querySelector(".text-render--warm");
  var config = [
    {
        title:"The Rising Tide of Heat",
        subtitle:"Global Warming has Consequences",
        class_:"up",
        description:`
        Oceans absorb 90% of global warming's heat. The extra heat is enough to boil 1.3 billion kettles every second.
        Marine life is on the brink. Warmer waters threaten coral reefs, fisheries, and biodiversity.
        Storms are getting fiercer. Hotter oceans fuel stronger hurricanes and extreme weather.
       Sea levels are rising faster. Thermal expansion from warming waters adds to melting ice caps.
        `
    },
    {
      title:"Boiling Point: The Ocean's Silent Crisis",
      subtitle:"Hotter Seas, Bigger Risks",
      class_:"side",
      description:" The ocean is heating up fast. The past 20 years have seen the hottest ocean temperatures in recorded history. Marine migration is underway. Species are fleeing warming waters, disrupting ecosystems and fisheries."
    },

      {
        title:"The Heat Beneath the Waves",
        subtitle:"Warming Oceans, Changing Worlds",
        class_:"down",
        description:" 023 set another record. Oceans reached their highest temperatures ever, fueling global climate impacts. Life on the move. Warmer seas push fish and marine species out of traditional habitats, disrupting food chains.."
      },

  ];

  function ReturnFactHTML({title,subtitle,description}){
    var styles = ["up","down","left","right"];
    var random_counter = Math.floor(Math.random() * styles.length);
    return(
      `
      <div class="text-container text-container--warm_ocean transition--${styles[random_counter]}">
        <p class="title"> ${title}  </p>
        <p class="subtitle"> ${subtitle} <p>

        <p class="description">
          ${description}
         <p>
      </div>
      `
    )
  }

  var html = ReturnFactHTML(config[fact_counter]);

  container.innerHTML = html;


}


function ToggleFact(m){

  var counter_incr = m < 0 ? -1 : 1;

  fact_counter += counter_incr;

  if(fact_counter < 0){
    fact_counter = 2;
  }
  else if (fact_counter > 2){
    fact_counter = 0
  }

  GenerateOceanWarmingFacts();

}


function GenerateLavaLampParticles(){

  const canvas = document.getElementById('lavaLamp');
  const ctx = canvas.getContext('2d');
  const limit = 20;
  const colors = ['#ff4500', '#ffa500', '#ff6347', '#ff69b4'];
  const particles = [];
  const max_size = 50;
  const min_size = 50;

  const pos_x = 2;

  const min_vx = -.05;
  const min_vy = -.05;

  const max_vx = .02;
  const max_vy = 2;


  canvas.width = canvas.width;
  canvas.height = canvas.height

  function init() {

      for (let i = 0; i < limit; i++) {

          const radius = Math.random() * max_size + min_size;

          const x = Math.random() * (canvas.width - radius * pos_x) + radius;
          const y = 0;

          const dx = (Math.random() - min_vx) * max_vx;
          const dy = (Math.random() - min_vy) * max_vy;

          const color = colors[Math.floor(Math.random() * colors.length)];

          var velocity = {x:dx,y:dy};

          //(size,color,img_src,velocity,force,x,y,type,ctx,behavior,canvas,animate,id
          var new_particle = new Particle(radius, color, null, velocity,1, x, y, SHAPE.SPHERE, ctx , BEHAVIOR.MOVE, canvas, animate, `lava--${i}`)

          particles.push(new_particle);

      }

  }

  function animate() {

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
          particle.update();
          particle.draw();
      });

      requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      init();
  });

  init();

  animate();


}

function Generate3DBubbles(){

  var container = document.querySelector(".bubble-container");

  function make_element(size,x,y,speed){
    var c = `transform: rotateX(${Math.floor(Math.random() * 10 + 10)}deg) rotateY(${Math.random() * 10 + 10}deg)`
    return(`
      <div class="bubble-container-effect parallax" data-speed="${speed}"
        style="
          height:${size}px;
          width:${size}px;
          left:${x}%;
          top:${y}%;

        ">
        <div class="bubble"style="  ${c}"></div>
      </div>
      `)

  }

  var limit_big = 20;
  var html = ``;
  var x = 0;
  var y =0;
  var config = [
    {
      x:5,
      y:0,
      speed:10,
      size:100
    },
    {
      x:15,
      y:35,
      speed:18,

      size:120
    },
    {
      x:10,
      y:70,
      speed:22,

      size:100
    },
    {
      x:85,
      y:10,
      speed:20,

      size:150
    },
    {
      x:80,
      y:67,
      speed:15,

      size:120
    },
    {
      x:70,
      y:50,
      speed:20,

      size:80
    }
  ]

  for(var i =0; i < 50; i ++){

    var x = Math.random() * 100;
    var y =Math.random() * 100;
    var size = Math.random() * 5 +5;
    speed = Math.random() * 100 + 30
    html += make_element(size,x,y,speed);

  }

  container.innerHTML = html;

  document.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    document.querySelectorAll(".parallax").forEach(el => {
      const speed = parseFloat(el.dataset.speed);
      el.style.transform = `translateY(${scrollY / speed}px)`;
    });


  });

}
