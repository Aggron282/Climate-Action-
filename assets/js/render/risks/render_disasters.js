const disasters = [
  {
    heading: "earthquake",
    background: "linear-gradient(135deg, rgba(139,69,19,0.85), rgba(210,180,140,0.85)),",
    icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
    overview: "While earthquakes are not directly caused by climate change, increased water levels from melting glaciers and rising seas can shift tectonic plates, potentially triggering seismic activity in certain regions.",
    stat: "Over the past 50 years, increased water loading has influenced seismic activity in some regions globally."
  },
  {
    heading: "flood",
    background: "linear-gradient(145deg, rgba(30,144,255,0.55), rgba(135,206,250,0.55)),",
    icon: "https://cdn-icons-png.flaticon.com/512/414/414927.png",
    overview: "Flooding is increasingly linked to climate change due to rising sea levels and more intense storms, which result from a warming atmosphere holding more moisture.",
    stat: "Sea levels have risen by over 8 inches since 1880, exacerbating flooding risks."
  },
  {
    heading: "wildfire",
    background: "linear-gradient(135deg, rgba(255,69,0,0.55), rgba(255,140,0,0.55)),",
    icon: "https://cdn-icons-png.flaticon.com/512/4359/4359724.png",
    overview: "Climate change contributes to wildfires by creating hotter, drier conditions and lengthening fire seasons, which make forests and grasslands more prone to burning.",
    stat: "In the U.S., the average wildfire season has increased by nearly three months since the 1970s."
  },
  {
    heading: "tornado",
    background: "linear-gradient(135deg, rgba(169,169,169,0.55), rgba(211,211,211,0.55)), ",
    icon: "https://cdn-icons-png.flaticon.com/512/566/566048.png",
    overview: "The relationship between tornadoes and climate change is complex, but warming temperatures may alter storm patterns, potentially increasing the frequency and intensity of tornadoes in some areas.",
    stat: "Studies suggest that tornado frequency may shift geographically due to climate change."
  },
  {
    heading: "volcano",
    background: "linear-gradient(135deg, rgba(128,0,0,0.55), rgba(178,34,34,0.55)), ",
    icon: "https://cdn-icons-png.flaticon.com/512/2072/2072130.png",
    overview: "Although volcanic eruptions are not caused by climate change, the melting of glaciers due to global warming may reduce pressure on Earth's crust, possibly influencing volcanic activity.",
    stat: "Glacier loss worldwide has exceeded 9,000 billion tons since 1961, impacting geological stability."
  },
  {
    heading: "heatwave",
    background: "linear-gradient(135deg, rgba(255,140,0,0.55), rgba(255,215,0,0.55)), ",
    overview: "Heatwaves are becoming more frequent and intense due to global warming, posing significant health risks and straining energy resources.",
    stat: "The frequency of heatwaves in major cities has tripled since the 1960s."
  },
  {
    heading: "hurricane",
    background: "linear-gradient(135deg, rgba(0,0,139,0.55), rgba(65,105,225,0.55)), ",
    icon: "https://cdn-icons-png.flaticon.com/512/2064/2064825.png",
    overview: "Climate change intensifies hurricanes by increasing sea surface temperatures, which fuel stronger and more destructive storms.",
    stat: "The cost of hurricane-related damage in the U.S. has risen significantly in recent decades, reaching $54 billion annually."
  },
  {
    heading: "landslide",
    background: "linear-gradient(135deg, rgba(139,69,19,0.85), rgba(222,184,135,0.55)), ",
    icon: "https://cdn-icons-png.flaticon.com/512/4027/4027592.png",
    overview: "Increased rainfall and deforestation linked to climate change contribute to the likelihood of landslides, particularly in vulnerable regions.",
    stat: "Landslides caused over $4 billion in damages globally in 2020 alone."
  },
  {
    heading: "tsunami",
    background: "linear-gradient(135deg, rgba(0,128,128,0.85), rgba(72,209,204,0.55)), ",
    icon: "https://cdn-icons-png.flaticon.com/512/826/826942.png",
    overview: "While tsunamis are typically triggered by underwater seismic activity, rising sea levels and coastal erosion increase their destructive impact.",
    stat: "Sea level rise has increased tsunami flooding zones by up to 50% in some areas."
  },
  {
    heading: "drought",
    background: "linear-gradient(135deg, rgba(210,180,140,0.85), rgba(255,228,196,0.55)),",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732199.png",
    overview: "Droughts are exacerbated by higher global temperatures, which lead to quicker evaporation and reduced water availability in many regions.",
    stat: "More than 2.3 billion people face water stress annually due to prolonged droughts."
  }
];

function showInfo(index) {
  const disaster = disasters[index];
  var sect = document.querySelector(".pop");
  var container = document.querySelector(".risks_disasters_container");
  console.log(disaster.background)
  container.style.background =  disaster.background + `url('./assets/imgs/disaster/${disaster.heading}-landscape.png')`;

  sect.innerHTML = `
    <div id="info" class="info-container">
    <h2>${disaster.heading}</h2>
    <br/>
    <p>${disaster.overview}</p>
    <br/>
    <p><strong>Stat:</strong> ${disaster.stat}</p>
    </div>
  `;
  const infoContainer = document.getElementById("info");

  infoContainer.style.background = disaster.background + `url('./assets/imgs/disaster/${disaster.heading}.png')`;

}

function showDisaster(disaster,index){
  return(`<div style="background:${disaster.background} url('./assets/imgs/disaster/${disaster.heading}-landscape.png')" onclick="showInfo(${index})">
    <img src="./assets/imgs/disaster/${disaster.heading}-icon.png" alt="Earthquake icon">
  </div>`);
}
function RenderDisaster(){
  var container = document.querySelector(".risks_disasters_container");

  container.innerHTML = `
  <p class="title"> Natural Disasters Are Getting Worse </p>
  <div class="slideshow-container">
  <div class="pop">
    <div id="info" class="info-container">
      <h2>Click on a disaster to learn more</h2>
      <p>Select one of the options below to populate this section.</p>
    </div>
    </div>
    <div class="row row-d">


    </div>
  </div>
  `

  var row = document.querySelector(".row-d");

  row.innerHTML = ``;

  for(var i =0; i < disasters.length; i++){
    row.innerHTML += showDisaster(disasters[i],i);
  }

  showInfo(0)

}


RenderDisaster();
