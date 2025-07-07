import React, { useEffect, useRef, useState } from 'react';
import { Code, Server, Cloud, Palette } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming",
      skills: ["HTML5", "CSS3", "JavaScript", "Python", "TypeScript", "React"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "DevOps Tools",
      skills: ["Docker", "Jenkins", "Kubernetes", "CI/CD", "Git", "Linux"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & Database",
      skills: ["AWS", "MySQL", "MongoDB", "PostgreSQL", "Redis", "Nginx"],
      color: "from-green-500 to-blue-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Development",
      skills: ["UI/UX", "Full Stack", "Machine Learning", "ReactJS", "Node.js", "API Design"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Skills & <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`glassmorphism p-6 rounded-2xl hover:scale-105 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-4 bg-white/10 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000`}
                    style={{ width: isVisible ? '85%' : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;