import React, { useEffect, useRef, useState } from 'react';
import { Heart, Code, Zap, Target, Camera, Star, Sparkles } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
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

  const interests = [
    { icon: <Code className="w-6 h-6" />, title: "AI & Machine Learning", description: "Exploring intelligent automation" },
    { icon: <Zap className="w-6 h-6" />, title: "DevOps & Cloud", description: "Building scalable infrastructure" },
    { icon: <Target className="w-6 h-6" />, title: "Full Stack Development", description: "End-to-end solutions" },
    { icon: <Heart className="w-6 h-6" />, title: "Open Source", description: "Contributing to community" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Creative Profile Photo Section */}
            <div className="relative">
              <div className="glassmorphism p-8 rounded-2xl text-center relative overflow-hidden">
                {/* Floating Decorative Elements */}
                <div className="absolute top-4 left-4 text-purple-400 animate-pulse">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="absolute top-4 right-4 text-blue-400 animate-bounce">
                  <Star className="w-5 h-5" />
                </div>
                <div className="absolute bottom-4 left-6 text-pink-400 animate-pulse delay-1000">
                  <Code className="w-4 h-4" />
                </div>
                <div className="absolute bottom-4 right-6 text-cyan-400 animate-bounce delay-500">
                  <Zap className="w-4 h-4" />
                </div>

                {/* Main Profile Container */}
                <div 
                  className="relative mx-auto mb-6"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Animated Ring */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 p-1 transition-all duration-500 ${isHovered ? 'animate-spin' : ''}`}>
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm"></div>
                  </div>

                  {/* Profile Photo Container */}
                  <div className="relative w-48 h-48 mx-auto">
                    {/* Gradient Background */}
                    <div className="absolute inset-2 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-full"></div>
                    
                    {/* Profile Image/Avatar */}
                    <div className="absolute inset-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-7xl shadow-2xl overflow-hidden">
                      {!imageError ? (
                        <img 
                          src="/jpg.jpg" 
                          alt="Jiya Chraya"
                          className="w-full h-full object-cover rounded-full"
                          onError={() => setImageError(true)}
                          onLoad={() => setImageError(false)}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-purple-600 to-blue-600 rounded-full">
                          👩‍💻
                        </div>
                      )}
                    </div>

                    {/* Camera Icon Overlay */}
                    <div className={`absolute bottom-2 right-2 bg-white/20 backdrop-blur-md rounded-full p-2 transition-all duration-300 ${isHovered ? 'scale-110 rotate-12' : ''}`}>
                      <Camera className="w-5 h-5 text-white" />
                    </div>

                    {/* Floating Tech Icons */}
                    <div className="absolute -top-2 -left-2 bg-purple-500/80 rounded-full p-2 animate-float">
                      <Code className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-blue-500/80 rounded-full p-2 animate-float delay-1000">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -left-2 bg-cyan-500/80 rounded-full p-2 animate-float delay-2000">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-pink-500/80 rounded-full p-2 animate-float delay-500">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Jiya Chraya</h3>
                  <p className="text-purple-300 font-medium">AIOps Engineer & DevOps Enthusiast</p>
                  
                  {/* Status Indicator */}
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white/70 text-sm">Available for opportunities</span>
                  </div>

                  {/* Skill Progress Bars */}
                  <div className="space-y-3 mt-6">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/80">Coding & Innovation</span>
                        <span className="text-purple-300">95%</span>
                      </div>
                      <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                        <div 
                          className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-2000 ease-out"
                          style={{ width: isVisible ? '95%' : '0%' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/80">Problem Solving</span>
                        <span className="text-blue-300">90%</span>
                      </div>
                      <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                        <div 
                          className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-2000 ease-out delay-300"
                          style={{ width: isVisible ? '90%' : '0%' }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/80">Team Collaboration</span>
                        <span className="text-cyan-300">88%</span>
                      </div>
                      <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                        <div 
                          className="h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-2000 ease-out delay-600"
                          style={{ width: isVisible ? '88%' : '0%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="glassmorphism p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Hello World! 👋</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  I'm Jiya Chraya, a passionate AIOps Engineer and DevOps enthusiast currently in my final year of B.Tech in Computer Science Engineering at Poornima University. I believe in the power of technology to solve complex problems and create meaningful impact.
                </p>
                <p className="text-white/90 leading-relaxed">
                  My journey began with curiosity about how systems work, which led me to explore the fascinating intersection of AI operations and DevOps. I love building intelligent, automated solutions that make life easier for developers and businesses alike.
                </p>
              </div>

              <div className="glassmorphism p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">What Drives Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-purple-400">
                        {interest.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm">{interest.title}</h4>
                        <p className="text-white/70 text-xs">{interest.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;