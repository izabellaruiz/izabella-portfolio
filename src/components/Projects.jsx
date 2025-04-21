import React from 'react';
import './Projects.css'; // We’ll keep this CSS local to the component

const projects = [
  {
    title: 'PostUp',
    image: '/images/postup.png', // Save this image in public/images
    description: 'An event discovery app that helps locals find pop-up markets, art shows, and more.',
  },
  {
    title: 'To-Do App',
    image: '/images/todo.png',
    description: 'A minimal to-do app for daily task tracking and productivity.',
  },
  {
    title: 'Exercise App',
    image: '/images/fitness.png',
    description: 'An app to log workouts, stay consistent, and celebrate fitness wins.',
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
