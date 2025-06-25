
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Code, Database, Server, Zap } from 'lucide-react';

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Full Stack Developer', 'React Specialist', 'Node.js Expert', 'MongoDB Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    // Create a temporary link to download the resume
    const link = document.createElement('a');
    link.href = '/lovable-uploads/6dc51296-ec3b-4998-9dcf-718cda99ddd2.png';
    link.download = 'Tanish_Kapoor_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Profile Image Placeholder */}
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl transform hover:scale-110 transition-transform duration-300">
              TK
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
              Tanish Kapoor
            </h1>

            {/* Dynamic Role */}
            <div className="h-16 mb-8">
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 transition-all duration-500">
                {roles[currentRole]}
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with <span className="text-blue-600 font-semibold">2+ years</span> of expertise in 
              modern web technologies. Based in <span className="text-purple-600 font-semibold">Gurugram, India</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
                  Hire Me <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleDownloadResume}
                className="px-8 py-6 text-lg rounded-full border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800 dark:text-white">15+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 mx-auto mb-3 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <Server className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800 dark:text-white">2+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Exp</div>
              </div>
              <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 mx-auto mb-3 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <Database className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800 dark:text-white">10+</div>
                <div className="text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
              <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 mx-auto mb-3 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800 dark:text-white">4+</div>
                <div className="text-gray-600 dark:text-gray-400">Certifications</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
              With expertise in React.js, Node.js, and modern web technologies, I help businesses 
              create scalable, user-friendly applications that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects">
                <Button size="lg" variant="outline" className="px-8 py-4">
                  View My Work
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" className="px-8 py-4">
                  Learn More About Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
