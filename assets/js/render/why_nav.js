var climate_bubble = document.querySelector(".why_bubble--climate");
var greed_bubble = document.querySelector(".why_bubble--greed");
var habitat_bubble = document.querySelector(".why_bubble--habitat");
var matters_bubble = document.querySelector(".why_bubble--matters");

climate_bubble.addEventListener("click",(e)=>{
  var el = document.querySelector(".why_oceans_slideshow");
  Scroll(el);
});

habitat_bubble.addEventListener("click",(e)=>{
  var el = document.querySelector(".habitat_loss_container");
  Scroll(el);
});

greed_bubble.addEventListener("click",(e)=>{
  var el = document.querySelector(".emission_container");
  Scroll(el);
});

matters_bubble.addEventListener("click",(e)=>{
  var el = document.querySelector(".why_it_matters_container");
  Scroll(el);
});
