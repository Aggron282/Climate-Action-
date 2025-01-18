var disasters_config = [
  {
    background:"./assets/imgs/fire--1.png",
    icon:"./assets/imgs/fire--1.png",
    card_background:"./assets/imgs/melt--2.png",
    heading:"Wildfires",
    subtitle:"Subto",
    fact:""
  },
  {
    background:"./assets/imgs/fire--1.png",
    icon:"./assets/imgs/fire--1.png",
    card_background:"./assets/imgs/melt--1.png",
    heading:"Wildfires",
    subtitle:"Subto",
    fact:""
  },
  {
    background:"./assets/imgs/fire--1.png",
    icon:"./assets/imgs/fire--1.png",
    card_background:"./assets/imgs/melt--2.png",
    heading:"Wildfires",
    subtitle:"Subto",
    fact:""
  },
  {
    background:"./assets/imgs/fire--1.png",
    icon:"./assets/imgs/fire--1.png",
    card_background:"./assets/imgs/risk--2.png",
    heading:"Wildfires",
    subtitle:"Subto",
    fact:""
  },
  {
    background:"./assets/imgs/fire--1.png",
    icon:"./assets/imgs/fire--1.png",
    card_background:"./assets/imgs/risk--2.png",
    heading:"Wildfires",
    subtitle:"Subto",
    fact:""
  },
  {
    background:"./assets/imgs/fire--1.png",
    icon:"./assets/imgs/fire--1.png",
    card_background:"./assets/imgs/risk--2.png",
    heading:"Wildfires",
    subtitle:"Subto",
    fact:""
  },
  {
    background:"./assets/imgs/fire--1.png",
    icon:"./assets/imgs/fire--1.png",
    card_background:"./assets/imgs/risk--2.png",
    heading:"Wildfires",
    subtitle:"Subto",
    fact:""
  },
  {
    background:"./assets/imgs/fire--1.png",
    icon:"./assets/imgs/fire--1.png",
    card_background:"./assets/imgs/risk--2.png",
    heading:"Wildfires",
    subtitle:"Subto",
    fact:""
  },
  {
    background:"./assets/imgs/fire--1.png",
    icon:"./assets/imgs/fire--1.png",
    card_background:"./assets/imgs/risk--1.png",
    heading:"Wildfires",
    subtitle:"Subto",
    fact:""
  }
]

var incr = 12;
var pos = 0
function RenderDisasters(){
    var container = document.querySelector(".risks_disasters_container");
    container.innerHTML =  `

    <div class="disaster_display_container">

    </div>
    <div class="disaster_scroll_container">

    </div>
    `
    var scroll_container = document.querySelector(".disaster_scroll_container");
    for(var i =0; i < disasters_config.length; i++){
      scroll_container.innerHTML += ReturnDisasterBox(disasters_config[i],pos);
      pos+= incr;
    }
}

function ReturnDisasterBox(data,left){
  return (
    `<div class="disaster_card" style="left:${left}%;background:url('${data.card_background}')">
        <p class="title">${data.heading}</p>
    </div>
    `
  )
}

RenderDisasters();
