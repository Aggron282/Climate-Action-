
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
        <img src = "https://doneereffectief.nl/wp-content/uploads/2024/11/opportunity-green-logo-white.png"/>
      </div>
      <div class="col-call">
      <img src = "https://doneereffectief.nl/wp-content/uploads/2024/11/opportunity-green-logo-white.png"/>
      </div>
      <div class="col-call">
      <img src = "https://doneereffectief.nl/wp-content/uploads/2024/11/opportunity-green-logo-white.png"/>
      </div>
      <div class="col-call">
      <img src = "https://doneereffectief.nl/wp-content/uploads/2024/11/opportunity-green-logo-white.png"/>
      </div>
      <div class="col-call">
      <img src = "https://doneereffectief.nl/wp-content/uploads/2024/11/opportunity-green-logo-white.png"/>
      </div>
      <div class="col-call">
      <img src = "https://doneereffectief.nl/wp-content/uploads/2024/11/opportunity-green-logo-white.png"/>
      </div>
  </div>
  `;

  container.innerHTML = html;


}

RenderRiskShowcase();
OverlayEffect("container","background-bottom");
