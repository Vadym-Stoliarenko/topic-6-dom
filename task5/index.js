const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  const animClass = circle.getAttribute("data-anim");
  circle.classList.add(animClass);
})
