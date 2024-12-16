import React from 'react';
import './Project.css';

function Projects({ isDarkMode }) {
  const projects = [
    { title: "Project 1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", image: "https://i.etsystatic.com/7587698/r/il/5c44aa/2079780425/il_fullxfull.2079780425_s6bu.jpg" },
    { title: "Project 2", description: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..", image: "https://i.etsystatic.com/7587698/r/il/5c44aa/2079780425/il_fullxfull.2079780425_s6bu.jpg" },
    { title: "Project 3", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..", image: "https://i.etsystatic.com/7587698/r/il/5c44aa/2079780425/il_fullxfull.2079780425_s6bu.jpg" },
  ];

  return (
    <div id="projects" className={`projects py-5 ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="row justify-content-center">
          {projects.map((project, index) => (
            <div className="col-md-4 col-lg-3 mb-4" key={index}>
              <div className="card">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href="#" className="btn project-btn">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
