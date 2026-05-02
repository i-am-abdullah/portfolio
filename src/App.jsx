import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import Hero from './sections/Hero.jsx';
import Navbar from './sections/Navbar.jsx';

const About = lazy(() => import('./sections/About.jsx'));
const Skills = lazy(() => import('./sections/Skills.jsx'));
const WorkExperience = lazy(() => import('./sections/Experience.jsx'));
const Projects = lazy(() => import('./sections/Projects.jsx'));
const Contact = lazy(() => import('./sections/Contact.jsx'));
const Footer = lazy(() => import('./sections/Footer.jsx'));

const removeHtmlLoader = () => document.getElementById('initial-loader')?.remove();

const App = () => {
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const checkIfImagesLoaded = () => {
      const images = document.getElementsByTagName('img');
      const totalImages = images.length;

      if (totalImages === 0) {
        setResourcesLoaded(true);
        return;
      }

      let loadedImages = 0;
      Array.from(images).forEach(img => {
        if (img.complete) {
          loadedImages++;
        } else {
          img.addEventListener('load', () => {
            loadedImages++;
            if (loadedImages === totalImages) setResourcesLoaded(true);
          });
        }
      });

      if (loadedImages === totalImages) setResourcesLoaded(true);
    };

    document.fonts.ready.then(checkIfImagesLoaded);

    const timeout = setTimeout(removeHtmlLoader, 5000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (resourcesLoaded) {
      const t = setTimeout(removeHtmlLoader, 500);
      return () => clearTimeout(t);
    }
  }, [resourcesLoaded]);

  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <About scrollToContact={scrollToContact} />
        <Skills />
        <WorkExperience />
        <Projects />
        <Contact reff={contactRef} />
        <Footer />
      </Suspense>
    </main>
  );
};

export default App;
