import React from 'react';
import './Skills.css';

interface SkillGroup {
  label: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    label: 'Backend',
    skills: ['C#', '.NET (Core)', 'ASP.NET Core', 'Orleans', 'EF Core'],
  },
  {
    label: 'DevOps & Cloud',
    skills: ['Docker', 'Azure', 'AWS', 'CI/CD', 'Infrastructure as Code'],
  },
  {
    label: 'Architecture',
    skills: [
      'Microservices',
      'Distributed Systems',
      'Vertical Slice Architecture',
      'Event-Driven Architecture',
    ],
  },
  {
    label: 'Other',
    skills: ['gRPC', 'Hangfire', 'Git', 'Unit Testing', 'Integration Testing'],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <div className="section-inner">
        <h2 className="section-title">Skills</h2>
        <div className="section-title-bar" />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.label} className="skill-group">
              <h3 className="skill-group-label">{group.label}</h3>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
