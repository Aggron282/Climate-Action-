var slideshow = [
  {
    content:`
    <p class="title">
      Climate Change Not Only Endangers the Polar Bears, it Also Endangers Us
    </p>
    <p class="subtitle">
     Climate Change is warming the oceans leading to the artic melting and rising sea levels, this will result in the mass death of beautiful animals such as polar bears and penguins
    </p>
    `,

  },
  {
    content:`
    <p class="title">
      Climate Change Makes Storms Worse
    </p>
    <p class="subtitle">
    Climate Change makes storms and natural disasters more intense and dangerous, climate change makes wildefires last longer and make storms more destructive
    </p>
    `,
  },
  {
    content:`
    <p class="title title--2">
      Climate Change Not Only Endangers the Polar Bears, it Also Endangers Us
    </p>
    <ul class = "slideshow_list_group">
      <li> Climate Change make us vulnerable to famine and damages crops </li>
      <li> The rise in temperatures makes droughts last longer leading to a massive food shortage  </li>
    </ul>
    `,
  },
  {
    content:`
    <p class="title title--3">
      Climate Change Not Only Endangers the Polar Bears, it Also Endangers Us
    </p>
    <p class="title title--4">
      If we want to solve Climate Change we need to act now or else the consequences will be dire and a cascade effect can occur
    </p>
    `,
  }

];


var counter = 0;
var slideshow_container = document.querySelector(".risks_showcase_container");
var content = document.querySelector(".slideshow_content")
var className = "background_risk--";
var milliseconds = 6000;
var left_arrow = document.querySelector(".arrow--left");
var right_arrow = document.querySelector(".arrow--right");

function ToggleSlideShow(toggle){

  counter += toggle;

  if(counter > slideshow.length - 2){
    counter = 0;
  }

  if(counter < 0){
    counter = slideshow.length - 1;
  }

  // slideshow_container.classList.add("away_transition")
  // setTimeout(
  //   ()=>{
    content.innerHTML = slideshow[counter].content;

    for(var i = 0 ; i < slideshow.length;i++)
    {
      slideshow_container.classList.remove("background_risk--"+i)
    }
    // console.log(counter);
    // slideshow_container.classList.remove("away_transition")
    slideshow_container.classList.add("background_risk--"+counter)


  // },milliseconds)


}

left_arrow.addEventListener("click",(e)=>{

  ToggleSlideShow(-1);

})

right_arrow.addEventListener("click",(e)=>{

  ToggleSlideShow(1);

});
