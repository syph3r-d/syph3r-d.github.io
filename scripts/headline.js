const skills = ["WEB DEVELOPER", "GRAPHIC DESIGNER", "MOTION EDITOR"];

const headlines = document.querySelectorAll(".headline1");
const triangle = document.getElementById("trianglesvg");

// Set the animation for the triangle
triangle.style.animation = "polygon-morph 3s ease-in-out infinite";
let currentIndex = 0;

function updateSkill() {
  headlines.forEach((headlineElement, index) => {
    headlineElement.style.opacity = "0";
    headlineElement.style.animation = "none";
    setTimeout(() => {
      headlineElement.innerHTML = skills[currentIndex];
      headlineElement.style.animation = "fade-left 3s ease-in-out"; 
      headlineElement.style.animationDelay = `${index * 0.01}s`;
    });
  });

  currentIndex = (currentIndex + 1) % skills.length;

  setTimeout(updateSkill, 3000);
}

updateSkill();

