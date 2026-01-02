import './Projects.css';

function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="card-header">
        <h3 className="card-title">{project.title}</h3>
      </div>
      <p className="card-period">{project.period}</p>
      <p className="card-summary">{project.summary}</p>
      <div className="card-tech-preview">
        {project.details.techStack.slice(0, 3).map((tech, index) => (
          <span key={index} className="tech-badge">{tech}</span>
        ))}
        {project.details.techStack.length > 3 && (
          <span className="tech-badge">+{project.details.techStack.length - 3}</span>
        )}
      </div>
      <button className="card-link">View Details →</button>
    </div>
  );
}

export default ProjectCard;