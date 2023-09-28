const skills = ["WEB DEVELOPER", "GRAPHIC DESIGNER", "MOTION EDITOR"];

const headlines = document.querySelectorAll(".headline1");
const triangle = document.getElementById("trianglesvg");

// Set the animation for the triangle
triangle.style.animation = "polygon-morph 3s ease-in-out infinite";
let currentIndex = 0;

function updateSkill() {
  headlines.forEach((headlineElement, index) => {
    headlineElement.classList.remove('fade-left')
    setTimeout(() => {
      headlineElement.innerHTML = skills[currentIndex];
      headlineElement.classList.add('fade-left')
      headlineElement.style.animationDelay = `${index * 0.015}s`;
    },500);
  });

  currentIndex = (currentIndex + 1) % skills.length;

  setTimeout(updateSkill, 4000);
}

updateSkill();

