function OverlayEffect(container_name,bottom_container_name){

  const container = document.querySelector('.'+container_name);
  const backgroundBottom = document.querySelector('.'+bottom_container_name);

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    backgroundBottom.style.setProperty('--x', `${x}px`);
    backgroundBottom.style.setProperty('--y', `${y}px`);
  });

}
