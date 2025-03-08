import React, { useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  name, 
  percentage, 
  color = 'bg-accent' 
}) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    // Animate the skill bar on mount
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 200);
    
    return () => clearTimeout(timer);
  }, [percentage]);
  
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-xs text-gray-600 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${color} transition-all duration-1000 ease-out`} 
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar; 