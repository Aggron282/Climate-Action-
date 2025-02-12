function RenderFooter(container,class_){
container.innerHTML = `
  <div class="why_fixed_background"></div>

     <div class="overlay"></div>
        <div class=" custom-shape-divider-top-1734144435 ${class_}">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>

          </svg>

        </div>
        <div class="wrap">

          <div class="footer_col_logo">
          <img class="logo--footer" src = "./assets/imgs/logo--4.png"/>
          <p class="title">Snowclima Movement</p>
        </div>

        <div class="links_col">
          <p> Links </p>
          <ul>
            <a href = "./index.html" >  <li> Home Page </li> </a>
            <a href = "./why.html" >  <li> The Why </li> </a>
            <a href = "./risks.html" ><li> The Risks </li> </a>
            <a href = "./solutions.html" ><li> Get Involved </li> </a>
          </ul>
        </div>

        <div class="links_col">
            <p> Policy </p>
          <ul>
              <a href = "./private.html" > <li> Private Policy </li> </a>
              <a href = "./cite.html" >  <li> Citations </li> </a>
          </ul>

        </div>
        <div class="links_col">
            <p> Social Media </p>
          <ul>
              <a href = "./private.html" > <li> Instagram</li> </a>
              <a href = "./cite.html" >  <li> Facebook </li> </a>
          </ul>

        </div>

        <div class="links_col">
            <p> Resources </p>
          <ul>
              <a href = "./private.html" > <li> Wikipedia</li> </a>
              <a href = "./cite.html" >  <li> The Government </li> </a>
          </ul>

        </div>
      </div>
`
}

if(document.querySelector(".footer--home")){
    var container = document.querySelector(".footer--home");
    RenderFooter(container,"custom-shape-divider-top-1734144435");
}

if(document.querySelector(".footer--why")){
    var container = document.querySelector(".footer--why");
    RenderFooter(container,"custom-shape-divider-top-dark");
}

if(document.querySelector(".footer--risks")){
    var container = document.querySelector(".footer--risks");
    RenderFooter(container,"custom-shape-divider-top-1734144435");
}

if(document.querySelector(".footer--solutions")){
    var container = document.querySelector(".footer--solutions");
    RenderFooter(container,"custom-shape-divider-top-1734144435");
}
