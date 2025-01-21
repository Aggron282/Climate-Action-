var climate_data = {};
var chart_instance;
const emissionLevels = [
    {year: 1750, co2_ppm: 280, co2_emissions_gigatons: 0},
    {year: 1800, co2_ppm: 283, co2_emissions_gigatons: 0},
    {year: 1850, co2_ppm: 285, co2_emissions_gigatons: 0.1},
    {year: 1900, co2_ppm: 296, co2_emissions_gigatons: 0.5},
    {year: 1950, co2_ppm: 310, co2_emissions_gigatons: 2.5},
    {year: 1960, co2_ppm: 315, co2_emissions_gigatons: 5},
    {year: 1970, co2_ppm: 325, co2_emissions_gigatons: 10},
    {year: 1980, co2_ppm: 340, co2_emissions_gigatons: 18},
    {year: 1990, co2_ppm: 355, co2_emissions_gigatons: 22},
    {year: 2000, co2_ppm: 370, co2_emissions_gigatons: 25},
    {year: 2010, co2_ppm: 390, co2_emissions_gigatons: 33},
    {year: 2020, co2_ppm: 412, co2_emissions_gigatons: 36}
  ]
const seaLevels =
  [
    {year: 1880, sea_level_change_mm: -20},
    {year: 1890, sea_level_change_mm: -15},
    {year: 1900, sea_level_change_mm: -10},
    {year: 1910, sea_level_change_mm: -5},
    {year: 1920, sea_level_change_mm: 0},
    {year: 1930, sea_level_change_mm: 10},
    {year: 1940, sea_level_change_mm: 20},
    {year: 1950, sea_level_change_mm: 30},
    {year: 1960, sea_level_change_mm: 50},
    {year: 1970, sea_level_change_mm: 70},
    {year: 1980, sea_level_change_mm: 100},
    {year: 1990, sea_level_change_mm: 130},
    {year: 2000, sea_level_change_mm: 150},
    {year: 2010, sea_level_change_mm: 200},
    {year: 2020, sea_level_change_mm: 250}
]


var habitat_threat_data =  [
      {threat: "Exploitation", percentage: 37.0},
      {threat: "Habitat degradation/change", percentage: 31.4},
      {threat: "Habitat loss", percentage: 13.4},
      {threat: "Climate change", percentage: 7.1},
      {threat: "Invasive species/genes", percentage: 5.1},
      {threat: "Pollution", percentage: 4.0},
      {threat: "Disease", percentage: 2.0}
]

var climate_menu = [
  {
    img:"./assets/imgs/risks/1.png",
    func:CalcGlobalTemps,
    heading:"Global Temps",
    class_:"bubble--1",
    subtitle:"",
    description:""
  },
  {
    img:"./assets/imgs/risks/2.png",
    func:CalcOceanLevels,
    heading:"Ocean Levels",
    subtitle:"",
    class_:"bubble--2",
    description:""
  },
  {
    img:"./assets/imgs/risks/3.png",
    func:CalcAnimalPopulations,
    heading:"Animal Populations",
    subtitle:"",
    class_:"bubble--3",

    description:""
  },
  {
    img:"./assets/imgs/risks/4.png",
    func:CalcEmissionLevels,
    heading:"Emission Levels",
    subtitle:"",
    class_:"bubble--4",

    description:""
  }

]
var calcTimer = null;

async function CalcGlobalTemps(){

  climate_data.temps = [];

  clearTimeout(calcTimer)

  calcTimer = null;

  var container = document.querySelector(".graph_display_container");
  var url = "https://archive-api.open-meteo.com/v1/archive"
  var params = {
    "latitude": 40.7128,
    "longitude": -74.0060,
    "start_date": "1960-01-01",
    "end_date": "2024-01-01",
    "temperature_unit": "celsius",
    "daily": "temperature_2m_mean",
    "timezone": "UTC",
  }

  SpawnDots(container);

  calcTimer = setTimeout(async ()=>{
    var {data} = await axios.get(url,{params});

    climate_data.temps = data;

    const dailyTemps = climate_data.temps.daily.temperature_2m_mean;
    const dailyDates = climate_data.temps.daily.time;
    const yearlyData = {};
    const years = [];
    const temps = [];

    dailyDates.forEach((date, index) => {

      const year = date.split("-")[0];

      if (!yearlyData[year]) {
          yearlyData[year] = [];
      }

       yearlyData[year].push(dailyTemps[index]);

    });

     Object.keys(yearlyData).forEach(year => {
          const yearTemps = yearlyData[year];
          const yearAverage = yearTemps.reduce((sum, temp) => sum + temp, 0) / yearTemps.length;
          years.push(parseInt(year, 10));
          temps.push(yearAverage);
      });

      RenderGraph(container,"line",years,temps,"Avg. Temperature");
    },2000);

}

function RenderGraph(container,type,labels,data,title){
  container.innerHTML = ""
  container.innerHTML=`
    <canvas id="chart"></canvas>
    <div class="circle"></div>
  `

  const ctx = document.getElementById('chart');
  if(chart_instance){
    chart_instance.destroy();
    chart_instance = null;
  }
   chart_instance = new Chart(ctx, {
    type: type,
    data: {
      labels:labels,
      datasets: [{
        label: title,
        data: data,
        borderWidth: 0
      }]
    }
    // options: {
    //   scales: {
    //     y: {
    //       beginAtZero: true
    //     }
    //   }
    // }
  });

}

function RenderDefault(){
  var container = document.querySelector(".graph_display_container");

  container.innerHTML = `
    <img class="graphic" src = "./assets/imgs/risks/bearr.png"/>
    <div class="circle"></div>`;

}

function RenderDataSection(){
  var container = document.querySelector(".risks_data_container");

  container.innerHTML = `
    <div class = "graph_bubbles_container">

    </div>

    <div class = "graph_display_container">

    </div>

    <div class = "graph_text_container">

    </div>
  `

}

async function CalcOceanLevels(){
  var levels = [];
  var years = [];
  var container = document.querySelector(".graph_display_container");

  for(var i =0; i < seaLevels.length; i++){
    var data_i = seaLevels[i];
    console.log(data_i)
    levels.push(data_i.sea_level_change_mm)
    years.push(data_i.year)
  }
  console.log(levels,years)
  SpawnDots(container);
  clearTimeout(calcTimer);
  calcTimer = setTimeout(()=>{
    RenderGraph(container,"line",levels,years,"Sea Level Change");
  },3000);
}

function CalcEmissionLevels(){

  var levels = [];
  var years = [];
  var container = document.querySelector(".graph_display_container");

  for(var i =0; i < emissionLevels.length; i++){
    var data_i = emissionLevels[i];
    years.push(data_i.year)
    levels.push(data_i.co2_ppm)
  }
  // console.log(percentage,threat)
  SpawnDots(container);
  clearTimeout(calcTimer);
  calcTimer = setTimeout(()=>{
    RenderGraph(container,"line",levels,years,"Emission");
  },3000);

}

function CalcAnimalPopulations(){

  var threat = [];
  var percentage = [];
  var container = document.querySelector(".graph_display_container");

  for(var i =0; i < habitat_threat_data.length; i++){
    var data_i = habitat_threat_data[i];
    threat.push(data_i.threat)
    percentage.push(data_i.percentage)
  }
  console.log(percentage,threat)
  SpawnDots(container);
  clearTimeout(calcTimer);
  calcTimer = setTimeout(()=>{
    RenderGraph(container,"pie",threat,percentage,"Threats");
  },3000);

}

function RenderGraphChoices(){

  var container = document.querySelector(".graph_bubbles_container");

  container.innerHTML = `<p class="graph--title"> Compare Earth's Vitals from the Past to the Future! </p>`;

  for(var i =0; i < climate_menu.length;i++){
    var c_data = climate_menu[i];
    container.innerHTML += ReturnBubbleHTML(c_data);
  }

  function ReturnBubbleHTML(data){
      return `
        <div class="bubble_row ${data.class_}">
          <div classs="bubble chart--bubble " class="xx" id="${data.class_}"  >
            <img class="graphic chart--graphic" src = ${data.img} />
            <div class="b-chart-graphic"></div>
            <p class = "title">${data.heading}</p>
          </div>
        </div>
      `
  }

}

async function Init(){

  RenderDataSection();
  RenderGraphChoices();
  RenderDefault();

  document.querySelector("#bubble--1").addEventListener("click",(e)=>{
    e.stopPropagation();
    CalcGlobalTemps();
    SetActiveDataButton(e.target);
  })

  document.querySelector("#bubble--3").addEventListener("click",(e)=>{
    e.stopPropagation();
    CalcAnimalPopulations();
    SetActiveDataButton(e.target);
  })

  document.querySelector("#bubble--4").addEventListener("click",(e)=>{
    e.stopPropagation();
    CalcEmissionLevels();
    SetActiveDataButton(e.target);
  })

  document.querySelector("#bubble--2").addEventListener("click",(e)=>{
    e.stopPropagation();
    CalcOceanLevels();
    SetActiveDataButton(e.target);
  })

}

function SetActiveDataButton(element){

  var b = document.querySelectorAll(".chart--graphic");

  for(var i =0; i < b.length; i++){
      b[i].classList.remove("xx-active");
  }

  element.classList.add('xx-active');
  console.log(element,b)
}


Init();
