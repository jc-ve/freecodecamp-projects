"use strict";

const containerProjects = document.querySelector(".projects-container");

const btnLoadMore = document.querySelector(".btn--load");

let startingIndex = 0;
let endingIndex = 6;
let projectsDataArr = [];

fetch("https://cdn.jsdelivr.net/gh/jc-ve/projects-data/freecodecamp.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    projectsDataArr = data;
    displayProjects(projectsDataArr.slice(startingIndex, endingIndex));
  })
  .catch((err) => {
    containerProjects.innerHTML = `<p>No data retrieved. ${err}</p>`;
  });

const fetchMoreProjects = () => {
  startingIndex += 6;
  endingIndex += 6;

  displayProjects(projectsDataArr.slice(startingIndex, endingIndex));

  if (projectsDataArr.length <= endingIndex) {
    btnLoadMore.style.display = "none";
  }
};

const displayProjects = (projects) => {
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
            <a href="${codeLink}" target="_blank" class="card__link card__link--secondary" aria-label="Code link">
              <ion-icon name="code-outline"></ion-icon>
            </a>
          </div>
        </div>
    `;
      containerProjects.insertAdjacentHTML("beforeend", projectElement);
    }
  );
};

btnLoadMore.addEventListener("click", fetchMoreProjects);
