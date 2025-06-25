
import { Award, Calendar, ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: "AZ-900 Certification",
      issuer: "Microsoft Azure",
      description: "Microsoft Azure Fundamentals certification demonstrating foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
      skills: ["Cloud Computing", "Azure Services", "Azure Pricing", "Service Level Agreements"],
      icon: "🔷",
      color: "from-blue-500 to-cyan-500",
      level: "Fundamental"
    },
    {
      title: "Gen AI Certification",
      issuer: "Technology Platform",
      description: "Comprehensive certification in Generative Artificial Intelligence, covering modern AI models, prompt engineering, and AI application development.",
      skills: ["Generative AI", "Machine Learning", "AI Models", "Prompt Engineering"],
      icon: "🤖",
      color: "from-purple-500 to-pink-500",
      level: "Advanced"
    },
    {
      title: "HackerRank SQL Advanced",
      issuer: "HackerRank",
      description: "Advanced SQL certification demonstrating expertise in complex queries, optimization, and database management.",
      skills: ["Advanced SQL", "Query Optimization", "Database Design", "Performance Tuning"],
      icon: "🗄️",
      color: "from-green-500 to-emerald-500",
      level: "Advanced"
    },
    {
      title: "HackerRank SQL Intermediate",
      issuer: "HackerRank",
      description: "Intermediate SQL certification covering complex joins, subqueries, and data manipulation techniques.",
      skills: ["SQL Joins", "Subqueries", "Data Manipulation", "Database Functions"],
      icon: "📊",
      color: "from-orange-500 to-red-500",
      level: "Intermediate"
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Fundamental':
        return 'bg-blue-100 text-blue-600 dark:bg-blue-900';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900';
      case 'Advanced':
        return 'bg-red-100 text-red-600 dark:bg-red-900';
      default:
        return 'bg-gray-100 text-gray-600 dark:bg-gray-900';
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Certifications
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Professional certifications that validate my technical expertise
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Certifications</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Platforms</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">2</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Advanced Level</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Skills Validated</div>
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Certification Icon & Info */}
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${cert.color} flex items-center justify-center text-4xl mb-4`}>
                      {cert.icon}
                    </div>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(cert.level)}`}>
                      {cert.level}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                          {cert.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
                          <Award className="w-4 h-4" />
                          <span className="font-medium">{cert.issuer}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                        Skills Demonstrated:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="flex-1 sm:flex-none" variant="outline">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
                      <Button className="flex-1 sm:flex-none" variant="outline">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Verify Credential
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Continuous Learning
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm committed to staying current with the latest technologies and best practices. 
              These certifications represent my dedication to professional growth and technical excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                View All Achievements
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
