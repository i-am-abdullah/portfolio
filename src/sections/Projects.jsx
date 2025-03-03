import { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, FolderKanban } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { myProjects } from '../constants';

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  
  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1;
      }
      return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1;
    });
  };

  useGSAP(() => {
    const timeline = gsap.timeline();
    
    timeline
      .fromTo('.project-content', 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'power3.out' }
      )
      .fromTo('.tech-tag',
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.3, ease: 'power2.out' },
        "-=0.2"
      );
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space my-20">
      <div className="flex items-center gap-2 mb-12">
        <FolderKanban  className="w-8 h-8 text-white-600" />
        <h2 className="head-text">Selected Work</h2>
      </div>

      <div className="grid lg:grid-cols-1 grid-cols-1 mt-12 gap-5 w-full relative">
        <div className="bg-black-200 backdrop-blur-lg rounded-2xl border border-black-300 overflow-hidden">
          <div className="p-6 sm:p-8">
            {/* Project Header - Redesigned for mobile */}
            <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-between gap-4 mb-8">
              {/* Logo and Title Container */}
              <div className="flex flex-col items-center sm:flex-row sm:items-center gap-4 w-full">
                <div 
                  className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl project-content"
                  style={currentProject.logoStyle}
                >
                  <img 
                    className="w-12 h-12 object-contain" 
                    src={currentProject.logo} 
                    alt={`${currentProject.title} logo`}
                  />
                </div>
                
                <div className="project-content text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-white">
                    {currentProject.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Project {selectedProjectIndex + 1} of {myProjects.length}
                  </p>
                </div>
              </div>
              
              <a
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
                className="group project-content flex items-center gap-2 px-6 py-2 bg-white text-gray-900 rounded-lg font-medium transition-all duration-300 hover:bg-gray-100 w-full sm:w-[200px] justify-center whitespace-nowrap"
              >
                <span>View Project</span>
                <ArrowUpRight 
                  size={18} 
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>

            {/* Project Description */}
            <div className="space-y-4 mb-8 project-content">
              <p className="text-gray-300 text-lg leading-relaxed">
                {currentProject.desc}
              </p>
              <p className="text-gray-400">
                {currentProject.subdesc}
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-4 project-content">
              <h4 className="text-white font-medium text-sm uppercase tracking-wider">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies?.map((tech, index) => (
                  <span 
                    key={index}
                    className="tech-tag px-4 py-2 bg-[#1C1C21] text-gray-300 rounded-lg text-sm 
                             transition-colors cursor-default
                             border border-[#1C1C21] hover:border-black-500
                             flex items-center justify-center"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-end items-center mt-8 gap-2 project-content">
              <button
                onClick={() => handleNavigation('previous')}
                className="p-2 rounded-lg bg-[#1C1C21]  transition-colors
                         border border-[#1C1C21] hover:border-black-500"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} className="text-white" />
              </button>
              <button
                onClick={() => handleNavigation('next')}
                className="p-2 rounded-lg bg-[#1C1C21]  transition-colors
                         border border-[#1C1C21] hover:border-black-500"
                aria-label="Next project"
              >
                <ChevronRight size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;