import React, { useState } from 'react';
import { FaJs, FaPython, FaDatabase, FaReact, FaAngular, FaHtml5, FaCss3Alt, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiNestjs, SiPostgresql, SiMongodb, SiMysql } from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';

interface SkillTileProps {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const SkillTile: React.FC<SkillTileProps> = ({ name, icon, color }) => {
  // Generate a lighter version of the color for the gradient
  const getGradientStyle = () => {
    return {
      background: `linear-gradient(135deg, ${color} 0%, ${color}80 100%)`,
    };
  };
  
  return (
    <div 
      className="relative p-2 rounded-md shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
      style={getGradientStyle()}
    >
      <div className="flex items-center gap-2">
        {/* Icon container */}
        <div className="bg-white/20 backdrop-blur-sm p-1 rounded-full text-white">
          {icon}
        </div>
        
        {/* Skill name */}
        <span className="font-medium text-white text-sm">{name}</span>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const programmingSkills = [
    { name: 'JavaScript', icon: <FaJs size={20} />, color: '#F7DF1E' },
    { name: 'Python', icon: <FaPython size={20} />, color: '#3776AB' },
    { name: 'SQL', icon: <FaDatabase size={20} />, color: '#4479A1' },
  ];

  const frontendSkills = [
    { name: 'React.js', icon: <FaReact size={20} />, color: '#61DAFB' },
    { name: 'AngularJS', icon: <FaAngular size={20} />, color: '#DD0031' },
    { name: 'HTML/CSS', icon: <><FaHtml5 size={18} /><FaCss3Alt size={18} /></>, color: '#E34F26' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={20} />, color: '#38B2AC' },
  ];

  const backendSkills = [
    { name: 'NestJS', icon: <SiNestjs size={20} />, color: '#E0234E' },
    { name: 'REST APIs', icon: <AiOutlineApi size={20} />, color: '#0096FF' },
    { name: 'Express.js', icon: <SiExpress size={20} />, color: '#000000' },
    { name: 'Node.js', icon: <FaNodeJs size={20} />, color: '#339933' },
  ];

  const databaseTools = [
    { name: 'PostgreSQL', icon: <SiPostgresql size={20} />, color: '#336791' },
    { name: 'MongoDB', icon: <SiMongodb size={20} />, color: '#47A248' },
    { name: 'MySQL', icon: <SiMysql size={20} />, color: '#4479A1' },
    { name: 'Docker', icon: <FaDocker size={20} />, color: '#2496ED' },
  ];

  // Category navigation tabs
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section className="mb-4">
      {/* Skills navigation */}
      <div className="flex flex-wrap gap-2 mb-3">
        <button 
          onClick={() => setActiveCategory('all')}
          className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${
            activeCategory === 'all' 
              ? 'bg-indigo-600 text-white font-semibold' 
              : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
          }`}
        >
          All
        </button>
        <button 
          onClick={() => setActiveCategory('programming')}
          className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${
            activeCategory === 'programming' 
              ? 'bg-indigo-600 text-white font-semibold' 
              : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
          }`}
        >
          Languages
        </button>
        <button 
          onClick={() => setActiveCategory('frontend')}
          className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${
            activeCategory === 'frontend' 
              ? 'bg-indigo-600 text-white font-semibold' 
              : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
          }`}
        >
          Frontend
        </button>
        <button 
          onClick={() => setActiveCategory('backend')}
          className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${
            activeCategory === 'backend' 
              ? 'bg-indigo-600 text-white font-semibold' 
              : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
          }`}
        >
          Backend
        </button>
        <button 
          onClick={() => setActiveCategory('database')}
          className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${
            activeCategory === 'database' 
              ? 'bg-indigo-600 text-white font-semibold' 
              : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
          }`}
        >
          DB/Tools
        </button>
      </div>
      
      {/* Skills grid display */}
      <div className="grid gap-3">
        {/* Programming Languages */}
        {(activeCategory === 'all' || activeCategory === 'programming') && (
          <div className="transition-all duration-500">
            <h3 className="text-sm font-bold mb-2 text-indigo-600 dark:text-indigo-400">
              <span className="mr-1">💻</span> Programming Languages
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {programmingSkills.map(skill => (
                <SkillTile 
                  key={skill.name} 
                  name={skill.name} 
                  icon={skill.icon}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Frontend */}
        {(activeCategory === 'all' || activeCategory === 'frontend') && (
          <div className="transition-all duration-500">
            <h3 className="text-sm font-bold mb-2 text-indigo-600 dark:text-indigo-400">
              <span className="mr-1">🎨</span> Frontend Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {frontendSkills.map(skill => (
                <SkillTile 
                  key={skill.name} 
                  name={skill.name} 
                  icon={skill.icon}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Backend */}
        {(activeCategory === 'all' || activeCategory === 'backend') && (
          <div className="transition-all duration-500">
            <h3 className="text-sm font-bold mb-2 text-indigo-600 dark:text-indigo-400">
              <span className="mr-1">⚙️</span> Backend Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {backendSkills.map(skill => (
                <SkillTile 
                  key={skill.name} 
                  name={skill.name} 
                  icon={skill.icon}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Databases & Tools */}
        {(activeCategory === 'all' || activeCategory === 'database') && (
          <div className="transition-all duration-500">
            <h3 className="text-sm font-bold mb-2 text-indigo-600 dark:text-indigo-400">
              <span className="mr-1">🔧</span> Databases & Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {databaseTools.map(skill => (
                <SkillTile 
                  key={skill.name} 
                  name={skill.name} 
                  icon={skill.icon}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills; 