import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-inner">
          <div className="footer-id"><strong>Asmita Kumari</strong><br />Full-stack developer building products and premium websites. Open to full-time roles and freelance work.</div>
          <div className="footer-social">
            <a href="https://github.com/Asmch" aria-label="GitHub"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5 3.3 9.3 7.8 10.8.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2.1.1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.8C23.5 5.7 18.3.5 12 .5z"/></svg></a>
            <a href="https://www.linkedin.com/in/asmita-x/" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM.5 8.5h9v15h-9v-15zM9.5 8.5h8.6v2.1h.1c1.2-2.1 4.1-2.1 4.9 0 .9 2.2.4 5 .4 7.9v5h-9v-4.3c0-1 0-2.4-1.5-2.4s-1.7 1.2-1.7 2.4v4.3h-9v-15z" transform="scale(0.8) translate(3,3)"/></svg></a>
            <a href="mailto:asmitachoudhary08@gmail.com" aria-label="Email"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/></svg></a>
          </div>
        </div>
        <div className="footer-copy">© 2026 Asmita Kumari. Built with React.js &amp; Tailwind CSS.</div>
      </div>
    </footer>
  );
};

export default Footer;