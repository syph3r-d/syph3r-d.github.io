const skills = [
  "WEB DEVELOPER",
  "GRAPHIC DESIGNER",
  "VIDEO EDITOR",
  "MOTION GRAPHICS DESIGNER",
];

const headlineElement = document.getElementById("headline");

headlineElement.classList.add("rotation")

let currentIndex = 0;

function updateSkill() {
  headlineElement.innerHTML = skills[currentIndex];
  currentIndex = (currentIndex + 1) % skills.length; // Cycle through skills in a loop
  setTimeout(updateSkill, 3000); // Call this function again after 3 seconds
}

setTimeout(updateSkill, 300); // Call this function after 3 seconds
