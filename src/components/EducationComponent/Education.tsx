import React from 'react';
import './Education.css';

interface Degree {
  degree: string;
  field: string;
  school: string;
  location: string;
}

const degrees: Degree[] = [
  {
    degree: 'Master of Science',
    field: 'Computer Engineering',
    school: 'University of Prishtina "Hasan Prishtina"',
    location: 'Prishtina, Kosovo',
  },
  {
    degree: 'Bachelor of Science',
    field: 'Computer Engineering',
    school: 'University of Prishtina "Hasan Prishtina"',
    location: 'Prishtina, Kosovo',
  },
];

const languages = [
  { name: 'Albanian', level: 'Native' },
  { name: 'English', level: 'Full Professional Proficiency' },
];

const Education: React.FC = () => {
  return (
    <section id="education" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="section-inner">
        <h2 className="section-title">Education</h2>
        <div className="section-title-bar" />
        <div className="education-list">
          {degrees.map((d, i) => (
            <div key={i} className="education-item">
              <div className="education-degree">{d.degree}</div>
              <div className="education-field">{d.field}</div>
              <div className="education-school">{d.school} · {d.location}</div>
            </div>
          ))}
        </div>

        <h2 className="section-title" style={{ marginTop: '56px' }}>Languages</h2>
        <div className="section-title-bar" />
        <div className="languages-list">
          {languages.map((lang) => (
            <div key={lang.name} className="language-item">
              <span className="language-name">{lang.name}</span>
              <span className="language-level">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
