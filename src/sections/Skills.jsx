import { Layout, Database, Cpu, Code2, Cloud, Terminal, BotIcon } from 'lucide-react';


const Skills = () => {
  const skillsData = [
    {
      title: "Frontend Development",
      description: "Specialized in building responsive and interactive user interfaces",
      icon: <Layout className="w-6 h-6" />,
      skills: ['React', 'Next.js', 'TypeScript', 'Angular JS', 'React Native', 'Expo']
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side applications and APIs",
      icon: <Database className="w-6 h-6" />,
      skills: ['Node.js', 'Express JS', 'Nest JS', 'Python', 'FastAPI', 'Django']
    },
    {
      title: "Development Tools",
      description: "Proficient with modern development and deployment tools",
      icon: <Terminal className="w-6 h-6" />,
      skills: ['Git', 'Docker', 'AWS', 'Postman', 'VS Code', 'Android Studio']
    },
    {
      title: "AI Integration & Tools",
      description: "Expertise in AI tools and frameworks for practical applications",
      icon: <BotIcon className="w-6 h-6" />,
      skills: ['Langchain', 'Vector Databases', 'Ollama', 'RAG']
    },
    {
      title: "Databases",
      description: "Experience with various database systems and management",
      icon: <Database className="w-6 h-6" />,
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Dynamo DB']
    },
    {
      title: "Cloud Services",
      description: "Cloud deployment and serverless architecture",
      icon: <Cloud className="w-6 h-6" />,
      skills: ['AWS', 'Azure', 'Vercel', 'Heroku']
    }
  ];

  return (
    <section className="c-space relative min-h-screen py-20" id="skills">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Cpu className="w-8 h-8 text-white-600" />
          <h2 className="head-text">Skills & Expertise</h2>
        </div>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {skillsData.map((item, index) => (
            <div key={index} className="grid-container">
              <div className="bg-[#1C1C21] border border-black-300 rounded-2xl p-6 h-full hover:border-black-500 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-black-500 rounded-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white-800">{item.title}</h3>
                    <p className="text-sm text-white-600">{item.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-2 bg-black-200 backdrop-blur-sm rounded-xl text-white-600 text-sm border border-black-300 flex items-center justify-center text-center hover:border-black-500 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;