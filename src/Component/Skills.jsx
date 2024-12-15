import React from "react";
import './Skills.css';
function Skills() {
  const skillSet = [
    { name: "HTML", level: "Expert" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "UI/UX Design", level: "Advanced" },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillSet.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-level">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
