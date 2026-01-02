import { useState } from 'react';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';
import Sidebar from '../common/Sidebar';
import './Projects.css';

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseSidebar = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => handleCardClick(project)}
            />
          ))}
        </div>
      </div>
      
      {selectedProject && (
        <Sidebar 
          isOpen={!!selectedProject}
          onClose={handleCloseSidebar}
          title={selectedProject.title}
          subtitle={selectedProject.period}
        >
          <div className="sidebar-content">
            <p className="sidebar-description">{selectedProject.details.description}</p>
            
            <h3 className="sidebar-heading">Key Features</h3>
            <ul className="sidebar-list">
              {selectedProject.details.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h3 className="sidebar-heading">Impact</h3>
            <p className="impact-text">{selectedProject.details.impact}</p>

            <h3 className="sidebar-heading">Tech Stack</h3>
            <div className="tech-stack">
              {selectedProject.details.techStack.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>

            {(selectedProject.details.github || selectedProject.details.demo) && (
              <div className="project-links">
                {selectedProject.details.github && (
                  <a href={selectedProject.details.github} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                    GitHub →
                  </a>
                )}
                {selectedProject.details.demo && (
                  <a href={selectedProject.details.demo} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                    Live Demo →
                  </a>
                )}
              </div>
            )}
          </div>
        </Sidebar>
      )}
    </section>
  );
}

export default ProjectsSection;