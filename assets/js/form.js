var join_form = document.querySelector(".action_form");
var join_button = document.querySelector(".help_button");
var join_container = document.querySelector(".join_banner_container");

var RenderJoinContent = ()=>{
  return  `
  <div class="join_banner">
    <p> Thanks for Joining! </p>
  </div>
  "
  `
}

join_form.addEventListener("submit",(e)=>{
  e.preventDefault();
  JoinExec();
});

join_button.addEventListener("click",(e)=>{
  e.preventDefault();
  JoinExec();
});


function JoinExec(){
  join_container.innerHTML = "";
  join_container.innerHTML = RenderJoinContent();
  setTimeout(()=>{
    var join_banner = document.querySelector(".join_banner");
    join_banner.classList.add("join_banner_leave");
  },1000);
}
