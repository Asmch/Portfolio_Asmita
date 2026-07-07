import React from 'react';

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="reveal">
            <div className="hero-eyebrow">open to opportunities</div>
            <h1 className="hero-title">Software Engineer building <span className="grad">full-stack</span> products &amp; AI-powered tools</h1>
            <div className="hero-kicker">
              <strong>Asmita Kumari</strong><span className="dot">·</span>Final-Year CSE<span className="dot">·</span>9.25 CGPA<span className="dot">·</span>235+ DSA
            </div>
            <p className="hero-sub">I build end-to-end products with Next.js, Node.js, APIs, authentication, and databases — from AI SaaS like ContractSense to production websites for businesses across education, industrial, and ecommerce sectors.</p>
            <div className="proof-strip">
              <div className="proof-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5"/></svg><span>Built <strong>ContractSense</strong> — an AI contract-analysis platform with 12+ REST APIs</span></div>
              <div className="proof-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5"/></svg><span>Shipped <strong>4 client websites</strong> across ecommerce, education &amp; industrial sectors</span></div>
              <div className="proof-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5"/></svg><span>Comfortable across the stack — <strong>UI, APIs, databases, auth &amp; deployment</strong></span></div>
            </div>
            <div className="hero-ctas">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-ghost">Hire Me</a>
              <a href="https://drive.google.com/file/d/1PNyzIyKl4qhZuoRkPsabNtA1aYScdGLO/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-text">View Resume →</a>
            </div>
          </div>
          <div className="reveal">
            <div className="terminal">
              <div className="term-bar">
                <span className="term-dot"></span><span className="term-dot"></span><span className="term-dot"></span>
                <span className="term-title">asmita.dev — profile.ts</span>
              </div>
              <div className="term-body">
                <div className="ln"><span className="lno">1</span><span><span className="tk-kw">const</span> <span className="tk-var">developer</span> = {'{'}</span></div>
                <div className="ln"><span className="lno">2</span><span>&nbsp;&nbsp;<span className="tk-prop">name</span>: <span className="tk-str">"Asmita Kumari"</span>,</span></div>
                <div className="ln"><span className="lno">3</span><span>&nbsp;&nbsp;<span className="tk-prop">role</span>: <span className="tk-str">"Full-Stack Developer"</span>,</span></div>
                <div className="ln"><span className="lno">4</span><span>&nbsp;&nbsp;<span className="tk-prop">focus</span>: [<span className="tk-str">"Full-stack apps"</span>,</span></div>
                <div className="ln"><span className="lno">5</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="tk-str">"AI products"</span>, <span className="tk-str">"APIs"</span>, <span className="tk-str">"Auth"</span>],</span></div>
                <div className="ln"><span className="lno">6</span><span>&nbsp;&nbsp;<span className="tk-prop">stack</span>: [<span className="tk-str">"Next.js"</span>, <span className="tk-str">"Node"</span>, <span className="tk-str">"Mongo"</span>],</span></div>
                <div className="ln"><span className="lno">7</span><span>&nbsp;&nbsp;<span className="tk-prop">featuredWork</span>: [<span className="tk-str">"ContractSense"</span>,</span></div>
                <div className="ln"><span className="lno">8</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="tk-str">"SecureVault"</span>, <span className="tk-str">"4 client sites"</span>],</span></div>
                <div className="ln"><span className="lno">9</span><span>&nbsp;&nbsp;<span className="tk-com">// building &amp; open to roles</span></span></div>
                <div className="ln"><span className="lno">10</span><span>&nbsp;&nbsp;<span className="tk-prop">status</span>: <span className="tk-str">"open_to_work"</span><span className="cursor"></span></span></div>
                <div className="ln"><span className="lno">11</span><span>{'}'};</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section className="strip">
        <div className="wrap strip-grid">
          <div className="strip-item reveal"><div className="strip-num">9.25</div><div className="strip-label">CGPA / 10.0</div></div>
          <div className="strip-item reveal"><div className="strip-num">235+</div><div className="strip-label">DSA Problems Solved</div></div>
          <div className="strip-item reveal"><div className="strip-num">3</div><div className="strip-label">Full-Stack Systems Shipped</div></div>
          <div className="strip-item reveal"><div className="strip-num">4</div><div className="strip-label">Client Sites Live</div></div>
        </div>
      </section>
    </>
  );
};

export default Hero;