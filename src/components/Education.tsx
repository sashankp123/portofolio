import React from 'react';

const Education: React.FC = () => {
  return (
    <section className="mb-8">
      <h2 className="section-title">Education</h2>
      
      <div className="education-item">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-lg font-bold text-primary dark:text-dark-primary">University of Cincinnati</h3>
          <span className="text-sm text-gray-600 dark:text-gray-400">Cincinnati, OH</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-700 dark:text-gray-300">Information Technology</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">12/2024</p>
        </div>
      </div>
      
      <div className="education-item">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-lg font-bold text-primary dark:text-dark-primary">Vellore Institute of Technology</h3>
          <span className="text-sm text-gray-600 dark:text-gray-400">Vellore, India</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-700 dark:text-gray-300">Information Technology</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">08/2023</p>
        </div>
      </div>
    </section>
  );
};

export default Education; 