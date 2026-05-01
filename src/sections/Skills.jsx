import { Layout, Database, Cpu, Code2, Cloud, Terminal, BotIcon } from 'lucide-react';

const Skills = () => {
const skillsData = [
  {
    title: "Frontend Development",
    description: "Responsive, cross-platform UIs",
    icon: <Layout className="w-6 h-6" />,
    skills: ['React', 'Next.js', 'TypeScript', 'AngularJS', 'React Native', 'Expo']
  },
  {
    title: "Backend Development",
    description: "Scalable APIs & microservices",
    icon: <Database className="w-6 h-6" />,
    skills: ['Express.js', 'NestJS', 'Hono', 'FastAPI', 'Django', 'Flask']
  },
  {
    title: "AI & Agentic Systems",
    description: "LLMs, RAG pipelines, autonomous agents",
    icon: <BotIcon className="w-6 h-6" />,
    skills: ['Agentic AI', 'RAG', 'Tool Calling', 'Voice AI', 'Conversational AI', 'Autonomous AI']
  },
  {
    title: "Databases",
    description: "Relational, NoSQL & vector stores",
    icon: <Database className="w-6 h-6" />,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'pgvector', 'DynamoDB']
  },
  {
    title: "Cloud & DevOps",
    description: "Cloud deployment & CI/CD pipelines",
    icon: <Cloud className="w-6 h-6" />,
    skills: ['AWS', 'GCP', 'Azure', 'Docker', 'CI/CD', 'Vercel']
  },
  {
    title: "Dev Tools & Messaging",
    description: "Tooling, queues & observability",
    icon: <Terminal className="w-6 h-6" />,
    skills: ['Git', 'Kafka', 'RabbitMQ', 'ARQ', 'Sentry', 'Postman']
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