const skills = [
  "WEB DEVELOPER",
  "BSC. ENGINEERING UNDERGRADUATE",
  "GRAPHIC DESIGNER",
  "MOTION EDITOR",
];

const headlineElement = document.getElementById("headline");

const trinagle = document.getElementById("trianglesvg");

trinagle.style.animation="polygon-morph 3s ease-in-out infinite"

headlineElement.style.animation="polygon 3s ease-in-out infinite"

let currentIndex = 0;

function updateSkill() {
  headlineElement.innerHTML = skills[currentIndex];
  currentIndex = (currentIndex + 1) % skills.length; 
  setTimeout(updateSkill, 3000); 
}

setTimeout(updateSkill, 300);
