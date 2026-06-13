import React, { useState } from 'react';
import {
  FaJs, FaPython, FaDatabase, FaReact, FaNodeJs, FaDocker, FaAws, FaBrain, FaRobot,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiNestjs, SiPostgresql, SiMongodb, SiTypescript,
  SiNextdotjs, SiKubernetes, SiGithubactions, SiCypress, SiVitest,
  SiJest, SiVite, SiFastapi, SiTerraform, SiRedis, SiMysql, SiOracle,
  SiOpenai, SiLangchain, SiHuggingface, SiPytest,
} from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';
import { useReveal } from '../hooks/useReveal';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const allCategories: { id: string; label: string; skills: Skill[] }[] = [
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'Python', icon: <FaPython />, color: '#3776AB' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
      { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
      { name: 'SQL', icon: <FaDatabase />, color: '#4479A1' },
      { name: 'PL/SQL', icon: <FaDatabase />, color: '#F80000' },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    skills: [
      { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#aaaaaa' },
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
      { name: 'NestJS', icon: <SiNestjs />, color: '#E0234E' },
      { name: 'FastAPI', icon: <SiFastapi />, color: '#009688' },
      { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38B2AC' },
    ],
  },
  {
    id: 'ai',
    label: 'AI / ML',
    skills: [
      { name: 'OpenAI GPT-4', icon: <SiOpenai />, color: '#74aa9c' },
      { name: 'LangChain', icon: <SiLangchain />, color: '#65d4a2' },
      { name: 'RAG', icon: <FaBrain />, color: 'var(--link)' },
      { name: 'Pinecone / FAISS', icon: <FaDatabase />, color: 'var(--accent-soft)' },
      { name: 'Prompt Engineering', icon: <FaRobot />, color: '#f472b6' },
      { name: 'Hugging Face', icon: <SiHuggingface />, color: '#FFD21E' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
      { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
      { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
      { name: 'Terraform', icon: <SiTerraform />, color: '#7B42BC' },
      { name: 'GitHub Actions', icon: <SiGithubactions />, color: '#2088FF' },
      { name: 'CI/CD', icon: <AiOutlineApi />, color: 'var(--accent-strong)' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#5d87ab' },
      { name: 'Oracle', icon: <SiOracle />, color: '#F80000' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
      { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
    ],
  },
  {
    id: 'testing',
    label: 'Testing & QA',
    skills: [
      { name: 'Cypress', icon: <SiCypress />, color: '#4fb8a7' },
      { name: 'Vitest', icon: <SiVitest />, color: '#6E9F18' },
      { name: 'Jest', icon: <SiJest />, color: '#C21325' },
      { name: 'Pytest', icon: <SiPytest />, color: '#0A9EDC' },
      { name: 'TDD', icon: <AiOutlineApi />, color: 'var(--link)' },
    ],
  },
];

function SkillChip({ skill, order }: { skill: Skill; order: number }) {
  // color-mix works for both hex brand colors and CSS-var palette colors
  const tint = (pct: number) => `color-mix(in srgb, ${skill.color} ${pct}%, transparent)`;

  return (
    <div
      className="flex items-center gap-2 rounded-xl font-medium transition-all duration-250"
      style={{
        padding: '0.5rem 0.9rem',
        background: tint(8),
        border: `1px solid ${tint(16)}`,
        color: skill.color,
        fontSize: '0.82rem',
        cursor: 'default',
        animation: `scale-in 0.45s cubic-bezier(0.16,1,0.3,1) ${order * 0.04}s both`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = tint(15);
        (e.currentTarget as HTMLElement).style.borderColor = tint(31);
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 20px ${tint(15)}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = tint(8);
        (e.currentTarget as HTMLElement).style.borderColor = tint(16);
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      <span style={{ fontSize: '1rem' }}>{skill.icon}</span>
      {skill.name}
    </div>
  );
}

const Skills: React.FC = () => {
  const [active, setActive] = useState<string>('all');
  const ref = useReveal(0.08);

  const displayed =
    active === 'all' ? allCategories : allCategories.filter((c) => c.id === active);

  return (
    <div ref={ref} className="reveal">
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActive('all')}
          className="font-medium rounded-full transition-all duration-200"
          style={{
            padding: '0.35rem 1rem',
            fontSize: '0.82rem',
            background: active === 'all' ? 'linear-gradient(135deg,var(--accent),var(--accent-strong))' : 'var(--glass-mid)',
            color: active === 'all' ? 'var(--btn-text)' : 'var(--text-muted)',
            border: active === 'all' ? 'none' : '1px solid var(--glass-border)',
            boxShadow: active === 'all' ? '0 0 16px rgba(var(--accent-rgb),0.35)' : 'none',
          }}
        >
          All
        </button>
        {allCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className="font-medium rounded-full transition-all duration-200"
            style={{
              padding: '0.35rem 1rem',
              fontSize: '0.82rem',
              background: active === cat.id ? 'linear-gradient(135deg,var(--accent),var(--accent-strong))' : 'var(--glass-mid)',
              color: active === cat.id ? 'var(--btn-text)' : 'var(--text-muted)',
              border: active === cat.id ? 'none' : '1px solid var(--glass-border)',
              boxShadow: active === cat.id ? '0 0 16px rgba(var(--accent-rgb),0.35)' : 'none',
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="space-y-6">
        {displayed.map((cat) => (
          <div key={cat.id}>
            <h3
              className="font-semibold mb-3"
              style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em' }}
            >
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <SkillChip key={`${active}-${skill.name}`} skill={skill} order={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
