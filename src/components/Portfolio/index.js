import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'evil-trivia',
      description: 'HTML/Bulma/API',
      link: "https://stephen-harding1.github.io/Evil-Trivia/",
      repo: "https://github.com/Stephen-Harding1/Evil-Trivia"
    },
    {
      name: 'weather-dashboard',
      description: 'Bootstrap/JavaScript',
      link: "https://r0ng13.github.io/Weather-Dashboard/",
      repo: "https://github.com/R0nG13/Weather-Dashboard"
    },
    {
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: "https://r0ng13.github.io/run-buddy/",
      repo: "https://github.com/R0nG13/run-buddy"
    },
    {
      name: 'work-day-scheduler',
      description: 'jQuery',
      link: "https://r0ng13.github.io/Work-Day-Scheduler/",
      repo: "https://github.com/R0nG13/Work-Day-Scheduler"
    },
    {
      name: 'code-quiz',
      description: 'JavaScript/CSS',
      link: "https://r0ng13.github.io/Code-Quiz/",
      repo: "https://github.com/R0nG13/Code-Quiz"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
