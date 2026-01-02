import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-text">
            I'm a Full-Stack AI Developer with a strong background in building intelligent systems 
            that solve real-world problems. My journey began in enterprise software consulting at 
            SAP, where I specialized in backend development and system integrations.
          </p>
          <p className="about-text">
            Currently pursuing my Master's in Computer Science at Northeastern University, I'm 
            focused on AI/ML engineering, building RAG pipelines, and creating data-driven applications. 
            I love the intersection of backend architecture and intelligent systems—whether it's 
            optimizing data pipelines or implementing cutting-edge AI solutions.
          </p>
          <p className="about-text">
            When I'm not coding, you'll find me exploring new ML frameworks, contributing to open-source 
            projects, or diving deep into the latest research in AI and distributed systems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;