import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projectsData = [
    {
      title: 'E-commerce System',
      description: 'Product management with inventory tracking and admin controls',
      technologies: ['React', 'NestJS', 'PostgreSQL'],
      imageSrc: 'https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Task Dashboard',
      description: 'Task management with real-time updates and notifications',
      technologies: ['React', 'WebSockets', 'Vite'],
      imageSrc: 'https://img.freepik.com/free-vector/kanban-method-concept-illustration_114360-9827.jpg',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="pt-2 pb-8 relative">
      {/* Background blur element */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-100 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-row flex-nowrap gap-6 justify-center">
          {projectsData.map((project, index) => (
            <div key={index} className="w-[calc(50%-12px)] flex">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 