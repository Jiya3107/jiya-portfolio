import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "DevOps Engineer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const handleScrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Profile Avatar */}
        <div className="mb-8 animate-bounce">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-6xl shadow-2xl">
            👩‍💻
          </div>
        </div>

        {/* Main Content */}
        <div className="glassmorphism p-8 rounded-2xl max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Hi, I'm Jiya Chraya
            </span>
          </h1>
          
          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleScrollToContact}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Let's Connect</span>
            </button>
            
            <button className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <Download size={20} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;
