var config  = [

  {
    name: "Polar Bears",
    className:"polarbear",

    description: `The Arctic is warming about twice as fast as the global average, causing the ice that polar bears depend on to melt away. Loss of sea ice also threatens the bear's main prey, seals, which need the ice to raise their young.`

  },
  {
    name: "Artic Fox",
    className:"articfox",

    description: `With the ecosystem warming and changing, the lemmings and other rodents that are the main food source for arctic foxes, have a lower survival rate. There is less snow to insulate their dens during winter, and mild weather brings rains that freeze in a layer of ice on the terrain, restricting access to food.`

  },
  {
    name: "Sea Turtles",
    className:"seaturtle",

    description: `Climate change is altering ocean currents, which are the highways that sea turtles use for migration. With changes in ocean circulation, sea turtles may have to alter their movements and possibly shift their range and nesting timing.`

  },
  {
    name: "Penguins",
    className:"penguin",

    description: `The evidence of climate change's impact on penguins is stark, as demonstrated by the unprecedented breeding failure of emperor penguin colonies due to total sea ice loss in 2022. This dire situation aligns with the concerning fact that half of the 18 penguin species are now considered Threatened on the IUCN Red List.`

  },

  {
    name: "Puffins",
    className:"puffin",
    description: `Scientists analyzed Atlantic puffin genes and found they had been interbreeding in recent history. They traced the first hybrid puffin back to 1910, after climate change had started to grip the globe. That suggests that the interbreeding was caused by climate change`

  },
  {
    name: "Sea Lions",
    className:"sealion",

    description: `Unusually warm ocean temperatures can also amplify harmful algal blooms that periodically occur along the California coast. Certain algae species produce toxins such as domoic acid that enter the marine food web and ultimately harm sea lions.`

  },
  {
    name: "Walruses",
    className:"walrus",

    description: `Today the biggest threat facing walruses is the loss of stable sea ice due to climate change. As a result of less sea ice, walrus are changing their behavior. Walruses feed on the ocean floor in the relatively shallow waters of the continental shelf, where the sea ice itself sustains a rich food web.`

  },
  {
    name: "Dolphin",
    className:"dolphin",

    description: `Sadly, though, dolphins and other marine mammals are some of the animals suffering most from the impacts of climate change. A 2023 study published by NOAA found that 70% of US marine mammals were vulnerable to the threat of warming waters, which can impact their food sources and habitats`

  },
  {
    name: "Coral",
    description: `When ocean temperatures rise, corals get stressed and their algae get expelled. Without their roommates, corals can starve and eventually die. Studies show that if climate change continues at the same pace, 99% of the world's coral reefs are likely to die off by the end of the century`,
    className:"coral"
  },

];


function RenderContent(name,description){

  return `
  <p class="title detail_title">${name}</p>
  <p class="description detail_description">
    ${description}
  </p>
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


function PopulateContent(c){
  var content = document.querySelector(".detail_container");
  var container = document.querySelector(".habitat_loss_container");
  var chosen_data = config[c];
  var bubbles = document.getElementsByClassName("animal_bubble");

  content.innerHTML = "";
  content.innerHTML = RenderContent(chosen_data.name,chosen_data.description);

  for(var i =0 ; i < bubbles.length;i++){
    bubbles[i].classList.remove("bubble_active");
  }

  for(var k =0 ; k < config.length;k++){
    container.classList.remove("habitat_loss--"+config[k].className);
  }

  bubbles[c].classList.add("bubble_active");
  container.classList.add("habitat_loss--"+chosen_data.className);

}



RenderHabitatBubbles();

PopulateContent(0);


var bubbles = document.getElementsByClassName("animal_bubble");

for(var i = 0; i < bubbles.length; i ++){

  bubbles[i].addEventListener("click",(e)=>{

      var target = e.target;

      var id_ = e.target.getAttribute("id_");

      PopulateContent(id_);

  })
}
