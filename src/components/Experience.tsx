import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      type: "work",
      icon: <Briefcase className="w-6 h-6" />,
      title: "Frontend Developer",
      company: "Grras Solutions",
      period: "2023 - Present",
      description: "Developing modern web applications using React, TypeScript, and modern CSS frameworks. Collaborating with cross-functional teams to deliver high-quality user experiences.",
      achievements: [
        "Built responsive web applications with 99% uptime",
        "Improved application performance by 40%",
        "Implemented modern UI/UX design patterns",
        "Mentored junior developers in best practices"
      ]
    },
    {
      type: "education",
      icon: <GraduationCap className="w-6 h-6" />,
      title: "B.Tech Computer Science Engineering",
      company: "Poornima University",
      period: "2021 - 2025",
      description: "Currently in final year, focusing on advanced topics in AI, machine learning, and software engineering. Maintaining excellent academic record while working on practical projects.",
      achievements: [
        "Specialized in AI and Machine Learning",
        "Active member of tech clubs",
        "Participated in hackathons and coding competitions",
        "Dean's List for academic excellence"
      ]
    },
    {
      type: "certification",
      icon: <Award className="w-6 h-6" />,
      title: "Frontend Development Certificate",
      company: "Grras Solutions",
      period: "2023",
      description: "Comprehensive certification program covering modern frontend technologies, best practices, and industry standards for web development.",
      achievements: [
        "Mastered React and TypeScript",
        "Learned advanced CSS and responsive design",
        "Practiced modern development workflows",
        "Completed capstone project with distinction"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "from-purple-500 to-pink-500";
      case "education":
        return "from-blue-500 to-cyan-500";
      case "certification":
        return "from-green-500 to-blue-500";
      default:
        return "from-purple-500 to-blue-500";
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Experience & <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Education</span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-20 ${
                    isVisible ? 'animate-fade-in' : ''
                  }`}
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-6 w-6 h-6 rounded-full bg-gradient-to-r ${getTypeColor(exp.type)} border-4 border-white/20`}></div>

                  {/* Content Card */}
                  <div className="glassmorphism p-6 rounded-2xl hover:scale-105 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${getTypeColor(exp.type)}`}>
                          <div className="text-white">
                            {exp.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                          <p className="text-purple-300 font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-white/70">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-white/90 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="space-y-2">
                      <h4 className="text-white font-medium">Key Achievements:</h4>
                      <ul className="text-white/80 text-sm space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;