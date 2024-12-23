function animate_elements(element_class, ani_class) {
  const elementsToAnimate = document.querySelectorAll("." + element_class);
  console.log(ani_class, element_class);
  const observer = new IntersectionObserver((entries) => {
    console.log(entries, ani_class);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(ani_class);
      }
    });
  });

  elementsToAnimate.forEach((element) => {
    observer.observe(element, ani_class);
  });
}
