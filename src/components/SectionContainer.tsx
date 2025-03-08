import React, { ReactNode } from 'react';

interface SectionContainerProps {
  id: string;
  title: string;
  children: ReactNode;
  subtitle?: string;
  headingClass?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  title,
  children,
  subtitle,
  headingClass = 'text-3xl'
}) => {
  return (
    <section id={id} className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-10">
          <h2 className={`${headingClass} font-bold text-gray-900 dark:text-white`}>
            {title}
          </h2>
          <div className="h-px bg-gray-200 dark:bg-gray-700 flex-grow ml-6"></div>
        </div>
        
        {subtitle && (
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm md:text-base max-w-3xl">
            {subtitle}
          </p>
        )}
        
        {children}
      </div>
    </section>
  );
};

export default SectionContainer; 