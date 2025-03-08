import React from 'react';

interface TimelineItemProps {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  title, 
  company, 
  location, 
  date, 
  description, 
  isLast = false 
}) => {
  return (
    <div className="relative pl-6 pb-6">
      {/* Line */}
      {!isLast && (
        <div className="absolute top-5 left-2.5 h-full w-px bg-gray-300 dark:bg-gray-700"></div>
      )}
      
      {/* Circle */}
      <div className="absolute top-5 left-0 h-5 w-5 rounded-full border-2 border-indigo-500 bg-white dark:bg-gray-800 z-10"></div>
      
      {/* Content */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-md border border-gray-100 dark:border-gray-700 hover:border-indigo-100 dark:hover:border-indigo-900 transition-all">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2">
          <h3 className="text-base font-bold text-gray-800 dark:text-gray-100">{title}</h3>
          <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded-full">{date}</span>
        </div>
        
        <div className="mb-3 text-sm">
          <span className="text-gray-700 dark:text-gray-300 font-medium">{company}</span>
          {location && (
            <span className="text-gray-500 dark:text-gray-400 ml-2">({location})</span>
          )}
        </div>
        
        <ul className="list-disc pl-4 text-sm text-gray-600 dark:text-gray-400 space-y-1.5">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface TimelineProps {
  items: Array<Omit<TimelineItemProps, 'isLast'>>;
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="py-2">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};

export default Timeline; 