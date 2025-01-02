var counter = 0;
var milliseconds = 2000;

var config_risks_slideshow = [
  {
    right:`
    <div class="visual_slide--1">
    <img src="./assets/imgs/slide/1.png"/>
    </div>
    `,
    left:
    `
    <div class="text_slide">
      <p class="title"> The More You Know </p>
      <p class="subtitle">
         Climate change is changing water availability,
         making it scarcer in more regions.
         <br>Global warming exacerbates water shortages in
         already water-stressed regions and is leading to an increased risk of agricultural droughts affecting crops
       </p>
    </div>

    `,
    style:"text_slide--1"
  },
  {
    right:`
    <div class="visual_slide--2">
    <img src="./assets/imgs/slide/2.png"/>
    </div>
    `,
    left:
    `
    <div class="text_slide">
      <p class="title">You Can Save Us!</p>
      <p class="subtitle subtitle--2">
      Learn More Below to Find Out How!
       </p>
       <button class="risk_slide_button">Learn More</button>
    </div>
    `,
    style:"text_slide--2"
  },
  {
    right:`
    <div class="visual_slide--3">
    <img src="./assets/imgs/slide/3.png"/>
    </div>
    `,
    left:
    `
    <div class="text_slide">
      <p class="title">Every Drop Counts</p>
      <p class="subtitle">
         Act Now to Save Our Future
       </p>
       <button class="risk_slide_button">Learn More</button>

    </div>

    `,
    style:"text_slide--3"
  }


]

var visual_container = document.querySelector(".risks_slideshow--visual");
var text_container = document.querySelector(".risks_slideshow--text");

function ToggleSlideShowRisks(){

  counter += 1;

  if(counter > config_risks_slideshow.length -1){
    counter = 0;
  }

  if(counter < 0){
    counter = config_risks_slideshow.length - 1;
  }

  visual_container.classList.add("away_transition--left")
  text_container.classList.add("away_transition--right")

  setTimeout(
    ()=>{

    visual_container.innerHTML = config_risks_slideshow[counter].right;
    text_container.innerHTML = config_risks_slideshow[counter].left;

    visual_container.classList.add("in_transition--left")
    text_container.classList.add("in_transition--right")
    visual_container.classList.remove("away_transition--left")
    text_container.classList.remove("away_transition--right")
    for(var i =0; i < config_risks_slideshow.length; i++){
      text_container.classList.remove(config_risks_slideshow[i].style)
    }
    text_container.classList.add(config_risks_slideshow[counter].style)
  },2000)


}

function Init(){
  counter = 0;
  visual_container.innerHTML = config_risks_slideshow[1].right;
  text_container.innerHTML = config_risks_slideshow[1].left;
  visual_container.classList.add("in_transition--left")
  text_container.classList.add("in_transition--right")
  text_container.classList.add(config_risks_slideshow[1].style)
  console.log("S")
}

Init();

setInterval(()=>{
    ToggleSlideShowRisks();
},8000)
