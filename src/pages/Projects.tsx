
import { useState } from 'react';
import { ExternalLink, Github, Code, Database, Shield, Users, Brain, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "CourseX - E-Learning Platform",
      period: "Jan 2023 - July 2023",
      description: "A comprehensive Udemy-inspired e-learning platform built with React and Node.js",
      longDescription: "CourseX is a full-featured e-learning platform that enables seamless course creation, user enrollment, and interactive learning experiences. The platform integrates secure payment processing and provides a robust content management system.",
      features: [
        "User-friendly course creation and management system",
        "Secure payment processing with Razorpay API integration",
        "Interactive learning experience with video streaming",
        "Progress tracking and certificate generation",
        "Responsive design for all devices"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Razorpay API", "Express.js", "JWT"],
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      category: "Full-Stack"
    },
    {
      id: 2,
      title: "Smart Document Management Platform",
      period: "Sept 2023 - Dec 2024",
      description: "Enterprise-grade document management system with advanced security features",
      longDescription: "A sophisticated document management platform designed for medical vendors with role-based access control, secure vault storage, and collaborative features. Built with modern security standards and scalable architecture.",
      features: [
        "RBAC (Role-Based Access Control) system development",
        "Secure authentication with TypeScript and JWT tokens",
        "Collaborative Teams and Tasks features using React.js and MongoDB",
        "Secure Document Vault with 4-digit PIN protection using Vault Token storage",
        "Email notifications with Nodemailer for critical routes",
        "Centralized notification system for file sharing and team updates"
      ],
      technologies: ["React.js", "TypeScript", "Node.js", "MongoDB", "JWT", "Nodemailer", "Vault"],
      icon: <Shield className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      category: "Enterprise"
    },
    {
      id: 3,
      title: "Quiz & Coding Platform",
      period: "Jan 2023 - July 2023",
      description: "Real-time competitive programming platform with automated judge system",
      longDescription: "A comprehensive coding competition platform that supports real-time code compilation, automated testing, and live leaderboards. Designed to handle high concurrent loads with excellent performance optimization.",
      features: [
        "Real-time code compilation and execution using Judge0 API",
        "JWT-based secure authentication for role-based access",
        "Dynamic leaderboard with optimized MongoDB queries",
        "Real-time quiz and coding challenge evaluation",
        "Performance optimization for handling 200+ concurrent users",
        "Comprehensive analytics and progress tracking"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Judge0 API", "JWT", "WebSocket", "Express.js"],
      icon: <Trophy className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      category: "Platform"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Showcasing my technical expertise through real-world applications
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>

                {/* Project Info */}
                <div className="mb-4">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {project.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <Button className="w-full" variant="outline">
                  View Details
                </Button>
              </div>
            ))}
          </div>

          {/* Project Modal/Details */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${selectedProject.color} flex items-center justify-center text-white`}>
                      {selectedProject.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                        {selectedProject.title}
                      </h2>
                      <p className="text-gray-500 dark:text-gray-400">
                        {selectedProject.period}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </Button>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                      <Database className="w-5 h-5" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <Button className="flex-1" size="lg">
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </Button>
                  <Button variant="outline" className="flex-1" size="lg">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
