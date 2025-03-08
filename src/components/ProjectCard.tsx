import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageSrc?: string;
  color: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageSrc,
  color
}) => {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full w-full flex flex-col border border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50">
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-95 transition-opacity duration-300 z-10`}></div>
      
      {/* Image background */}
      <div className="relative h-40 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="p-4 flex flex-col flex-grow relative z-0">
        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent relative z-20">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 group-hover:text-transparent relative z-20">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mt-auto relative z-20">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded group-hover:bg-white/20 group-hover:text-white transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Hidden content that appears on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <div className="text-center px-4">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/90 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 