import React from 'react';
import { FaReact, FaPython, FaNodeJs, FaDocker, FaAws } from 'react-icons/fa';
import {
  SiTypescript, SiNestjs, SiFastapi, SiKubernetes, SiPostgresql,
  SiOpenai, SiLangchain, SiTerraform, SiRedis, SiTailwindcss,
  SiGithubactions, SiMongodb, SiVite,
} from 'react-icons/si';

const items: { name: string; icon: React.ReactNode; color: string }[] = [
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  { name: 'FastAPI', icon: <SiFastapi />, color: '#009688' },
  { name: 'NestJS', icon: <SiNestjs />, color: '#E0234E' },
  { name: 'OpenAI', icon: <SiOpenai />, color: '#74aa9c' },
  { name: 'LangChain', icon: <SiLangchain />, color: '#65d4a2' },
  { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
  { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
  { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
  { name: 'Terraform', icon: <SiTerraform />, color: '#7B42BC' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#5d87ab' },
  { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'GitHub Actions', icon: <SiGithubactions />, color: '#2088FF' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#38B2AC' },
  { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
];

function Strip() {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.name}
          className="flex items-center gap-2.5 flex-shrink-0"
          style={{ padding: '0 1.75rem' }}
        >
          <span style={{ color: item.color, fontSize: '1.25rem', display: 'flex' }}>
            {item.icon}
          </span>
          <span
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.875rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
            }}
          >
            {item.name}
          </span>
          <span
            style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: 'rgba(var(--accent-rgb),0.4)',
              marginLeft: '1.75rem',
            }}
          />
        </div>
      ))}
    </>
  );
}

/** Infinite flowing strip of the tech stack. Pauses on hover. */
const Marquee: React.FC = () => {
  return (
    <div
      className="marquee-container overflow-hidden"
      style={{
        padding: '1.4rem 0',
        borderTop: '1px solid var(--glass-bg)',
        borderBottom: '1px solid var(--glass-bg)',
      }}
      aria-hidden="true"
    >
      <div className="marquee-track">
        <Strip />
        <Strip />
      </div>
    </div>
  );
};

export default Marquee;
