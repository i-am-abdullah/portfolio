import { useState } from 'react';
import { workExperiences } from '../constants/index.js';
import { Building2, Clock, BriefcaseBusiness } from 'lucide-react';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full">
      <div className="flex items-center gap-2 mb-12">
          <BriefcaseBusiness className="w-8 h-8 text-white-600" />
          <h2 className="head-text">Work Experience</h2>
        </div>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute sm:left-8 left-6 top-0 bottom-0 w-0.5 bg-black-300" />
          
          <div className="w-full">
            {workExperiences.map((item) => (
              <div
                key={item.id}
                onClick={() => setAnimationName(item.animation.toLowerCase())}
                onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                onPointerOut={() => setAnimationName('idle')}
                className="relative mb-8 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute sm:left-8 left-6 -translate-x-1/2 w-3 h-3 rounded-full bg-black-300 border-2 border-black-500" />
                
                <div className="ml-[53px] sm:ml-20">
                  <div className="work-content border border-black-300 rounded-lg p-6 hover:border-black-500 transition-all duration-300">
                    <div className="space-y-3">
                      {/* Designation */}
                      <h3 className="text-xl font-semibold text-white-800">
                        {item.pos}
                      </h3>
                      
                      {/* Company Name with Icon */}
                      <div className="flex items-center gap-2 text-white-600">
                        <div>
                          <Building2 
                            className="w-5 h-5"
                            style={{
                              filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.3))'
                            }}
                          />
                        </div>
                        <p className="font-medium">{item.name}</p>
                      </div>
                      
                      {/* Duration with Icon */}
                      <div className="flex items-center gap-2 text-white-500">
                        <div>
                          <Clock 
                            className="w-4 h-4"
                            style={{
                              filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.3))'
                            }}
                          />
                        </div>
                        <p className="text-sm">{item.duration}</p>
                      </div>
                      
                      {/* Description */}
                      <p className="text-white-600 mt-4 group-hover:text-white transition-all duration-500">
                        {item.title}
                      </p>
                    </div>

                    {/* Tags Section */}
                    {/* <div className="mt-6">
                      <div className="flex items-center gap-3 flex-wrap">
                        {item.tags.map((tag, index) => (
                          <div key={index} className="tech-logo">
                            <img src={tag.path} alt={tag.name} />
                          </div>
                        ))}
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;