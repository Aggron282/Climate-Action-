function RenderShocaseWhy(){

  var container = document.querySelector(".showcase_why_container");

  container.innerHTML = `

  <p class= "title"> Learn Why the Icecaps are Melting </p>

  <div class="why_bubble why_bubble--1  why_bubble--climate" >
    <p>Climate Change</p>
  </div>

  <div class="why_bubble why_bubble--2  why_bubble--habitat">
      <p>Habitat Loss</p>
  </div>

  <div class="why_bubble why_bubble--3  why_bubble--greed">
    <p>Corporate Greed</p>
  </div>

  <div class="why_bubble why_bubble--4  why_bubble--matters">
    <p>Why it Matters</p>
  </div>`

}

function RenderClimateReasons(){
  var container = document.querySelector(".rain_container");
  var reasons = [
    {
    title:"Greenhouse Gases",
    description:`The burning of fossil fuels (coal, oil, and natural gas) for energy and transportation releases carbon dioxide
    (CO₂) and other greenhouse gases like methane (CH₄) and nitrous oxide (N₂O).`,
    img:"./assets/imgs/why/1.png"
  },

  {
    title:"Deforestation",
    description:`Forests act as carbon sinks, absorbing CO₂
    from the atmosphere.
    When forests are cleared or burned for agriculture, urban development, or
    logging, this capacity is reduced.`,
    img: "./assets/imgs/why/2.png"
  },
  {
    title:"Bad Agriculture",
    description:`Industrial farming generates significant methane emissions, particularly from livestock (cows and sheep) and rice paddies.`,
    img: "./assets/imgs/why/3.png"
  },

  {
    title:"Urbanization",
    description:`Urbanization increases energy demand and often involves activities like construction and transportation, which contribute to emissions.`,
    img: "./assets/imgs/why/4.png"
  },

]

  reason_boxes = ``;

  function ReturnReasonBox(title,src,description){
    return  `
    <div class="reason_box">

      <div classs="img-container">
        <img class="reason_img" src = "${src}" />
      </div>

      <div class="text-container">
        <p class="title"> ${title} </p>
        <p class="description">  ${description}  </p>

      </div>

    </div>
    `
  }

  for(var i =0; i < reasons.length; i++ ){
    var {title,img,description} = reasons[i]
    reason_boxes += ReturnReasonBox(title,img,description)
  }

  container.innerHTML =
  `
    <canvas id = "rain_canvas"></canvas>

    <p class="title">4 Reasons for Climate Change </p>

    <p class="subtitle">Find the real reason why our climate is changing </p>

    ${reason_boxes}

  `

}

function RenderClimateWhy(){

  var container = document.querySelector(".why_oceans_slideshow");

  container.innerHTML = `
  <div class="warm_container">
    <p class = "title"> The Oceans Are Getting Warmer</p>
    <div  class="text-container">
      <div class="pulse"></div>
      <div class="pulse--2"></div>

        <div class="slide--1 slide active" slide = 1>
          <p class="text_box--1 text_box">
            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem  orem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

        </div>
        <div class="image-container--grid">

        </div>
      </div>
    </div>
  `
}


function RenderHabitatBubbles(){

  var container = document.querySelector(".habitat_loss_container");

  container.innerHTML = `

  <p class="title">Climate Change Causes Habitat Loss</p>

  <p class="subtitle">These are just the few Animals will Lose their Habitat if the Artic Region Continues to Increase in Temperature</p>

  <div class="bubble_container">
    <div class="animal_bubble animal_bubble--3 bubble_active" id_ = 0>
      <img alt = "polar bear "src  = "./assets/imgs/animals/polarbear.png" id_ = 0 />
    </div>

    <div class="animal_bubble animal_bubble--1" id_ = 1>
      <img alt = "artic fox "src  = "./assets/imgs/animals/articfox.png" id_=1 />
    </div>

    <div class="animal_bubble animal_bubble--2" id_ = 2>
      <img alt = "sea turtle " src  = "./assets/imgs/animals/seaturtle.png" id_ = 2 />
    </div>

    <div class="animal_bubble animal_bubble--4" id_ = 3>
      <img alt = "penguin "src  = "./assets/imgs/animals/penguin.png" id_ = 3 />
    </div>

    <div class="animal_bubble animal_bubble--5" id_ = 4>
      <img alt = "puffin "src  = "./assets/imgs/animals/puffin.png" id_ = 4 />
    </div>

    <div class="animal_bubble animal_bubble--5" id_ = 5>
      <img alt = "sea lion "src  = "./assets/imgs/animals/sealion.png" id_ = 5 />
    </div>

    <div class="animal_bubble animal_bubble--5" id_ = 6>
      <img alt = "walrus "src  = "./assets/imgs/animals/walrus.png" id_ = 6 />
    </div>

    <div class="animal_bubble animal_bubble--5" id_ = 7>
      <img alt = "dolphin "src  = "./assets/imgs/animals/dolphin.png" id_ = 7 />
    </div>

    <div class="animal_bubble animal_bubble--5" id_ = 8>
      <img alt = "coral " src  = "./assets/imgs/animals/coral.png" id_ = 8 />
    </div>

</div>

<div class="detail_container">

    <p class="title detail_title">Artic Fox</p>

    <p class="description detail_description">
      rem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
       Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      orem
    </p>

</div>
  `

}

function RenderWhyItMatters(){

  var container = document.querySelector(".why_it_matters_container");

  container.innerHTML = `
  <p class= "title">Why it Matters</p>
    <p class= "title--2">Why it Matters</p>
  <p class="description">
    orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem  orem Ipsum is simply dummy text of the printing and typesetting industry.
  </p>

  `

}


function RenderEmitContainer(){

  var container = document.querySelector(".emit_container");
  var parent = document.querySelector(".emit_parent");

  var index = 0;
  var timer = null;
  var facts = [
    {
      title:`Carbon Dioxide Levels Are Unprecedented `,
      color:"#222f69",
      description:`Atmospheric CO₂
      concentrations exceeded 420
      parts per million (ppm) in 2023,
      the highest levels in at least 800,000 years,
      as confirmed by ice core data.`
    },
    {
      title:`Coral Reefs Are Dying `,
      color:"#162360",
      description:`More than half of
      the world’s coral reefs have
      been lost or severely
      damaged in the last
      30 years due to ocean warming, acidification, and pollution.`
    },
    {
      title:`Rising Sea Levels `,
      color:"#13205b",
      description:`Since 1880, global sea levels have risen by about 8 inches (20 cm), and the rate of increase has accelerated in recent decades due to melting glaciers and thermal expansion of seawater.`
    },
  ];

  function RenderHTML(fact){

    container.innerHTML =  `
    <p class="title">Did You Know?</p>

      <div class="text-container">
        <!-- <img class="icon" src = "./assets/imgs/risk_icon_slide.png"/> -->
        <p class="subtitle">${fact.title}</p>

        <p class="description">
          ${fact.description}
        </p>

      </div>

      <img class="graphic" src = "./assets/imgs/water.png"/>


    `
    parent.style.background = fact.color;

  }

  function Init(){

    clearInterval(timer);
    timer = null;
    RenderHTML(facts[index]);

    container.innerHTML +=  ReturnTogglerHTML();

    var toggle_buttons = document.querySelectorAll(".toggle-fact");
    for(var i =0; i < toggle_buttons.length; i ++){

      toggle_buttons[i].classList.remove("toggle-fact--active");
      toggle_buttons[i].addEventListener("click",(e)=>{
        ToggleFact(e);
      });

      if(i == index){
        toggle_buttons[i].classList.add("toggle-fact--active");
      }

    }


    timer  = setInterval(()=>{
        index ++;
        if(index > facts.length){
          index = 0;
        }
        Init();
    },12000)

  }

  function ToggleFact(e){

    var toggle_buttons = document.querySelectorAll(".toggle-fact");
    var index_data = e.target.getAttribute("_id");
    index = parseInt(index_data)
    Init();

  }

  function ReturnTogglerHTML(){
    return (`
      <div class="toggler">
          <div class="toggle-fact toggle-fact--active" _id="0"></div>
          <div class="toggle-fact" _id="1"></div>
          <div class="toggle-fact" _id="2"></div>

        </div>
      `)
  }

  Init();
}

RenderShocaseWhy();
RenderClimateWhy();
RenderHabitatBubbles();
RenderWhyItMatters();
RenderEmitContainer();
RenderClimateReasons();
