import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-description">
          I'm always open to new opportunities, collaborations, or just a chat about tech. 
          Feel free to reach out!
        </p>
        <div className="contact-links">
          <a href="mailto:shevkari.n@northeastern.edu" className="contact-link">
            <span className="contact-icon">✉</span>
            <span>shevkari.n@northeastern.edu</span>
          </a>
          <a href="https://www.linkedin.com/in/nayna-shevkari" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-icon">in</span>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/naynashevkari" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-icon">{ }</span>
            <span>GitHub</span>
          </a>
          <a href="tel:+16099821652" className="contact-link">
            <span className="contact-icon">📱</span>
            <span>+1 (609) 982-1652</span>
          </a>
        </div>
      </div>
      <footer className="footer">
        <p>© 2026 Nayna Shevkari. Built with React & Vite.</p>
      </footer>
    </section>
  );
}

export default Contact;