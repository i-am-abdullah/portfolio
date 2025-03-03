import { useState, useEffect, useRef } from 'react';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
import Skills from './sections/Skills.jsx';
import Loader from './sections/Loader.jsx';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Function to check if all images are loaded
    const checkIfImagesLoaded = () => {
      const images = document.getElementsByTagName('img');
      let loadedImages = 0;
      const totalImages = images.length;

      if (totalImages === 0) {
        setResourcesLoaded(true);
        return;
      }

      Array.from(images).forEach(img => {
        if (img.complete) {
          loadedImages++;
        } else {
          img.addEventListener('load', () => {
            loadedImages++;
            if (loadedImages === totalImages) {
              setResourcesLoaded(true);
            }
          });
        }
      });

      if (loadedImages === totalImages) {
        setResourcesLoaded(true);
      }
    };

    // Check if fonts are loaded
    document.fonts.ready.then(() => {
      checkIfImagesLoaded();
    });

    // Add a timeout to prevent infinite loading
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 second maximum loading time

    return () => clearTimeout(timeout);
  }, []);

  // Update loading state when resources are loaded
  useEffect(() => {
    if (resourcesLoaded) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Small delay for smooth transition
    }
  }, [resourcesLoaded]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main className="max-w-7xl mx-auto relative">
          <Navbar />
          <Hero />
          <About scrollToContact={scrollToContact} />
          <Skills />
          <WorkExperience />
          <Projects />
          {/* <Clients /> */}
          <Contact reff={contactRef} />
          <Footer />
        </main>
      )}
    </>
  );
};

export default App;