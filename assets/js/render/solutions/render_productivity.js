const Delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}
var solutions_data = [
  {
    heading:"Trees Planted",
    number:50000,
    icon:"3.png"
  },
  {
    heading:"Tons of CO2 Reduced",
    number:12000,
    icon:"2.png"
  },
  {
    heading:"Volenteers Recruited",
    number:4000,
    icon:"1.png"
  }
]

function RenderProductivity(container,data){

  container.innerHTML = `
  <section class="impact-section">
    <h1>Our Impact</h1>
    <div class="metrics">
    </div>
  </section>`;

  var impact_container = document.querySelector(".metrics");
  RenderProductivityBoxes(impact_container,data);
}

function RenderProductivityBoxes(container,solution_data){
  for(var i =0; i <solution_data.length; i++){
    var data = solution_data[i];
    container.innerHTML += `  <div class="metric">
        <img src = "./assets/imgs/solutions/${data.icon}" alt="Tree Icon">
        <h2 class="${'number--solution'+i}">${0}</h2>
        <p>${data.heading}</p>
      </div>`;

  }



}

async function CountUp(element,number,incr){
  var start = 0;
  console.log(element)
  for(var i = start; i < number + incr; i+= incr){
    await Delay(10);
    element.innerHTML = `${i}`
  }
  element.classList.add("done-p");
}

var container = document.querySelector(".productivity_container")

RenderProductivity(container,solutions_data);
for(var i =0; i <solutions_data.length; i++){
  var data = solutions_data[i];
  var element = document.querySelector(".number--solution"+i);
  CountUp(element,data.number,400);
}
