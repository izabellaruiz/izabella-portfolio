import React from 'react';
import './Skills.css';

const skills = [
  { label: 'Figma', category: 'Design' },
  { label: 'HTML & CSS', category: 'Front-End' },
  { label: 'JavaScript', category: 'Front-End' },
  { label: 'React', category: 'Development' },
  { label: 'Adobe Creative Suite', category: 'Design' },
  { label: 'Wireframing', category: 'UX/UI' },
  { label: 'Branding', category: 'Creative' },
  { label: 'Leadership', category: 'Professional' },
  { label: 'Communication', category: 'Soft Skill' },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills & Strengths</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <span className="skill-label">{skill.label}</span>
            <span className="skill-category">{skill.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
