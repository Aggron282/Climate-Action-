var counter = 0;
var milliseconds = 2000;

var config_risks_slideshow = [
  {
    right:`
    <div class="visual_slide--1">
      <img srcset="./assets/imgs/bear.png 1x, ./assets/imgs/bear.png 2x  " src "./assets/imgs/bear.png" />
    </div>
    `,
    left:
    `
    <div class="text_slide--1">
      <p class="title"> The More You Know</p>
      <p>  Climate change is changing water availability, making it scarcer in more regions. Global warming exacerbates water shortages in already water-stressed regions and is leading to an increased risk of agricultural droughts affecting crops, and ecological droughts increasing the vulnerability of ecosystems. Droughts can also stir destructive sand and dust storms that can move billions of tons of sand across continents. Deserts are expanding, reducing land for growing food. Many people now face the threat of not having enough water on a regular basis.</p>
    </div>
    `
  },
  {
    right:`
    <div class="visual_slide--2">
      <img srcset="./assets/imgs/bear.png 1x, ./assets/imgs/bear.png 2x  " src "./assets/imgs/bear.png" />
    </div>
    `,
    left:
    `
    <div class="text_slide--1">
      <p class="title"> The More You Know</p>
      <p>  Climate change is changing water availability, making it scarcer in more regions. Global warming exacerbates water shortages in already water-stressed regions and is leading to an increased risk of agricultural droughts affecting crops, and ecological droughts increasing the vulnerability of ecosystems. Droughts can also stir destructive sand and dust storms that can move billions of tons of sand across continents. Deserts are expanding, reducing land for growing food. Many people now face the threat of not having enough water on a regular basis.</p>
    </div>
    `
  }


]

var visual_container = document.querySelector(".risks_slideshow--visual");
var text_container = document.querySelector(".risks_slideshow--text");

function ToggleSlideShowRisks(){

  counter += 1;

  if(counter > config_risks_slideshow.length - 2){
    counter = 0;
  }

  if(counter < 0){
    counter = config_risks_slideshow.length - 1;
  }

  visual_container.classList.add("away_transition--left")
  text_container.classList.add("away_transition--right")
  console.log(config_risks_slideshow[counter])
  setTimeout(
    ()=>{

    visual_container.innerHTML = config_risks_slideshow[counter].right;
    text_container.innerHTML = config_risks_slideshow[counter].left;

    visual_container.classList.add("in_transition--left")
    text_container.classList.add("in_transition--right")
    visual_container.classList.remove("away_transition--left")
    text_container.classList.remove("away_transition--right")

  },2000)


}

function Init(){
  counter = 0;
  visual_container.innerHTML = config_risks_slideshow[0].right;
  text_container.innerHTML = config_risks_slideshow[0].left;
  visual_container.classList.add("in_transition--left")
  text_container.classList.add("in_transition--right")
  console.log("S")
}

Init();

setInterval(()=>{
    ToggleSlideShowRisks();
},8000)
