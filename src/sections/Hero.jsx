import { useEffect, useRef } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import gsap from "gsap";
import Button from "../components/Button";

const Hero = () => {
  const introRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const leftSocialRef = useRef(null);
  const rightEmailRef = useRef(null);
  const bottomSocialRef = useRef(null);

  useEffect(() => {
    // Create timeline
    const tl = gsap.timeline({
      defaults: {
        ease: "power4.out",
        duration: 1
      }
    });

    // Main content animations
    tl.fromTo(introRef.current,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8
      }
    )
      .fromTo(nameRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 1
        },
        "-=0.4"
      )
      .fromTo(titleRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 1
        },
        "-=0.6"
      )
      .fromTo(descRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 1
        },
        "-=0.6"
      )
      .fromTo(buttonRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8
        },
        "-=0.6"
      );

    // Social links animations
    gsap.fromTo(leftSocialRef.current,
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power4.out",
        delay: 1.2
      }
    );

    gsap.fromTo(rightEmailRef.current,
      {
        opacity: 0,
        x: 50
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power4.out",
        delay: 1.2
      }
    );

    gsap.fromTo(bottomSocialRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        delay: 1.2
      }
    );

    // Social icons animation
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
      gsap.fromTo(icon,
        {
          opacity: 0,
          scale: 0
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          delay: 1.5 + (index * 0.1),
          ease: "back.out(1.7)"
        }
      );
    });

    return () => {
      // Cleanup animations
      tl.kill();
      gsap.killTweensOf([leftSocialRef.current, rightEmailRef.current, bottomSocialRef.current]);
      gsap.killTweensOf('.social-icon');
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
      <div className="w-full">
        <h2 ref={introRef} className="text-gray-400 mb-2 font-mono text-md sm:text-sm md:text-base">
          Hi, my name is
        </h2>

        <h1 ref={nameRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white sm:mb-0 leading-snug sm:leading-tight">
          Abdullah.
        </h1>

        <h1 ref={titleRef} className="text-3xl md:text-5xl lg:text-5xl text-gray-300 mb-3 md:mt-2 lg:mt-4 font-medium leading-snug sm:leading-tight">
          Full Stack AI Engineer
        </h1>

        <p ref={descRef} className="max-w-xl text-gray-400 grid-subtext lg:mt-5">
I'm a Senior Full Stack AI Engineer specializing in end-to-end system design and Agentic AI workflows. Currently, I'm focused on building scalable, multi-platform solutions spanning Web, Mobile, and AI-powered applications.
        </p>

        <div ref={buttonRef} className="w-full lg:w-1/4">
        <a href="https://drive.google.com/file/d/1muM_QWl6GV18yQl2bLfgueGn2IqaPGYX/view?usp=sharing">
          <Button
            name="Download Resume"
            isBeam
            containerClass="w-full mt-6 lg:mt-8"
          />
          </a>
        </div>

      </div>

      {/* Desktop Left Social Bar */}
      <div ref={leftSocialRef} className="fixed left-10 bottom-0 hidden lg:block shadow-lg rounded-xl">
        <div className="flex flex-col items-center space-y-6">
          <a
            href="https://github.com/i-am-abdullah"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-gray-400 hover:text-teal-400 transition-colors duration-300"
            aria-label="Github"
          >
            <Github className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a
            href="https://www.facebook.com/itx.ch.abdullah/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-gray-400 hover:text-teal-400 transition-colors duration-300"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a
            href="https://twitter.com/itx_m_abdullah"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-gray-400 hover:text-teal-400 transition-colors duration-300"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a
            href="https://www.instagram.com/itx_m_abdullah/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-gray-400 hover:text-teal-400 transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/its-mohd-abdullah/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-gray-400 hover:text-teal-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <div className="w-px h-32 bg-gray-400"></div>
        </div>
      </div>

      {/* Desktop Right Email */}
      <div ref={rightEmailRef} className="fixed right-10 bottom-0 hidden lg:block">
        <div className="flex flex-col items-center space-y-6">
          <a
            href="mailto:heyiamabdullah@gmail.com"
            className="text-gray-400 hover:text-teal-400 transition-colors duration-300 vertical-text"
            style={{ writingMode: "vertical-rl" }}
          >
            heyiamabdullah@gmail.com
          </a>
          <div className="w-px h-32 bg-gray-400"></div>
        </div>
      </div>

      {/* Mobile Bottom Social Bar */}
      <div ref={bottomSocialRef} className="fixed bottom-0 left-0 right-0 lg:hidden bg-[#0E0E10] backdrop-blur-sm shadow-lg z-50">
        <div className="flex justify-center space-x-6 py-1 mt-3">
          <a
            href="https://github.com/i-am-abdullah"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-gray-400 hover:text-teal-400 transition-colors duration-300"
            aria-label="Github"
          >
            <Github className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a
            href="https://www.facebook.com/itx.ch.abdullah/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-gray-400 hover:text-teal-400 transition-colors duration-300"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a
            href="https://twitter.com/itx_m_abdullah"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-gray-400 hover:text-teal-400 transition-colors duration-300"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a
            href="https://www.instagram.com/itx_m_abdullah/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-gray-400 hover:text-teal-400 transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/its-mohd-abdullah/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-gray-400 hover:text-teal-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
        </div>
        <div className="w-full h-1 bg-gray-400 mt-4"></div>
      </div>
    </div>
  );
};

export default Hero;