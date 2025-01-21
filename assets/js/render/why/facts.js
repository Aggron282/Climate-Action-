function RenderFactSection(){

  const facts = [
  {
    fact: "Global Warming Is Shrinking Animal Sizes",
    description: "Certain animals like salamanders and some birds are evolving to become smaller to dissipate heat better as temperatures rise.",
    link: "https://www.nature.com/articles/nature11824",
    background:"ee.png",
    image: "https://unsplash.com/photos/FV_PxCqgtwc",
    id:0
  },
  {
    fact: "Climate Change Affects Earth’s Wobble",
    description: "Melting ice sheets, especially in Greenland, are redistributing Earth’s mass, slightly shifting the axis of rotation and affecting the planet's wobble.",
    link: "https://www.nasa.gov/topics/earth/features/earth20100301.html",
    background:"after.jpg",
    id:1,
    image: "https://unsplash.com/photos/UXR--t8CZ1U"
  },
  {
    fact: "Fossil Fuels Create 'Zombie Forests'",
    description: "Rising temperatures and droughts are causing forests to die, leaving standing dead trees that trap carbon until they decompose.",
    link: "https://e360.yale.edu/features/ghost-forests-climate-change-saltwater-intrusion",
    background:"1.png",
    id:2,
    image: "https://unsplash.com/photos/CXNGeW2pVMI"
  },
  {
    fact: "Lakes Are Becoming 'Gassy'",
    description: "Warmer lakes are releasing more methane, a potent greenhouse gas produced by bacteria thriving in warm waters.",
    link: "https://www.scientificamerican.com/article/more-methane-released-from-lakes-due-to-global-warming/",
    background:"2.png",
    id:3,
    image: "https://unsplash.com/photos/TT-ROxWj9nA"
  },
  {
    fact: "Cloud Patterns Are Shifting",
    description: "Clouds are migrating toward the poles, potentially amplifying heating by reducing cloud cover over equatorial regions.",
    background:"3.png",
    link: "https://www.pnas.org/doi/10.1073/pnas.1900295116",
    image: "https://unsplash.com/photos/Z6Hu4YMcDLE"
  },
  {
    fact: "Wine Is Changing Its Flavor",
    background:"4.png",
    description: "Warming temperatures affect how grapes ripen, altering sugar levels, acidity, and aroma, impacting wine's flavor.",
    link: "https://www.npr.org/sections/thesalt/2019/04/22/715154522/how-climate-change-is-altering-wine",
    image: "https://unsplash.com/photos/YdThO5U3tvo"
  },
  {
    fact: "Ancient Viruses Could Awaken",
    background:"5.png",
    description: "Melting permafrost may release long-dormant viruses and bacteria, like a 2016 anthrax outbreak in Siberia linked to a thawed reindeer carcass.",
    link: "https://www.bbc.com/news/science-environment-52318539",
    image: "https://unsplash.com/photos/FcZWuG3htJ4"
  },
  {
    fact: "The Oceans Are Losing Their Voice",
    background:"6.png",

    description: "Warmer oceans alter how sound travels underwater, potentially disrupting marine species' communication and navigation.",
    link: "https://www.sciencedaily.com/releases/2018/12/181204103706.htm",
    image: "https://unsplash.com/photos/ViEbIRg6Jxs"
  },
  {
    fact: "Deserts Are 'Blooming' More Often",
    background:"7.png",

    description: "Higher rainfall in some deserts leads to temporary wildflower blooms and ecosystems, though these are often short-lived.",
    link: "https://www.nationalgeographic.com/environment/article/desert-superblooms",
    image: "https://unsplash.com/photos/fx42VbZlLiQ"
  },
  {
    fact: "Extreme Weather Is Warping Earth’s Crust",
    background:"8.png",
    description: "Severe droughts and massive floods redistribute water and sediment, causing minuscule but measurable shifts in Earth's crust.",
    link: "https://www.earthmagazine.org/article/floods-and-droughts-deforming-earths-crust/",
    image: "https://unsplash.com/photos/74TufExdP3Y"
  }
];

  var container = document.querySelector(".fact_section");
  var counter = 0

  container.innerHTML = ReturnFactHTML(facts[counter])

  var fact_container = document.querySelector(".facts-container");

  var html = ``;

  for (var i =0; i < facts.length;i++){
    html+= `
    <div class="fact_box"style="background:linear-gradient(to  bottom,rgba(22,7,24,1),rgba(22,7,24,.5),rgb(79, 135, 180,0)),url('./assets/imgs/facts/${facts[i].background}');">
    <p class="title--fact"> ${facts[i].fact} </p>
    <button _id="${i}" class="see_more"> See More </button>
    </div>
    `
  }

  fact_container.innerHTML = html;
  RenderImgFact(facts[0]);
  var buttons_facts = document.querySelectorAll(".see_more");
  for(var i =0; i < buttons_facts.length; i++){

    buttons_facts[i].addEventListener("click",(e)=>{
      e.stopPropagation();
      var _id = e.target.getAttribute("_id");
      console.log(_id);

      RenderImgFact(facts[parseInt(_id)]);
    })

  }

  function ReturnGradient(background){
    return `background:linear-gradient(to  bottom,rgba(22,7,24,1),rgba(22,7,24,.5),rgb(79, 135, 180,0)),url('./assets/imgs/facts/${background}')`
  }

  function ReturnFactHTML(fact){
    console.log(fact.background)
    return( `
      <div class="fact_grid">
        <div class="img_col img_fact_col" >
          <p class="title"> Did You Know? </p>
          <div class="fact-content">
            <p class="subtitle"> ${fact.fact} </p>
            <p class="description"> ${fact.description} </p>
            <a href ="${fact.link}"><button> See More </button></a>
          </div>
        </div>
        <div class="fact_col">
          <p class="title"> ${fact.fact} </p>
          <div class="divider"></div>
          <div class="facts-container"></div>
        </div>
      </div>
      `);

    }

    function RenderImgFact(fact){
      var container =  document.querySelector(".img_fact_col");
      container.innerHTML = `<p class="title"> Did You Know? </p>
      <div class="fact-content">
        <p class="subtitle"> ${fact.fact} </p>
        <p class="description"> ${fact.description} </p>
        <a href ="${fact.link}"><button> See More </button></a>
      </div>`
      console.log(  ReturnGradient(fact.background) )
      container.setAttribute("style",`${ReturnGradient(fact.background)} `);
      console.log(  ReturnGradient(fact.background) )
      console.log(container)
    }

}
