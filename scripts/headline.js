const skills = [
  "WEB DEVELOPER",
  "GRAPHIC DESIGNER",
  "MOTION EDITOR",
];


const headlines= document.querySelectorAll(".headline1");

const trinagle = document.getElementById("trianglesvg");

trinagle.style.animation="polygon-morph 3s ease-in-out infinite"

headlines.forEach((headlineElement,index) => {
  headlineElement.style.animation="fade-left 3s ease-in-out infinite"
  headlineElement.style.opacity="0.08"
  headlineElement.style.animationDelay=`${index*0.01}s`
});

let currentIndex = 0;

function updateSkill() {
  headlines.forEach((headline) => {
    headline.innerHTML = skills[currentIndex];
  });
  currentIndex = (currentIndex + 1) % skills.length; 
  setTimeout(updateSkill, 3000); 
}

setTimeout(updateSkill);
