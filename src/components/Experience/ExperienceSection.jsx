import { useState } from 'react';
import { experiences } from '../../data/experiences';
import ExperienceCard from './ExperienceCard';
import Sidebar from '../common/Sidebar';
import './Experience.css';

function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleCardClick = (experience) => {
    setSelectedExperience(experience);
  };

  const handleCloseSidebar = () => {
    setSelectedExperience(null);
  };

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp) => (
            <ExperienceCard 
              key={exp.id} 
              experience={exp} 
              onClick={() => handleCardClick(exp)}
            />
          ))}
        </div>
      </div>
      
      {selectedExperience && (
        <Sidebar 
          isOpen={!!selectedExperience}
          onClose={handleCloseSidebar}
          title={selectedExperience.role}
          subtitle={`${selectedExperience.company} • ${selectedExperience.period}`}
        >
          <div className="sidebar-content">
            <p className="sidebar-description">{selectedExperience.details.description}</p>
            
            <h3 className="sidebar-heading">Key Achievements</h3>
            <ul className="sidebar-list">
              {selectedExperience.details.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>

            <h3 className="sidebar-heading">Tech Stack</h3>
            <div className="tech-stack">
              {selectedExperience.details.techStack.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </Sidebar>
      )}
    </section>
  );
}

export default ExperienceSection;