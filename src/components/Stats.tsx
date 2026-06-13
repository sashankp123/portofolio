import React from 'react';
import { FaCode, FaProjectDiagram, FaCertificate, FaClock } from 'react-icons/fa';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <FaClock size={24} />,
      value: '3+',
      label: 'Years Experience',
      color: 'from-blue-500 to-indigo-600',
      description: 'Building robust web applications'
    },
    {
      icon: <FaCode size={24} />,
      value: '90%+',
      label: 'Test Coverage',
      color: 'from-green-500 to-emerald-600',
      description: 'Cypress & Vitest framework'
    },
    {
      icon: <FaProjectDiagram size={24} />,
      value: '40%',
      label: 'Faster Deployments',
      color: 'from-purple-500 to-pink-600',
      description: 'Optimized CI/CD pipelines'
    },
    {
      icon: <FaCertificate size={24} />,
      value: '3.9',
      label: 'GPA',
      color: 'from-orange-500 to-red-600',
      description: 'Masters in IT from UC'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`relative bg-gradient-to-br ${stat.color} rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group overflow-hidden`}
        >
          {/* Shimmer effect overlay */}
          <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-3 bg-white/20 rounded-lg p-3 w-fit mx-auto">
              {stat.icon}
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm font-semibold mb-2">{stat.label}</div>
              <div className="text-xs opacity-90">{stat.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;

