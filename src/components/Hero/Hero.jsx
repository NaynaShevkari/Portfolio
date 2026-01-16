import './Hero.css';
import profilePhoto from '../../assets/profile.jpg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Nayna Shevkari</h1>
          <h2 className="hero-subtitle">AI Developer & Full-Stack Engineer</h2>
          <p className="hero-description">
            Building intelligent systems that solve real problems
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={profilePhoto} alt="Nayna Shevkari" />
        </div>
      </div>
    </section>
  );
}

export default Hero;