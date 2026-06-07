// ===============================
// TYPING EFFECT
// ===============================

const words = [
  "Web Developer",
  "Frontend Developer",
  "Problem Solver",
  "Tech Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!deleting) {

    typingElement.textContent =
      currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {

      deleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }

  } else {

    typingElement.textContent =
      currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

      deleting = false;

      wordIndex++;

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(
    typeEffect,
    deleting ? 60 : 120
  );
}

typeEffect();


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(
  ".section, .project-card, .skill-card, .achievement-card, .certificate-card"
);

function revealOnScroll() {

  revealElements.forEach((element) => {

    const windowHeight = window.innerHeight;

    const revealTop =
      element.getBoundingClientRect().top;

    const revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {

      element.classList.add("show");

    }

  });

}

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();


// ===============================
// ACTIVE NAVBAR LINKS
// ===============================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
".nav-links a"
);

window.addEventListener(
"scroll",
()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop;

const sectionHeight =
section.clientHeight;

if(
pageYOffset >=
sectionTop - 200
){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove(
"active-link"
);

if(
link.getAttribute("href")
=== "#" + current
){

link.classList.add(
"active-link"
);

}

});

});


// ===============================
// COUNTER ANIMATION
// ===============================

const counters =
document.querySelectorAll(
".stat-card h3"
);

let counterStarted = false;

function startCounter() {

if(counterStarted) return;

const statsSection =
document.querySelector(
"#about"
);

const sectionTop =
statsSection.getBoundingClientRect().top;

if(
sectionTop <
window.innerHeight - 100
){

counterStarted = true;

counters.forEach(counter=>{

const targetText =
counter.innerText;

const target =
parseInt(targetText);

let count = 0;

const speed = 50;

const updateCount = ()=>{

if(count < target){

count++;

counter.innerText =
count + "+";

setTimeout(
updateCount,
speed
);

}else{

if(targetText.includes("+")){

counter.innerText =
target + "+";

}else{

counter.innerText =
target;
}

}

};

updateCount();

});

}

}

window.addEventListener(
"scroll",
startCounter
);

startCounter();


// ===============================
// SMOOTH CARD HOVER EFFECT
// ===============================

const cards =
document.querySelectorAll(
".project-card, .skill-card"
);

cards.forEach(card=>{

card.addEventListener(
"mousemove",
(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

card.style.transform =
`perspective(1000px)
rotateX(${(y-150)/30}deg)
rotateY(${-(x-150)/30}deg)
translateY(-10px)`;

});

card.addEventListener(
"mouseleave",
()=>{

card.style.transform =
"perspective(1000px) rotateX(0deg) rotateY(0deg)";

});

});


// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================

const navbar =
document.querySelector(
".navbar"
);

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 50){

navbar.style.boxShadow =
"0 5px 25px rgba(0,0,0,0.3)";

}else{

navbar.style.boxShadow =
"none";

}

});