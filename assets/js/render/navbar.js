
var navbar = document.querySelector(".navbar");



function RenderNavbar(){

  navbar.innerHTML = `
  <nav class="climate-navbar">
      <div class="nav-container">
          <div class="logo">
              <img src = "./assets/imgs/logo_nav.png"/>
              <p class="title">Polar Movement </p>
          </div>
          <ul class="nav-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="why.html">The Why</a></li>
              <li><a href="risks.html">The Risks</a></li>
              <li><a href="solutions.html">Get Involved</a></li>
          </ul>
          <div class="hamburger" onclick="toggleMenu()">☰</div>
      </div>

      <!-- Mobile Menu -->
           <ul class="mobile-menu" id="mobileMenu">
               <li><a href="index.html">Home</a></li>
               <li><a href="solutions.html">Solutions</a></li>
               <li><a href="risks.html">Risks</a></li>
               <li><a href="why.html">The Why</a></li>
           </ul>
  </nav>

        `;


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
