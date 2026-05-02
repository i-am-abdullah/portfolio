import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import Hero from './sections/Hero.jsx';
import Navbar from './sections/Navbar.jsx';
import Loader from './sections/Loader.jsx';

const About = lazy(() => import('./sections/About.jsx'));
const Skills = lazy(() => import('./sections/Skills.jsx'));
const WorkExperience = lazy(() => import('./sections/Experience.jsx'));
const Projects = lazy(() => import('./sections/Projects.jsx'));
const Contact = lazy(() => import('./sections/Contact.jsx'));
const Footer = lazy(() => import('./sections/Footer.jsx'));

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
          <Suspense fallback={null}>
            <About scrollToContact={scrollToContact} />
            <Skills />
            <WorkExperience />
            <Projects />
            <Contact reff={contactRef} />
            <Footer />
          </Suspense>
        </main>
      )}
    </>
  );
};

export default App;