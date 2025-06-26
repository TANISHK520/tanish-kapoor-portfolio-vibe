
import { useState } from 'react';
import { Download, Eye, ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    // Create a temporary link to download the resume
    const link = document.createElement('a');
    link.href = '/lovable-uploads/6dc51296-ec3b-4998-9dcf-718cda99ddd2.png';
    link.download = 'Tanish_Kapoor_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => setIsLoading(false), 1000);
  };

  const resumeSections = [
    {
      title: "Contact Information",
      content: [
        "📧 kapoortanish74@gmail.com",
        "📱 7015614225",
        "🔗 linkedin.com/in/tanishkapoor07",
        "📍 Gurugram, India"
      ]
    },
    {
      title: "Education",
      content: [
        "🎓 B.Tech in Computer Science",
        "🏫 Chandigarh Engineering College",
        "📅 July 2019 - June 2023",
        "📊 CGPA: 8.0"
      ]
    },
    {
      title: "Technical Skills",
      content: [
        "💻 Programming: JavaScript, TypeScript, Python, C++",
        "⚛️ Frontend: React.js, Redux, Tailwind CSS, Bootstrap",
        "🔧 Backend: Node.js, Express.js, REST APIs, JWT",
        "🗄️ Databases: MongoDB, MySQL, SQL Server",
        "🚀 DevOps: Docker, Kubernetes, Git, GitHub"
      ]
    },
    {
      title: "Experience Highlights",
      content: [
        "🏢 Software Engineer at Persistent Systems (2023-Present)",
        "⚡ Optimized QuickBooks application performance",
        "📱 Developed responsive UI components with React",
        "🔄 Implemented lazy loading and bundle optimization",
        "👥 Collaborated in Agile development environment"
      ]
    },
    {
      title: "Key Projects",
      content: [
        "🎓 CourseX: E-learning platform with React & Node.js",
        "📄 Smart Document Management with RBAC security",
        "🏆 Quiz & Coding Platform with real-time features",
        "⚖️ Judge0 integration for code compilation"
      ]
    },
    {
      title: "Certifications",
      content: [
        "☁️ Microsoft Azure AZ-900",
        "🤖 Generative AI Certification",
        "🗄️ HackerRank SQL Advanced",
        "📊 HackerRank SQL Intermediate"
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
              Resume
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Download my complete resume or view the highlights below
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={handleDownload}
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-2" />
                    Download PDF Resume
                  </>
                )}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open('/lovable-uploads/6dc51296-ec3b-4998-9dcf-718cda99ddd2.png', '_blank')}
                className="px-8 py-6 text-lg"
              >
                <Eye className="w-5 h-5 mr-2" />
                View in Browser
              </Button>
            </div>
          </div>

          {/* Resume Preview */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden mb-12">
            {/* PDF Viewer */}
            <div className="bg-gray-100 dark:bg-gray-700 p-6 border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  <span className="font-medium text-gray-800 dark:text-white">
                    Tanish_Kapoor_Resume.pdf
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open('/lovable-uploads/6dc51296-ec3b-4998-9dcf-718cda99ddd2.png', '_blank')}
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            {/* Resume Image Display */}
            <div className="p-6">
              <div className="w-full max-w-2xl mx-auto">
                <img
                  src="/lovable-uploads/6dc51296-ec3b-4998-9dcf-718cda99ddd2.png"
                  alt="Tanish Kapoor Resume"
                  className="w-full h-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-600"
                />
              </div>
            </div>
          </div>

          {/* Resume Highlights */}
          <div className="grid md:grid-cols-2 gap-8">
            {resumeSections.map((section, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-600 dark:text-gray-300 leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              My resume shows the depth of my experience, but I'd love to discuss how my skills 
              can specifically benefit your project or organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleDownload}
                className="px-8"
              >
                <Download className="w-5 h-5 mr-2" />
                Get My Resume
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                <ExternalLink className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
