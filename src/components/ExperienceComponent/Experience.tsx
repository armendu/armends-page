import React from 'react';
import './Experience.css';

interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  stack: string[];
}

const roles: Role[] = [
  {
    title: 'Senior .NET Engineer',
    company: 'Corpay One',
    location: 'Remote',
    period: 'Sep 2023 — Present',
    description:
      'Built and maintained backend services for corporate payments and expense platforms serving the US market using .NET; focused on reliability, scalability, and financial data processing.',
    stack: ['C#', '.NET', 'ASP.NET Core'],
  },
  {
    title: 'Senior .NET Engineer',
    company: 'StarLabs LLC',
    location: 'Prishtina, Kosovo',
    period: 'Nov 2020 — Sep 2023',
    description:
      'Led development of distributed microservices for sportsbook platforms, handling betting and settlement flows using .NET Core and Orleans.',
    stack: ['C#', '.NET Core', 'Orleans', 'ASP.NET Core'],
  },
  {
    title: 'Senior .NET Engineer',
    company: 'NOVUS LLC',
    location: 'Prishtina, Kosovo',
    period: 'Jan 2020 — Nov 2020',
    description:
      'Built large-scale web applications with .NET Core; wrote technical specs and contributed to architecture decisions.',
    stack: ['C#', '.NET Core', 'ASP.NET Core'],
  },
  {
    title: 'Software Developer',
    company: 'Blackstone eIT',
    location: 'Prishtina, Kosovo',
    period: 'Apr 2019 — Jan 2020',
    description:
      'Developed enterprise conversational bots using .NET Bot Framework and WebChat, integrating with business systems and APIs.',
    stack: ['C#', '.NET Bot Framework', 'WebChat'],
  },
  {
    title: 'Software Developer',
    company: 'Abidat GmbH',
    location: 'Prishtina, Kosovo',
    period: 'Feb 2017 — Mar 2019',
    description:
      'Web development with C#, ASP.NET, and Angular; focused on implementation and unit testing.',
    stack: ['C#', 'ASP.NET', 'Angular'],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="section-inner">
        <h2 className="section-title">Experience</h2>
        <div className="section-title-bar" />
        <div className="experience-list">
          {roles.map((role, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{role.title}</h3>
                  <p className="experience-company">
                    {role.company}
                    {role.company && role.location ? ' · ' : ''}
                    {role.location}
                  </p>
                </div>
                {role.period && (
                  <span className="experience-period">{role.period}</span>
                )}
              </div>
              <p className="experience-desc">{role.description}</p>
              <div className="experience-stack">
                {role.stack.map((tag) => (
                  <span key={tag} className="stack-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
