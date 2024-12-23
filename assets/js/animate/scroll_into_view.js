function Scroll(el){
  console.log(el);
  el.scrollIntoView({
    behavior: 'smooth', // Optional for smooth scrolling
    block: 'start' // Scrolls to the top of the div
  });

}
