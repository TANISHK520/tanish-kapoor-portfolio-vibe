
import { useState, useEffect } from 'react';
import { Code, Database, Server, Tool, Globe, Brain } from 'lucide-react';

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState({});

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 90, description: "Advanced component architecture, hooks, context API" },
        { name: "Redux", level: 85, description: "State management, middleware, async actions" },
        { name: "JavaScript", level: 92, description: "ES6+, async/await, modern patterns" },
        { name: "TypeScript", level: 88, description: "Type safety, interfaces, generics" },
        { name: "HTML5", level: 95, description: "Semantic markup, accessibility, SEO" },
        { name: "CSS3", level: 90, description: "Flexbox, Grid, animations, responsive design" },
        { name: "Tailwind CSS", level: 92, description: "Utility-first styling, custom configurations" },
        { name: "Bootstrap", level: 85, description: "Component libraries, responsive frameworks" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 88, description: "Server-side JavaScript, event-driven architecture" },
        { name: "Express.js", level: 90, description: "RESTful APIs, middleware, routing" },
        { name: "RESTful APIs", level: 92, description: "API design, documentation, versioning" },
        { name: "JWT", level: 85, description: "Authentication, authorization, token management" },
        { name: "Zod", level: 80, description: "Schema validation, type inference" }
      ]
    },
    {
      title: "Database Technologies",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", level: 90, description: "Document databases, aggregation, indexing" },
        { name: "MySQL", level: 85, description: "Relational databases, complex queries, optimization" },
        { name: "SQL Server", level: 80, description: "Enterprise databases, stored procedures" }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Tool className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Docker", level: 82, description: "Containerization, multi-stage builds" },
        { name: "Kubernetes", level: 78, description: "Container orchestration, deployments" },
        { name: "Git", level: 92, description: "Version control, branching strategies" },
        { name: "GitHub", level: 90, description: "Collaboration, CI/CD, project management" },
        { name: "Postman", level: 88, description: "API testing, automation, documentation" },
        { name: "VS Code", level: 95, description: "Development environment, extensions" },
        { name: "Webpack", level: 75, description: "Module bundling, optimization" },
        { name: "Nginx", level: 70, description: "Web server, reverse proxy, load balancing" },
        { name: "Jira", level: 85, description: "Project management, agile workflows" }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "JavaScript", level: 92, description: "Modern JS, functional programming" },
        { name: "TypeScript", level: 88, description: "Static typing, advanced patterns" },
        { name: "Python", level: 80, description: "Scripting, automation, data processing" },
        { name: "C++", level: 75, description: "System programming, algorithms" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = {};
      skillCategories.forEach((category, categoryIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          const key = `${categoryIndex}-${skillIndex}`;
          setTimeout(() => {
            setAnimatedSkills(prev => ({
              ...prev,
              [key]: true
            }));
          }, (categoryIndex * 200) + (skillIndex * 100));
        });
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {category.title}
                  </h2>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => {
                    const key = `${categoryIndex}-${skillIndex}`;
                    const isAnimated = animatedSkills[key];

                    return (
                      <div key={skillIndex} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors duration-200">
                            {skill.name}
                          </h3>
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: isAnimated ? `${skill.level}%` : '0%'
                            }}
                          ></div>
                        </div>
                        
                        <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-200">
                          {skill.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                What Makes Me Stand Out
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                My diverse skill set allows me to build end-to-end solutions, from designing intuitive user interfaces 
                to architecting scalable backend systems and managing deployment pipelines.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Full-Stack Expertise
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Proficient in both frontend and backend technologies with the ability to build complete applications
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <Tool className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Modern Toolchain
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Experience with cutting-edge development tools and deployment technologies
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <Database className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Database Design
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Strong knowledge of both SQL and NoSQL databases with optimization skills
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
