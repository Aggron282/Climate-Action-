function RenderPollutedSection(){

  var container = document.querySelector(".polluted_section");

  container.innerHTML = `
    <div class="inner-container--pollution">

      <div class="rain-container">
        <canvas id = "rainCanvas"></canvas>
      </div>

      <div class="text-container text-container--pollution">
        <p class="title"> Pollution and Climate Change A Crisis Unfolding </p>
        <p class="description">
        Pollution and climate change are intertwined global challenges threatening ecosystems,
        economies, and human well-being. Greenhouse gas emissions, deforestation,
        and industrial pollutants are driving global temperatures to unprecedented levels,
        while air, water, and soil contamination exacerbate environmental degradation </p>
      </div>

      <div class="grid-container--pollution">

      </div>

      <div class="graphic-container">
        <img class="graphic" src= "./assets/imgs/why/pollut.png"/>
      </div>

    </div>
  `

  CreateCollisionParticleEffect();
  RenderFactsAndResources();

}


function CreateCollisionParticleEffect(){


  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const c_particles = [];

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class CollisionParticle {

    constructor(x, y, dx, dy, size, color,isP) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.size = size;
      this.color = color;
      this.isExplodedP = isP;
      this.exploded = false;
    }

    draw() {
      if(!this.isExplodedP){
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.size);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        ctx.stroke();
      }else{
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI * 2);
        ctx.fillStyle  = this.color;
        ctx.fill();
      }
    }

    update() {
      this.tilt = Math.random() * 10 - 10;
      this.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
      this.tiltAngle = Math.random() * Math.PI;
      this.y += this.dy;
      this.x += this.dx;
      if(this.isExplodedP){
        this.size -= .005;
        if(this.size <= 0){
          c_particles.splice(c_particles.indexOf(this), 1);
        }
      }
      if (!this.exploded && this.y + this.size >= canvas.height) {
        this.explode();
        this.exploded = true;
      }

      this.draw();

    }

    explode() {

      for (let i = 0; i < 5; i++) {

        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2;

        c_particles.push(

          new CollisionParticle(
            this.x,
            this.y,
            Math.cos(angle) * speed,
            Math.sin(angle) * speed,
            this.size / 5,
            this.color,
            true
          )

        );

      }

      c_particles.splice(c_particles.indexOf(this), 1);

    }

  }


  function spawnParticles() {

    const x = Math.random() * canvas.width;
    const y = 0;
    const size = Math.random() * 10;
    const color = 'rgba(173, 216, 230, 0.7)';

    const dx = 1;
    const dy = Math.random() * 1 + 2;

    c_particles.push(new CollisionParticle(x, y, dx, dy, size, color));

  }

  function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    c_particles.forEach((c_particle, index) => {

      if (c_particle.size > 0.5) {
        c_particle.update();
      }
      else {
        c_particles.splice(index, 1);
      }

    });

    if (Math.random() < 0.2) {
      spawnParticles();
    }

    requestAnimationFrame(animate);

  }

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  animate();

}

async function RenderFactsAndResources(){

  var container = document.querySelector(".grid-container--pollution");

  const climateChangeCauses = [
  {
    heading: "Burning Fossil Fuels",
    fact: "Combustion of coal, oil, and natural gas for electricity and heat is a major source of global carbon dioxide emissions.",
    link: "https://www.un.org/en/climatechange/science/causes-effects-climate-change"
  },
  {
    heading: "Deforestation",
    fact: "Clearing forests for agriculture or logging reduces the number of trees that can absorb carbon dioxide, increasing atmospheric CO₂ levels.",
    link: "https://www.un.org/en/climatechange/science/causes-effects-climate-change"
  },
  {
    heading: "Industrial Processes",
    fact: "Manufacturing goods often involves chemical reactions that emit greenhouse gases, contributing to climate change.",
    link: "https://www.un.org/en/climatechange/science/causes-effects-climate-change"
  },
  {
    heading: "Agriculture",
    fact: "Farming activities, including livestock production and rice cultivation, release methane and nitrous oxide, potent greenhouse gases.",
    link: "https://www.epa.gov/climatechange-science/causes-climate-change"
  },
  {
    heading: "Waste Management",
    fact: "Decomposing organic waste in landfills produces methane, a greenhouse gas with a significant impact on global warming.",
    link: "https://www.epa.gov/climatechange-science/causes-climate-change"
  },
  {
    heading: "Transportation",
    fact: "Vehicles powered by gasoline and diesel emit carbon dioxide and other pollutants, contributing to the greenhouse effect.",
    link: "https://www.nrdc.org/stories/what-are-causes-climate-change"
  },
  {
    heading: "Oil and Gas Extraction",
    fact: "The extraction and distribution of fossil fuels can lead to methane leaks, a potent greenhouse gas.",
    link: "https://www.epa.gov/climatechange-science/causes-climate-change"
  },
  {
    heading: "Land Use Changes",
    fact: "Converting natural landscapes into urban areas or agricultural land alters the Earth's albedo and can increase greenhouse gas emissions.",
    link: "https://royalsociety.org/news-resources/projects/climate-change-evidence-causes/basics-of-climate-change"
  }
];

  function ReturnResourceBoxHTML({heading,fact,link}){

    return (
      `
      <div class="resource_box">
        <p class="title">${heading}</p>
        <p class="description">${fact}</p>
        <a class="link" href="${link}">
         <button>
          Learn More
         </button>
         </a>
      </div>
      `
    )

  }

  var html = ``;

  for(var i =0; i < climateChangeCauses.length;i++){
    var cause = climateChangeCauses[i];
    container.innerHTML += ReturnResourceBoxHTML(cause);;
  }

}


async function Delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

RenderPollutedSection();
