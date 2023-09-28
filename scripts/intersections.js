const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = `${entry.target.dataset.animation} 1s ease-in-out`;
    }else{
        entry.target.style.animation = "none";
    }
  });
},{
    rootMargin: "10% 0px 10% 0px"
});

document.querySelectorAll(".intersect").forEach((element) => {
  observer.observe(element);
});
