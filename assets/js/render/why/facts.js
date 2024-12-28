function RenderFactSection(){

  const facts = [
  {
    fact: "Global Warming Is Shrinking Animal Sizes",
    description: "Certain animals like salamanders and some birds are evolving to become smaller to dissipate heat better as temperatures rise.",
    link: "https://www.nature.com/articles/nature11824",
    image: "https://unsplash.com/photos/FV_PxCqgtwc"
  },
  {
    fact: "Climate Change Affects Earth’s Wobble",
    description: "Melting ice sheets, especially in Greenland, are redistributing Earth’s mass, slightly shifting the axis of rotation and affecting the planet's wobble.",
    link: "https://www.nasa.gov/topics/earth/features/earth20100301.html",
    image: "https://unsplash.com/photos/UXR--t8CZ1U"
  },
  {
    fact: "Fossil Fuels Create 'Zombie Forests'",
    description: "Rising temperatures and droughts are causing forests to die, leaving standing dead trees that trap carbon until they decompose.",
    link: "https://e360.yale.edu/features/ghost-forests-climate-change-saltwater-intrusion",
    image: "https://unsplash.com/photos/CXNGeW2pVMI"
  },
  {
    fact: "Lakes Are Becoming 'Gassy'",
    description: "Warmer lakes are releasing more methane, a potent greenhouse gas produced by bacteria thriving in warm waters.",
    link: "https://www.scientificamerican.com/article/more-methane-released-from-lakes-due-to-global-warming/",
    image: "https://unsplash.com/photos/TT-ROxWj9nA"
  },
  {
    fact: "Cloud Patterns Are Shifting",
    description: "Clouds are migrating toward the poles, potentially amplifying heating by reducing cloud cover over equatorial regions.",
    link: "https://www.pnas.org/doi/10.1073/pnas.1900295116",
    image: "https://unsplash.com/photos/Z6Hu4YMcDLE"
  },
  {
    fact: "Wine Is Changing Its Flavor",
    description: "Warming temperatures affect how grapes ripen, altering sugar levels, acidity, and aroma, impacting wine's flavor.",
    link: "https://www.npr.org/sections/thesalt/2019/04/22/715154522/how-climate-change-is-altering-wine",
    image: "https://unsplash.com/photos/YdThO5U3tvo"
  },
  {
    fact: "Ancient Viruses Could Awaken",
    description: "Melting permafrost may release long-dormant viruses and bacteria, like a 2016 anthrax outbreak in Siberia linked to a thawed reindeer carcass.",
    link: "https://www.bbc.com/news/science-environment-52318539",
    image: "https://unsplash.com/photos/FcZWuG3htJ4"
  },
  {
    fact: "The Oceans Are Losing Their Voice",
    description: "Warmer oceans alter how sound travels underwater, potentially disrupting marine species' communication and navigation.",
    link: "https://www.sciencedaily.com/releases/2018/12/181204103706.htm",
    image: "https://unsplash.com/photos/ViEbIRg6Jxs"
  },
  {
    fact: "Deserts Are 'Blooming' More Often",
    description: "Higher rainfall in some deserts leads to temporary wildflower blooms and ecosystems, though these are often short-lived.",
    link: "https://www.nationalgeographic.com/environment/article/desert-superblooms",
    image: "https://unsplash.com/photos/fx42VbZlLiQ"
  },
  {
    fact: "Extreme Weather Is Warping Earth’s Crust",
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
    <div class="fact_box">
    <p class="title--fact"> ${facts[i].fact} </p>
    <a href ="${facts[i].link}"><button> See More </button></a>
    </div>
    `
  }

  fact_container.innerHTML = html;

  function ReturnFactHTML(fact){
    return( `
      <div class="fact_grid">
        <div class="img_col">
          <p class="title"> Did You Know? </p>
          <p class="subtitle"> Learn about Climate Change</p>
        </div>
        <div class="fact_col">
          <p class="title"> ${fact.fact} </p>
          <p class="description"> ${fact.description} </p>
          <div class="divider"></div>
          <div class="facts-container"></div>
        </div>
      </div>
      `);
    }

}


RenderFactSection();
