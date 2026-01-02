import './Experience.css';

function ExperienceCard({ experience, onClick }) {
  return (
    <div className="experience-card" onClick={onClick}>
      <div className="card-header">
        <h3 className="card-title">{experience.role}</h3>
        <span className="card-period">{experience.period}</span>
      </div>
      <p className="card-company">{experience.company} • {experience.location}</p>
      <p className="card-summary">{experience.summary}</p>
      <button className="card-link">Learn More →</button>
    </div>
  );
}

export default ExperienceCard;