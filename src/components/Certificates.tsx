import React from 'react';

const Certificates: React.FC = () => {
  return (
    <section className="mb-8">
      <h2 className="section-title">Certificates</h2>
      
      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600 transition-all hover:shadow-md">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-medium text-primary dark:text-dark-primary">IBM Full-Stack JavaScript Developer Professional Certificate</h3>
        </div>
      </div>
    </section>
  );
};

export default Certificates; 