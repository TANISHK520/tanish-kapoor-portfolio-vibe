
import { User, MapPin, Calendar, Award, Coffee, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Get to know the person behind the code
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <div className="text-center">
              <div className="w-64 h-64 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl mb-6">
                TK
              </div>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Gurugram, India</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>2+ Years Experience</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Multiple Certifications</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                Full Stack Developer & Problem Solver
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate Full Stack Developer with over 2 years of experience at Persistent Systems, 
                where I've honed my skills in building scalable web applications and solving complex technical challenges.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                My journey in tech began with Computer Science at Chandigarh Engineering College, and since then, 
                I've been dedicated to creating efficient, user-friendly solutions that make a real impact.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          {/* Skills Summary */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
              What I Bring to the Table
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Frontend Expert</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  React.js, Redux, Tailwind CSS - Creating beautiful, responsive user interfaces
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <Coffee className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Backend Specialist</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Node.js, Express.js, REST APIs - Building robust server-side solutions
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Problem Solver</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Analytical thinking, debugging, optimization - Turning ideas into reality
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Education</h3>
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                B.Tech in Computer Science
              </h4>
              <p className="text-blue-600 font-medium">Chandigarh Engineering College</p>
              <p className="text-gray-600 dark:text-gray-400">July 2019 - June 2023</p>
              <p className="text-gray-600 dark:text-gray-400">CGPA: 8.0</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Mohali, Punjab - Focused on software development, algorithms, and data structures
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
