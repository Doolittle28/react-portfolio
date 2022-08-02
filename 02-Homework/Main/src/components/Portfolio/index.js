import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Sound Scouter',
      description: 'Javascript',
      link: "https://lnbredemeyer.github.io/sound-scouter-p1/",
      repo: "https://github.com/lnbredemeyer/sound-scouter-p1"
    },
    {
      name: 'Dad Comedy Central',
      description: 'Javascript',
      link: "https://the-dadabase.herokuapp.com/",
      repo: "https://github.com/Skyw41k3r/project-2"
    },
    {
      name: 'Note Taker',
      description: 'Javascript',
      link: "https://note-taker-kevin.herokuapp.com/",
      repo: "https://github.com/Doolittle28/note-taker"
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
