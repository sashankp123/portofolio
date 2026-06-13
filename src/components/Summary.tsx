import React from 'react';

const Summary: React.FC = () => {
  return (
    <section className="mb-8">
      <h2 className="section-title">Summary</h2>
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg border-l-4 border-indigo-600">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          I'm a passionate Full Stack Software Engineer with over three years of experience building and deploying robust web
          applications. I love bringing ideas to life, from crafting clean, intelligent front-end architectures with React.js and TypeScript
          to building scalable APIs with NestJS. I'm a firm believer in the power of automation and DevOps, and I've honed my skills
          with Docker, Kubernetes (AKS), and Azure DevOps to streamline CI/CD pipelines and ensure seamless delivery. I'm always
          eager to collaborate and find innovative solutions that make a real, measurable impact.
        </p>
      </div>
    </section>
  );
};

export default Summary; 