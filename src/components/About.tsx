import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="wrap">
        <div className="eyebrow"><span className="num">01</span> // about</div>
        <div className="about-grid">
          <div className="journey reveal">
            <h2 style={{ fontFamily: 'var(--mono)', fontSize: 'clamp(24px,3vw,32px)', marginBottom: '22px' }}>My Journey</h2>
            <p>I'm a <strong>final-year Computer Science student at Haldia Institute of Technology</strong>, building full-stack products end-to-end — from data modeling and API design through to the interfaces people actually use.</p>
            <p>I've picked up most of my instinct for shipping under a deadline through active hackathon participation, and I've carried that into real work: an AI-powered contract analysis tool, a security-focused authentication system, and four production websites for businesses across ecommerce, education, and industrial sectors.</p>
          </div>
          <div className="timeline reveal">
            <div className="tl-item">
              <div className="tl-gutter">01</div>
              <div className="tl-body">
                <h4>B.Tech in Computer Science &amp; Engineering</h4>
                <div className="tl-meta">Haldia Institute of Technology · 2023–2027</div>
                <p>CGPA 9.25/10.0 — Data Structures &amp; Algorithms, DBMS, Operating Systems, Computer Networks.</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-gutter">02</div>
              <div className="tl-body">
                <h4>Full-Stack Project Delivery</h4>
                <div className="tl-meta">Independent &amp; Client Work · 2025–Present</div>
                <p>Designed and shipped 3 full-stack systems and 4 client websites end-to-end — data modeling, APIs, auth, frontend, and deployment.</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-gutter">03</div>
              <div className="tl-body">
                <h4>Hackathons &amp; Competitions</h4>
                <div className="tl-meta">Active Participant · 2024–Present</div>
                <p>Won Best Jury Award and ₹10,000 cash prize at the AI For Everyone Innovation Arena Grand Finale.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;