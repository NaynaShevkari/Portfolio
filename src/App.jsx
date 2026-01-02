import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import ExperienceSection from './components/Experience/ExperienceSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <About />
      <ExperienceSection />
      <ProjectsSection />
      <Contact />
      <ScrollToTop/>
    </div>
  );
}

export default App;