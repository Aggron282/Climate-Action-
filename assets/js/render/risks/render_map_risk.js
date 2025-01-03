const token = `IePgFmNGVOGGDAdlcwoxxYgxBXwvhsuj`;

const lowIntensityData = [];
const mediumIntensityData = [];
const highIntensityData = [];

const lowGradient = { 0.1: 'blue', 0.5: 'lightblue', 1.0: 'teal' };
const mediumGradient = { 0.1: 'yellow', 0.5: 'orange', 1.0: 'yellow' };
const highGradient = { 0.1: 'red', 0.5: 'orangered', 1.0: 'red' };


function InitMap(){

  var container = document.querySelector(".risks_map_container");
  container.innerHTML=  `<div id="map" style="height: 500px;"></div>`;
  clearInterval(loading_timer);
  loading_timer = null;
  const map = L.map('map', {
    minZoom: 5,
    maxZoom: 9,
    maxBounds: [
      [24.396308, -125.0],
      [49.384358, -66.93457]
    ]
  }).setView([37.7749, -122.4194], 7);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

}

function processNoaaData(events) {

  events.forEach(event_ => {
    console.log(event_);
    const lat = event_.latitude;
    const lng = event_.longitude;
    const intensity = calculateEventIntensity(event);
    console.log(lat,lng)
    if (intensity <= 0.3) {
      lowIntensityData.push([lat, lng, intensity]);
    } else if (intensity > 0.3 && intensity <= 0.6) {
      mediumIntensityData.push([lat, lng, intensity]);
    } else {
      highIntensityData.push([lat, lng, intensity]);
    }

  });

  L.heatLayer(lowIntensityData, {
    radius: 25,
    blur: 9,
    maxZoom: 17,
    gradient: lowGradient
  }).addTo(map);

  L.heatLayer(mediumIntensityData, {
    radius: 25,
    blur: 9,
    maxZoom: 17,
    gradient: mediumGradient
  }).addTo(map);

  L.heatLayer(highIntensityData, {
    radius: 25,
    blur: 9,
    maxZoom: 17,
    gradient: highGradient
  }).addTo(map);

}

function calculateEventIntensity(event) {

  if (event.precipitation) {
    return Math.min(event.precipitation / 100, 1);
  } else if (event.temperature) {
    return Math.min((event.temperature - 50) / 50, 1);
  } else {
    return Math.random();
  }
}

async function GetMapData() {
  const url = `https://www.ncdc.noaa.gov/cdo-web/api/v2/data`;
  try {
    const response = await axios.get(url, {
      headers: {
        token: token,
      },
      params: {
        datasetid: 'GHCND',
        startdate: '2022-01-01',
        enddate: '2022-12-31'
      },
    });

    processNoaaData(response.data.results);
  } catch (error) {
    console.error("Error fetching NOAA data:", error);
  }
}


async function Init(){
  LoadingPin();
  await GetMapData();
  InitMap();
}

function mapRiskData(location) {
  L.marker([location.latitude, location.longitude])
    .addTo(map)
    .bindPopup(`
      <b>${location.name}</b><br>
      Flood Risk: <span style="color:${getRiskColor(location.risks.flood.risk_level)}">${location.risks.flood.risk_level}</span><br>
      Wildfire Risk: <span style="color:${getRiskColor(location.risks.wildfire.risk_level)}">${location.risks.wildfire.risk_level}</span>
    `);
}
var loading_timer = null;
function LoadingPin(){
  var container = document.querySelector(".risks_map_container");
  container.innerHTML= `
  <p class="title--risks">Loading..</p>
  <div class="loading_pin">
    <img class="pin" src = "./assets/imgs/risks/pin.png" />
    <div class="hole"></div>
  </div>
  `

  var l = document.querySelector(".title--risks");
  var max = 4;
  var dot = ["."];
  var counter = 0;
  loading_timer = setInterval(()=>{
      dot.push(".");
      var dots = '';
      dot.map((s)=>{
        dots+=".";
      })
      l.innerHTML = "Loading " +dots;
      counter++;
      if(counter > max){
        counter = 0;
        dot= ["."];
      }
  },1000)
}


Init();
