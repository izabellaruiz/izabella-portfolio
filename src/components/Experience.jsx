import React from 'react';
import './Experience.css';

const experienceData = [
  {
    title: 'Social Media & Digital Design Intern',
    place: 'Plastic Surgery Central Florida',
    date: 'Jan 2024 – Present',
    description: 'Designed social content, wrote captions, and created branded promotional material for procedures and patient education.',
  },
  {
    title: 'Web Design Student Project Lead',
    place: 'University of Central Florida',
    date: 'Fall 2024',
    description: 'Led a capstone team in designing PostUp, an event discovery app. Oversaw UI design, research, and branding.',
  },
  {
    title: 'Creative Lead',
    place: 'PostUp App',
    date: 'Spring 2025',
    description: 'Spearheaded app branding and interface design. Built user flows, color schemes, typography systems, and interaction design.',
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2>Work Experience</h2>
      <div className="timeline">
        {experienceData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <span className="place">{item.place}</span>
              <span className="date">{item.date}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
