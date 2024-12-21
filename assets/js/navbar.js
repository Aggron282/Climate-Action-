
var navbar = document.querySelector(".navbar");


function RenderNavbar(){

  navbar.innerHTML = `
      <div class="link_box link_box--title link_nav--home">
        <a href = "./index.html" class="link_nav_title link_nav--home">
          Snowclima Movement
        </a>
      </div>
        <div class="link_box link_nav--why">
          <a href = "./why.html"class="link_nav">
            How We Got Here
          </a>
        </div>
        <div class="link_box link_nav--risks">
          <a class="link_nav " href = "./risks.html">
            The Risks
          </a>
        </div>
        <div class="link_box link_nav--solutions">
          <a class="link_nav " href  = "./solutions.html">
            Solutions
          </a>
        </div>
        `

        var home_nav = document.querySelector(".link_nav--home");
        var risks_nav = document.querySelector(".link_nav--risks");
        var solutions_nav = document.querySelector(".link_nav--solutions");
        var why_nav = document.querySelector(".link_nav--why");

        why_nav.addEventListener("click",(e)=>{
            window.location.assign("why.html")
        });

        home_nav.addEventListener("click",(e)=>{
          window.location.assign("index.html")
        });

        solutions_nav.addEventListener("click",(e)=>{
          window.location.assign("solutions.html")
        });

        risks_nav.addEventListener("click",(e)=>{
          window.location.assign("risks.html")
        });
}

 RenderNavbar();
