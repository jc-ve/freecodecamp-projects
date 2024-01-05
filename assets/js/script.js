"use strict";
const containerProjects = document.querySelector(".projects-container");

const projects = [
  {
    title: "Cat Photo App",
    description:
      "In this project, I learned the most common HTML tags by building my own cat photo app.",
    isCertificationProject: false,
    tag: "rwd",
    skills: ["HTML"],
    projLink:
      "https://jc-ve.github.io/responsive-web-design/projects/cat-photo-app/",
    codeLink:
      "https://github.com/jc-ve/responsive-web-design/tree/main/projects/cat-photo-app",
  },
  {
    title: "Cafe Menu",
    description:
      "In this project, I learned how to use CSS to set the color, font, size, and other aspects of HTML elements.",
    isCertificationProject: false,
    tag: "rwd",
    skills: ["HTML", "CSS"],
    projLink:
      "https://jc-ve.github.io/responsive-web-design/projects/cafe-menu/",
    codeLink:
      "https://github.com/jc-ve/responsive-web-design/tree/main/projects/cafe-menu",
  },
  {
    title: "Colored Markers",
    description:
      "In this project, I learned different ways to set color values and how to pair colors with each other.",
    isCertificationProject: false,
    tag: "rwd",
    skills: ["HTML", "CSS"],
    projLink:
      "https://jc-ve.github.io/responsive-web-design/projects/colored-markers/",
    codeLink:
      "https://github.com/jc-ve/responsive-web-design/tree/main/projects/colored-markers",
  },
  {
    title: "Registration Form",
    description:
      "In this project, I learned how to control what types of data people can type into a form, and some new CSS tools for styling pages.",
    isCertificationProject: false,
    tag: "rwd",
    skills: ["HTML", "CSS"],
    projLink:
      "https://jc-ve.github.io/responsive-web-design/projects/registration-form/",
    codeLink:
      "https://github.com/jc-ve/responsive-web-design/tree/main/projects/registration-form",
  },
  {
    title: "Survey Form",
    description:
      "In this project, I built a survey form to collect data from users.",
    isCertificationProject: true,
    tag: "rwd",
    skills: ["HTML", "CSS"],
    projLink:
      "https://jc-ve.github.io/responsive-web-design/projects/survey-form/",
    codeLink:
      "https://github.com/jc-ve/responsive-web-design/tree/main/projects/survey-form",
  },
  {
    title: "Rothko Painting",
    description:
      "In this project, I used CSS and the Box Model to create my own Rothko-style rectangular art pieces.",
    isCertificationProject: false,
    tag: "rwd",
    skills: ["HTML", "CSS"],
    projLink:
      "https://jc-ve.github.io/responsive-web-design/projects/rothko-painting/",
    codeLink:
      "https://github.com/jc-ve/responsive-web-design/tree/main/projects/rothko-painting",
  },
  {
    title: "Flexbox Photo Gallery",
    description:
      "In this project, I used Flexbox to build a responsive photo gallery webpage.",
    isCertificationProject: false,
    tag: "rwd",
    skills: ["HTML", "CSS"],
    projLink:
      "https://jc-ve.github.io/responsive-web-design/projects/flexbox-photo-gallery/",
    codeLink:
      "https://github.com/jc-ve/responsive-web-design/tree/main/projects/flexbox-photo-gallery",
  },
  {
    title: "Nutrition Label",
    description:
      "In this project, I learned how to style text, adjust line height, and position your text using CSS.",
    isCertificationProject: false,
    tag: "rwd",
    skills: ["HTML", "CSS"],
    projLink:
      "https://jc-ve.github.io/responsive-web-design/projects/nutrition-label/",
    codeLink:
      "https://github.com/jc-ve/responsive-web-design/tree/main/projects/nutrition-label",
  },
  {
    title: "Quiz",
    description:
      "In this project, I learned accessibility tools such as keyboard shortcuts, ARIA attributes, and design best practices.",
    isCertificationProject: false,
    tag: "rwd",
    skills: ["HTML", "CSS"],
    projLink: "https://jc-ve.github.io/responsive-web-design/projects/quiz/",
    codeLink:
      "https://github.com/jc-ve/responsive-web-design/tree/main/projects/quiz",
  },
  {
    title: "Tribute Page",
    description:
      "In this project, I built a tribute page for Dr. Norman Borlaug.",
    isCertificationProject: true,
    tag: "rwd",
    skills: ["HTML", "CSS"],
    projLink:
      "https://jc-ve.github.io/responsive-web-design/projects/tribute-page/",
    codeLink:
      "https://github.com/jc-ve/responsive-web-design/tree/main/projects/tribute-page",
  },
  {
    title: "Balance Sheet",
    description:
      "In this project, I learned how to change the style of an element when you hover over it with your mouse, and trigger other events on your webpage.",
    isCertificationProject: false,
    tag: "rwd",
    skills: ["HTML", "CSS"],
    projLink:
      "https://jc-ve.github.io/responsive-web-design/projects/balance-sheet/",
    codeLink:
      "https://github.com/jc-ve/responsive-web-design/tree/main/projects/balance-sheet",
  },
  {
    title: "Cat Painting",
    description:
      "In this project, I learned about working with absolute positioning, the z-index property, and the transform property.",
    isCertificationProject: false,
    tag: "rwd",
    skills: ["HTML", "CSS"],
    projLink:
      "https://jc-ve.github.io/responsive-web-design/projects/cat-painting/",
    codeLink:
      "https://github.com/jc-ve/responsive-web-design/tree/main/projects/cat-painting",
  },
  {
    title: "Piano",
    description:
      "In this project, I learned more about media queries and pseudo selectors.",
    isCertificationProject: false,
    tag: "rwd",
    skills: ["HTML", "CSS"],
    projLink:
      "https://jc-ve.github.io/responsive-web-design/projects/cat-painting/",
    codeLink:
      "https://github.com/jc-ve/responsive-web-design/tree/main/projects/cat-painting",
  },
  {
    title: "Technical Documentation Page",
    description:
      "In this project, I created a technical documentation page to serve as intruction or reference for a topic.",
    isCertificationProject: true,
    tag: "rwd",
    skills: ["HTML", "CSS"],
    projLink:
      "https://jc-ve.github.io/responsive-web-design/projects/technical-documentation/",
    codeLink:
      "https://github.com/jc-ve/responsive-web-design/tree/main/projects/technical-documentation",
  },
  {
    title: "City Skyline",
    description:
      "In this project, I learned how to configure CSS variables so you can reuse them whenever you want.",
    isCertificationProject: false,
    tag: "rwd",
    skills: ["HTML", "CSS"],
    projLink:
      "https://jc-ve.github.io/responsive-web-design/projects/city-skyline/",
    codeLink:
      "https://github.com/jc-ve/responsive-web-design/tree/main/projects/city-skyline",
  },
  {
    title: "Magazine",
    description:
      "In this project, I learned how to use CSS Grid, including concepts like grid rows and grid columns.",
    isCertificationProject: false,
    tag: "rwd",
    skills: ["HTML", "CSS"],
    projLink:
      "https://jc-ve.github.io/responsive-web-design/projects/magazine/",
    codeLink:
      "https://github.com/jc-ve/responsive-web-design/tree/main/projects/magazine",
  },
  {
    title: "Product Landing Page",
    description:
      "In this project, I built a product landing page to market a product.",
    isCertificationProject: true,
    tag: "rwd",
    skills: ["HTML", "CSS"],
    projLink:
      "https://jc-ve.github.io/responsive-web-design/projects/product-landing-page/",
    codeLink:
      "https://github.com/jc-ve/responsive-web-design/tree/main/projects/product-landing-page",
  },
  {
    title: "Ferris Wheel",
    description:
      "In this project, I learned how to use CSS to animate elements, transform them, and adjust their speed.",
    isCertificationProject: false,
    tag: "rwd",
    skills: ["HTML", "CSS"],
    projLink:
      "https://jc-ve.github.io/responsive-web-design/projects/ferris-wheel/",
    codeLink:
      "https://github.com/jc-ve/responsive-web-design/tree/main/projects/ferris-wheel",
  },
  {
    title: "Penguin",
    description:
      "In this project, I used CSS transforms to position and resize the parts of your penguin, create a background, and animate your work.",
    isCertificationProject: false,
    tag: "rwd",
    skills: ["HTML", "CSS"],
    projLink: "https://jc-ve.github.io/responsive-web-design/projects/penguin/",
    codeLink:
      "https://github.com/jc-ve/responsive-web-design/tree/main/projects/penguin",
  },
  {
    title: "Personal Portfolio",
    description: "In this project, I built my own personal portfolio page.",
    isCertificationProject: true,
    tag: "rwd",
    skills: ["HTML", "CSS"],
    projLink:
      "https://jc-ve.github.io/responsive-web-design/projects/personal-portfolio/",
    codeLink:
      "https://github.com/jc-ve/responsive-web-design/tree/main/projects/personal-portfolio",
  },
  {
    title: "Role Playing Game",
    description:
      "In this project, I learned how to work with arrays, strings, objects, functions, loops, if/else statements, and more.",
    isCertificationProject: false,
    tag: "jda",
    skills: ["HTML", "CSS", "JavaScript"],
    projLink: "https://jc-ve.github.io/javascript-projects/dragon-repeller/",
    codeLink:
      "https://github.com/jc-ve/javascript-projects/tree/main/dragon-repeller",
  },
  {
    title: "Calorie Counter",
    description:
      "In this project, I learned basic regular expressions, template literals, the addEventListener() method, and more.",
    isCertificationProject: false,
    tag: "jda",
    skills: ["HTML", "CSS", "JavaScript"],
    projLink: "https://jc-ve.github.io/javascript-projects/calorie-counter/",
    codeLink:
      "https://github.com/jc-ve/javascript-projects/tree/main/calorie-counter",
  },
  {
    title: "Music Player",
    description:
      "In this project, I learned fundamental concepts such as handling audio playback, managing a playlist, implementing play, pause, next, previous, and shuffle functionalities.",
    isCertificationProject: false,
    tag: "jda",
    skills: ["HTML", "CSS", "JavaScript"],
    projLink: "https://jc-ve.github.io/javascript-projects/music-player-app/",
    codeLink:
      "https://github.com/jc-ve/javascript-projects/tree/main/music-player-app",
  },
  {
    title: "Music Player",
    description:
      "In this project, I learned fundamental concepts such as handling audio playback, managing a playlist, implementing play, pause, next, previous, and shuffle functionalities.",
    isCertificationProject: false,
    tag: "jda",
    skills: ["HTML", "CSS", "JavaScript"],
    projLink: "https://jc-ve.github.io/javascript-projects/music-player-app/",
    codeLink:
      "https://github.com/jc-ve/javascript-projects/tree/main/music-player-app",
  },
];

const displayProjects = () => {
  projects.forEach(
    ({
      title,
      description,
      isCertificationProject,
      skills,
      projLink,
      codeLink,
    }) => {
      let skillsContainer = [];

      skills.forEach((skill) => {
        skillsContainer.push(
          `<span class="card__skill card__skill--${skill.toLowerCase()}">${skill}</span>`
        );
      });

      const projectElement = `
        <div class="card">
          <span class="card__tag u-${
            isCertificationProject === true
              ? "block u-margin-bottom-md"
              : "hidden"
          }">Certification Project</span>
          <a href="${projLink}" target="_blank" class="card__title">${title}</a>
          <div class="card__skills">
            ${skillsContainer.join(" ")}
          </div>
          <p class="card__description">${description}</p>
          <div class="card__links">
            <a href="${projLink}" target="_blank" class="card__link card__link--primary">View Project</a>
            <a href="${codeLink}" target="_blank" class="card__link card__link--secondary">
              <ion-icon name="code-outline"></ion-icon>
            </a>
          </div>
        </div>
    `;
      containerProjects.insertAdjacentHTML("afterbegin", projectElement);
    }
  );
};
displayProjects();
