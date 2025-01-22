
function RenderRiskShowcase(){

  var container = document.querySelector(".risks_showcase_container");

  var html = `



  <div class="container">
    <div class="background-top"></div>
    <div class="background-bottom"></div>
    <div class="inner-container--risks">

        <div class="text-container">
            <p class="title">The Risks</p>
        </div>





    </div>
  </div>
  <div class="text-container--call">
      <div><p class="title">Help Out Here -</p></div>
      <div class="col-call">
        <img src = "./assets/imgs/org/6.png"/>
      </div>
      <div class="col-call">
        <img src = "./assets/imgs/org/1.png" />
      </div>
      <div class="col-call">
        <img src = "./assets/imgs/org/2.png" />
      </div>
      <div class="col-call">
        <img src = "./assets/imgs/org/3.png" />
      </div>
      <div class="col-call">
        <img src = "./assets/imgs/org/4.png" />
      </div>
      <div class="col-call">
        <img src = "./assets/imgs/org/5.png" />
      </div>
  </div>
  `;

  container.innerHTML = html;


}

RenderRiskShowcase();
OverlayEffect("container","background-bottom");
