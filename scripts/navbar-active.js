let currentActiveElement = null;

const intersectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const element = document.getElementById(`${entry.target.id}-btn`);
      if (entry.isIntersecting) {
        if (currentActiveElement) {
          currentActiveElement.classList.remove("active");
        }
        element.classList.add("active");
        currentActiveElement = element;
      }
    });
  },{rootMargin: "-50% 0px -50% 0px"}
);

const sections = document.querySelectorAll("section").forEach((section) => {
  intersectionObserver.observe(section);
});


