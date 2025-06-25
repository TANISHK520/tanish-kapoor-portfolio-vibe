
import { Building, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Persistent Systems Limited",
      location: "Gurugram, India",
      period: "Sept 2023 - Present",
      type: "Full-time",
      description: "Working on QuickBooks integration and legacy system optimization",
      achievements: [
        "Refactored and optimized legacy codebase by replacing moment.js with lightweight day.js across multiple modules",
        "Significantly reduced bundle size and improved application load performance",
        "Optimized Front-End Performance with Lazy Loading techniques in QuickBooks' front-end (React-based)",
        "Enhanced page load efficiency and improved user experience",
        "Enhanced UI Responsiveness for Scalable Design by developing refined responsive UI components",
        "Utilized modern JavaScript frameworks (React) to support seamless interactions",
        "Collaborated on Home-Based Team during Agile development process",
        "Integrated front-end optimizations with QuickBooks' cloud-based infrastructure"
      ]
    },
    {
      title: "Full Stack Software Development Intern",
      company: "Persistent Systems Limited",
      location: "Remote",
      period: "Jan 2023 - July 2023",
      type: "Internship",
      description: "Developed comprehensive full-stack applications and coding platforms",
      achievements: [
        "Engineered Full-Stack Quiz and Coding Platform supporting 200+ concurrent users with 98% reliability",
        "Integrated External Code Compilation API for implementation of Judge0 system for online code evaluation",
        "Processed 1000+ submissions with 95% accuracy in real-time compilation and automated test case evaluation",
        "Designed Secure Authentication and Role-Based Access with JWT-based authentication for sign-up, sign-in, and session management",
        "Ensured 100% protection against unauthorized access for 50+ teachers and 500+ students",
        "Developed Real-Time Leaderboard and Analytics with dynamic leaderboard optimizing MongoDB queries",
        "Reduced data retrieval time by 35%, delivering real-time insights for 100+ quizzes and coding challenges",
        "Optimized Application Scalability and Performance by enhancing API endpoints and database schemas",
        "Cut response time by 25% and handled a 150% traffic surge during peak submission periods"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              My professional journey and key accomplishments
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-30"></div>
                )}

                {/* Experience Card */}
                <div className="flex gap-6">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <Building className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-2">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          <span className="font-medium text-blue-600">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 text-sm rounded-full">
                        {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                        Key Achievements:
                      </h4>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex gap-3 items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Used */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
              Technologies & Tools Used
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'TypeScript',
                'JWT', 'RESTful APIs', 'Git', 'GitHub', 'Docker', 'Kubernetes',
                'QuickBooks API', 'Judge0 API', 'Bootstrap', 'Tailwind CSS'
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
