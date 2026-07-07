import React from 'react';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="eyebrow"><span className="num">05</span> // services</div>
        <div className="section-head">
          <h2>How I can help</h2>
          <p>Four things I actually build — not six ways of saying the same one.</p>
        </div>
        <div className="service-grid">
          <div className="service-card reveal">
            <div className="service-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
            </div>
            <h4>Full-Stack Web Applications</h4>
            <p>End-to-end builds with real backend logic: auth, databases, APIs, dashboards.</p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            </div>
            <h4>Business Websites &amp; Redesigns</h4>
            <p>New builds or revamps for businesses that need a site that actually reflects them.</p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>
            </div>
            <h4>Admin Dashboards &amp; Internal Tools</h4>
            <p>Interfaces for managing data, not just displaying it.</p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></svg>
            </div>
            <h4>Landing Pages &amp; Startup Sites</h4>
            <p>Fast, conversion-focused builds for launches.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;