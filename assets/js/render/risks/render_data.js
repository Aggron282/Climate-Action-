var climate_data = {};
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
    func:CalcGlobalTemps,
    heading:"Global Temps",
    subtitle:"",
    class_:"bubble--2",

    description:""
  },
  {
    img:"./assets/imgs/risks/3.png",
    func:CalcGlobalTemps,
    heading:"Global Temps",
    subtitle:"",
    class_:"bubble--3",

    description:""
  },
  {
    img:"./assets/imgs/risks/4.png",
    func:CalcGlobalTemps,
    heading:"Global Temps",
    subtitle:"",
    class_:"bubble--4",

    description:""
  },
  {
    img:"./assets/imgs/risks/5.png",
    func:CalcGlobalTemps,
    heading:"Global Temps",
    subtitle:"",
    class_:"bubble--5",
    description:""
  }

]

async function CalcGlobalTemps(){

  climate_data.temps = [];
  var url = "https://archive-api.open-meteo.com/v1/archive"
  var params = {
    "latitude": 40.7128,
    "longitude": -74.0060,
    "start_date": "1950-01-01",
    "end_date": "2024-01-01",
    "temperature_unit": "celsius",
    "daily": "temperature_2m_mean",
    "timezone": "UTC",
  }

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

    var container = document.querySelector(".graph_display_container");

    RenderGraph(container,"line",years,temps);

}

function RenderGraph(container,type,labels,data){
  console.log(container,type,labels,data)

  container.innerHTML=`

  <canvas id="chart"></canvas>
  <div class="circle"></div>
  `

  const ctx = document.getElementById('chart');

  new Chart(ctx, {
    type: type,
    data: {
      labels:labels,
      datasets: [{
        label: 'Avg. Global Temps',
        data: data,
        borderWidth: 0
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}

function RenderDataSection(){
  var container = document.querySelector(".risks_data_container");

  container.innerHTML = `
    <div class = "graph_bubbles_container">

    </div>

    <div class = "graph_display_container">
        <img class="graphic" src = "./assets/imgs/risks/bearr.png"/>
        <div class="circle"></div>
    </div>

    <div class = "graph_text_container">

    </div>
  `

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
          <div classs="bubble chart--bubble ">
            <img class="graphic chart--graphic" src = "${data.img}" />
            <div class="b-chart-graphic"></div>
          </div>
        </div>
      `
  }

}

async function Init(){

  RenderDataSection();
  console.log(climate_data)
  // CalcGlobalTemps();
  RenderGraphChoices();
}

Init();
