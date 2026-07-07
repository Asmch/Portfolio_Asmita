import React from 'react';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="wrap">
        <div className="eyebrow"><span className="num">04</span> // skills</div>
        <div className="section-head">
          <h2>Toolset</h2>
          <p>Grouped by how I actually use them — no invented percentages.</p>
        </div>
        <div className="skill-groups">
          <div className="skill-group reveal">
            <h4>languages</h4>
            <div className="pill-row">
              <span className="skill-pill">JavaScript</span><span className="skill-pill">TypeScript</span><span className="skill-pill">Java</span><span className="skill-pill">Python</span><span className="skill-pill">SQL</span>
            </div>
          </div>
          <div className="skill-group reveal">
            <h4>frontend</h4>
            <div className="pill-row">
              <span className="skill-pill">React</span><span className="skill-pill">Next.js</span><span className="skill-pill">Tailwind CSS</span><span className="skill-pill">HTML/CSS</span>
            </div>
          </div>
          <div className="skill-group reveal">
            <h4>backend &amp; data</h4>
            <div className="pill-row">
              <span className="skill-pill">Node.js</span><span className="skill-pill">Express</span><span className="skill-pill">MongoDB</span><span className="skill-pill">REST APIs</span><span className="skill-pill">JWT Auth</span>
            </div>
          </div>
          <div className="skill-group reveal">
            <h4>tools</h4>
            <div className="pill-row">
              <span className="skill-pill">Git / GitHub</span><span className="skill-pill">Postman</span><span className="skill-pill">Vercel</span><span className="skill-pill">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;