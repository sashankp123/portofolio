import React from 'react';

const Experience: React.FC = () => {
  const experienceData = [
    {
      title: 'Software Engineer',
      company: 'Experian',
      location: 'Remote',
      date: '08/2024 - Present',
      description: [
        'Developed web applications using React.js and Vite with JavaScript, connecting them to a NestJS backend via REST APIs and PostgreSQL to enhance scalability, user experience, and performance within the team.',
        'Implemented a CI/CD pipeline using Docker, automating build, test, and deployment processes to reduce release cycles by 40%, ensuring stable and rapid delivery for React.js and NestJS applications.',
        'Collaborated with the team to keep tasks on schedule, assisting in coordinating front-end and backend efforts to ensure smooth deployments through effective teamwork and communication.'
      ]
    }
  ];

  return (
    <section className="mb-8">
      
      <div className="space-y-6">
        {experienceData.map((job, index) => (
          <div 
            key={index}
            className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
          >
            {/* Company stripe */}
            <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            
            <div className="p-5">
              {/* Header */}
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-lg font-medium text-gray-700 dark:text-gray-300">{job.company}</span>
                    {job.location && (
                      <span className="ml-2 text-gray-600 dark:text-gray-400">• {job.location}</span>
                    )}
                  </div>
                </div>
                
                <span className="mt-2 md:mt-0 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-md">
                  {job.date}
                </span>
              </div>
              
              {/* Description */}
              <ul className="mt-4 space-y-3">
                {job.description.map((item, idx) => (
                  <li key={idx} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700 dark:text-gray-300">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 