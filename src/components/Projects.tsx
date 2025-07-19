import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Eye, Camera } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: "Hands-Free Volume Controller",
      description: "An innovative computer vision project that allows users to control system volume using hand gestures. Built with OpenCV for real-time image processing, MediaPipe for hand tracking, and PyCaw for audio control.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["OpenCV", "MediaPipe", "PyCaw", "Python", "Computer Vision"],
      github: "https://github.com/Jiya3107",
      demo: "#",
      features: [
        "Real-time hand gesture recognition",
        "Volume control with finger distance",
        "Cross-platform compatibility",
        "Smooth gesture tracking"
      ]
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "A comprehensive CI/CD pipeline setup using Jenkins, Docker, and Kubernetes for automated testing, building, and deployment of applications with zero-downtime deployment strategies.",
      image: "https://images.pexels.com/photos/7988674/pexels-photo-7988674.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Jenkins", "Docker", "Kubernetes", "AWS", "Terraform"],
      github: "#",
      demo: "#",
      features: [
        "Automated testing & deployment",
        "Container orchestration",
        "Infrastructure as Code",
        "Monitoring & logging"
      ]
    },
    {
      title: "AI-Powered Monitoring Dashboard",
      description: "A modern web application that uses machine learning to predict system failures and provide intelligent alerts. Built with React, Node.js, and integrated with various monitoring tools.",
      image: "https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "Machine Learning", "MongoDB", "Chart.js"],
      github: "#",
      demo: "#",
      features: [
        "Predictive analytics",
        "Real-time monitoring",
        "Custom alert systems",
        "Interactive dashboards"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`glassmorphism p-6 rounded-2xl hover:scale-105 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-white/90 leading-relaxed">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white rounded-full text-sm font-medium border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="text-white font-medium">Key Features:</h4>
                      <ul className="text-white/80 text-sm space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300"
                      >
                        <Eye size={16} />
                        <span>Demo</span>
                      </a>
                    </div>
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

export default Projects;
