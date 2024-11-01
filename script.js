document.addEventListener("mousemove", function(e) {
  const effect = document.querySelector(".background-effect");
  const x = (window.innerWidth - e.pageX * 2) / 90;
  const y = (window.innerHeight - e.pageY * 2) / 90;
  effect.style.transform = `translateX(${x}px) translateY(${y}px)`;
});

