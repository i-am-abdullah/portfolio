export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Base - BE version with Express and MongoDB',
    desc: 'Base - BE Version with Express and MongoDB is a powerful, production-ready backend template designed to kickstart your application with ease. Built on Express.js and MongoDB, it offers a scalable and efficient foundation for modern web applications. ',
    subdesc:
      'With built-in authentication functionality, developers can focus on core features without reinventing the wheel. Whether you are building a startup or an enterprise-grade system, Base ensures a seamless and secure backend experience.',
    href: 'https://github.com/i-am-abdullah/base',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/layers.png',
    technologies:["NodeJS", "ExpressJS","MongoDB", "TypeScript","REST APIs", "Authentication" ],
    logoStyle: {
      backgroundColor: '#FFC861',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Base - BE Version with NestJS and PostgreSQL',
    desc: 'Base - BE Version with NestJS and PostgreSQL is a robust, production-ready backend template designed for scalability and efficiency. Built with NestJS and PostgreSQL, it provides a solid foundation for modern applications, ensuring high performance and maintainability.',
    subdesc:
      'With built-in authentication functionality, it streamlines user management while following best practices for security and modular architecture. Whether you are launching a startup or an enterprise system, Base accelerates development without compromising on quality.',
    href: 'https://github.com/i-am-abdullah/base-v2',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    technologies:["NodeJS", "NestJS","PostgreSQL","TypeORM", "TypeScript","REST APIs", "Authentication" ],
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'AI To-Do Agent – Smart Task Management in Your Terminal',
    desc: 'The AI To-Do Agent is a powerful, terminal-based assistant that makes task management effortless. Simply type natural language commands like "Add a task: Go to the gym at 7:30 PM today," and it will handle it instantly. Need to check your schedule? Just ask, "Any pending tasks for today?" and get quick answers. ',
    subdesc:
      'With built-in CRUD operations and smart task search, this AI-driven tool keeps you organized with zero hassle. No complex menus—just type, manage, and stay on top of your day with ease!',
    href: 'https://github.com/i-am-abdullah/todo-ai-agent',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/bot.png',
    technologies:["NodeJS", "ExpressJS","PostgreSQL","TypeORM", "TypeScript"],
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
  },
  {
    title: 'Web Scraper – Extract External Links with Ease',
    desc: 'The Web Scraper is a fast and efficient tool designed to extract all external links from any webpage in seconds. Just provide a URL, and it will scan the entire page, filtering out links that lead to external websites.',
    subdesc:
      'Whether you are researching competitors, analyzing backlinks, or gathering data, this scraper makes the process effortless. No manual searching—just run the tool and get a clean, organized list of outbound links instantly!',
    href: 'https://github.com/i-am-abdullah/web_scraper_v1',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    technologies:["NodeJS", "ExpressJS","Axios","Cheerio" ],
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',

  },
  {
    title: 'Next.js Scalable Dashboard',
    desc: 'The Next.js Scalable Dashboard is a sleek, high-performance template built with MUI and Tailwind CSS, offering a solid foundation for any modern web application. Designed for flexibility and scalability, it provides a clean, minimal UI ready for customization.',
    subdesc:
      'Whether you are building analytics, admin panels, or business tools, this dashboard ensures a seamless developer experience with responsive design and reusable components. Start with a blank slate and scale effortlessly as your project grows!',
    href: 'https://github.com/i-am-abdullah/next-dashboard',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    technologies:["NextJS", "TailwindCSS","MaterialUI"],
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
  },
  {
    title: 'Ai Chatbot',
    desc: 'Built with Node.js and ChromaDB, this AI chatbot transforms any website into an intelligent assistant by extracting and storing its content for precise, context-aware responses. Simply provide a URL, and it fine-tunes itself for seamless integration.',
    subdesc:
      'Designed for scalability and easy deployment with Docker, it enhances user engagement by turning static web content into dynamic, AI-driven conversations.',
    href: 'https://github.com/i-am-abdullah/ai-chatbot',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    technologies:["NodeJS", "ExpressJS","ChromaDB","Cheerio", "OpenAI" ],
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
  },  
  // {
  //   title: 'Next.js Scalable Dashboard',
  //   desc: 'The Next.js Scalable Dashboard is a sleek, high-performance template built with MUI and Tailwind CSS, offering a solid foundation for any modern web application. Designed for flexibility and scalability, it provides a clean, minimal UI ready for customization.',
  //   subdesc:
  //     'Whether you are building analytics, admin panels, or business tools, this dashboard ensures a seamless developer experience with responsive design and reusable components. Start with a blank slate and scale effortlessly as your project grows!',
  //   href: 'https://github.com/i-am-abdullah/next-dashboard',
  //   texture: '/textures/project/project5.mp4',
  //   logo: '/assets/project-logo5.png',
  //   logoStyle: {
  //     backgroundColor: '#1C1A43',
  //     border: '0.2px solid #252262',
  //     boxShadow: '0px 0px 60px 0px #635BFF4D',
  //   },
  //   spotlight: '/assets/spotlight5.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'AEPL Solutions',
    pos: 'Senior Full Stack Developer',
    duration: 'Jan 2024 - Present  · Remote',
    title: "Building cross-platform applications using React, Next.js, React Native, and Angular achieving 30% faster development through code reusability. Developing scalable NestJS and FastAPI backends with sub-100ms response times and optimized database performance. Implementing AWS services like IVS and Lambda Functions with 99.99% reliability, reducing operational costs by 45%. Leveraging AI technologies including OpenAI integration and vector databases for intelligent search and chat experiences, achieving 87% user satisfaction and 55% faster response times.",
    icon: '/assets/organization-100.svg',
    animation: 'victory',
    // tags: [
    //   {
    //     id: 1,
    //     name: 'React.js',
    //     path: '/assets/react.svg',
    //   },
    //   {
    //     id: 2,
    //     name: 'TailwindCSS',
    //     path: 'assets/tailwindcss.png',
    //   },
    //   {
    //     id: 3,
    //     name: 'TypeScript',
    //     path: '/assets/typescript.png',
    //   },
    //   {
    //     id: 4,
    //     name: 'Framer Motion',
    //     path: '/assets/framer.png',
    //   },
    // ],
  },
  {
    id: 2,
    name: 'Tech Triggered',
    pos: 'Senior Full Stack Developer',
    duration: 'Aug 2024 - Jan 2025  · Remote',
    title: "Developed AI-driven CMS platform using Next.js and NestJS with PostgreSQL backend for scalable user experiences. Implemented Redis caching reducing database load by 65% and response times by 80%. Contributed to React Native mobile development for seamless cross-platform functionality.",
    icon: '/assets/organization-100.svg',
    animation: 'victory',
    // tags: [
    //   {
    //     id: 1,
    //     name: 'React.js',
    //     path: '/assets/react.svg',
    //   },
    //   {
    //     id: 2,
    //     name: 'TailwindCSS',
    //     path: 'assets/tailwindcss.png',
    //   },
    //   {
    //     id: 3,
    //     name: 'TypeScript',
    //     path: '/assets/typescript.png',
    //   },
    //   {
    //     id: 4,
    //     name: 'Framer Motion',
    //     path: '/assets/framer.png',
    //   },
    // ],
  },
  {
    id: 3,
    name: 'AlphaTrax INC (Contract-based)',
    pos: 'Senior MERN Stack Developer',
    duration: 'Mar 2024 - Aug 2024 · On-site',
    title: "Built a comprehensive website and CRM system using Node.js and AWS, optimizing database queries to support over 1 million concurrent users. Designed a microservices architecture with 30+ APIs using gRPC and GraphQL, reducing latency by 50%. Improved CRM user engagement by 25%, leading to a 15% reduction in churn. ",
    icon: '/assets/organization-100.svg',
    animation: 'salute',
    // tags: [
    //   {
    //     id: 1,
    //     name: 'React.js',
    //     path: '/assets/react.svg',
    //   },
    //   {
    //     id: 2,
    //     name: 'TailwindCSS',
    //     path: 'assets/tailwindcss.png',
    //   },
    //   {
    //     id: 3,
    //     name: 'TypeScript',
    //     path: '/assets/typescript.png',
    //   },
    //   {
    //     id: 4,
    //     name: 'Framer Motion',
    //     path: '/assets/framer.png',
    //   },
    // ],
  },
  {
    id: 4,
    name: 'STARTX LTD',
    pos: 'MERN Stack Developer',
    duration: 'Jan 2023 - Mar 2024 · On-site',
    title: "Built and optimized high-performance websites, boosting speed by 60% and customer retention by 50%. Developed and customized Shopify stores to enhance e-commerce functionality. Worked on MERN stack projects, improving backend efficiency and resolving UI/UX issues, reducing bugs by 70%. Streamlined Git workflows, increasing team productivity by 30% and minimizing merge conflicts by 80%",
    icon: '/assets/organization-100.svg',
    animation: 'salute',
    // tags: [
    //   {
    //     id: 1,
    //     name: 'React.js',
    //     path: '/assets/react.svg',
    //   },
    //   {
    //     id: 2,
    //     name: 'TailwindCSS',
    //     path: 'assets/tailwindcss.png',
    //   },
    //   {
    //     id: 3,
    //     name: 'TypeScript',
    //     path: '/assets/typescript.png',
    //   },
    //   {
    //     id: 4,
    //     name: 'Framer Motion',
    //     path: '/assets/framer.png',
    //   },
    // ],
  },
  {
    id: 5,
    name: 'Quantum Solutions Hub',
    pos: 'Lead Web Developer',
    duration: 'Mar 2024 - Aug 2024 · On-site',
    title: "Created and Optimized websites on WordPress, Wix, and Shopify, improving speed by 60% and retention by 50%. Resolved UI/UX and backend issues, reducing bugs by 70% and boosting stability by 45%. Led e-commerce platform development with Agile, enhancing delivery by 35%. Enhanced site performance with SEO, faster load times, and improved functionality.",
    icon: '/assets/organization-100.svg',
    animation: 'salute',
    // tags: [
    //   {
    //     id: 1,
    //     name: 'React.js',
    //     path: '/assets/react.svg',
    //   },
    //   {
    //     id: 2,
    //     name: 'TailwindCSS',
    //     path: 'assets/tailwindcss.png',
    //   },
    //   {
    //     id: 3,
    //     name: 'TypeScript',
    //     path: '/assets/typescript.png',
    //   },
    //   {
    //     id: 4,
    //     name: 'Framer Motion',
    //     path: '/assets/framer.png',
    //   },
    // ],
  },
];
