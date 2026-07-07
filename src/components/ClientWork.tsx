import React from 'react';

const ClientWork = () => {
  return (
    <section className="clientwork" id="clientwork">
      <div className="wrap">
        <div className="eyebrow"><span className="num">03</span> // selected-client-work</div>
        <div className="section-head">
          <h2>Real websites, shipped for real businesses</h2>
          <p>Across ecommerce, education, and industrial sectors — separate from the engineering projects above by design.</p>
        </div>
        <div className="client-grid">
          <div className="client-card reveal">
            <div className="client-browser">
              <div className="client-browser-bar">
                <span className="term-dot" style={{ background: '#ff5f57' }}></span><span className="term-dot" style={{ background: '#febc2e' }}></span><span className="term-dot" style={{ background: '#28c840' }}></span>
                <span className="client-url">selighthouse.com</span>
              </div>
              <div className="client-preview"><img src="/selight.png" alt="SELightHouse Preview" /></div>
            </div>
            <div className="client-body">
              <span className="client-sector-tag">ecommerce</span>
              <span className="client-name">SELightHouse</span>
              <p className="client-desc">Product-focused storefront built for clarity and fast browsing on mobile, with a checkout flow designed to reduce drop-off.</p>
              <div className="client-footer">
                <div className="client-stack"><span className="stack-pill">React</span><span className="stack-pill">Tailwind</span></div>
                <a href="https://www.selighthouse.com/" target="_blank" rel="noopener noreferrer" className="client-visit">Visit Site →</a>
              </div>
            </div>
          </div>
          <div className="client-card reveal">
            <div className="client-browser">
              <div className="client-browser-bar">
                <span className="term-dot" style={{ background: '#ff5f57' }}></span><span className="term-dot" style={{ background: '#febc2e' }}></span><span className="term-dot" style={{ background: '#28c840' }}></span>
                <span className="client-url">pelletburners.co.in</span>
              </div>
              <div className="client-preview"><img src="/json.png" alt="Pellet Burners Preview" /></div>
            </div>
            <div className="client-body">
              <span className="client-sector-tag">industrial</span>
              <span className="client-name">Pellet Burners India</span>
              <p className="client-desc">Business site for an industrial equipment manufacturer — product specs, inquiries, and dealer contact built to convert B2B visitors.</p>
              <div className="client-footer">
                <div className="client-stack"><span className="stack-pill">React</span><span className="stack-pill">Next.js</span></div>
                <a href="https://www.pelletburners.co.in/" target="_blank" rel="noopener noreferrer" className="client-visit">Visit Site →</a>
              </div>
            </div>
          </div>
          <div className="client-card reveal">
            <div className="client-browser">
              <div className="client-browser-bar">
                <span className="term-dot" style={{ background: '#ff5f57' }}></span><span className="term-dot" style={{ background: '#febc2e' }}></span><span className="term-dot" style={{ background: '#28c840' }}></span>
                <span className="client-url">matrixacademyedu.in</span>
              </div>
              <div className="client-preview"><img src="/matrix.png" alt="Matrix Academy Preview" /></div>
            </div>
            <div className="client-body">
              <span className="client-sector-tag">education</span>
              <span className="client-name">Matrix Academy</span>
              <p className="client-desc">Landing page for an academy offering expert-led mentorship programs — animated, interactive UI built to drive enrollment.</p>
              <div className="client-footer">
                <div className="client-stack"><span className="stack-pill">React</span><span className="stack-pill">Tailwind</span></div>
                <a href="https://www.matrixacademyedu.in/" target="_blank" rel="noopener noreferrer" className="client-visit">Visit Site →</a>
              </div>
            </div>
          </div>
          <div className="client-card reveal">
            <div className="client-browser">
              <div className="client-browser-bar">
                <span className="term-dot" style={{ background: '#ff5f57' }}></span><span className="term-dot" style={{ background: '#febc2e' }}></span><span className="term-dot" style={{ background: '#28c840' }}></span>
                <span className="client-url">dslbazar.com</span>
              </div>
              <div className="client-preview"><img src="/dsl.png" alt="DSL Bazar Preview" /></div>
            </div>
            <div className="client-body">
              <span className="client-sector-tag">service-based</span>
              <span className="client-name">DSL Bazar</span>
              <p className="client-desc">Service-based site built for straightforward browsing and inquiries, with a service catalog structured for easy scaling.</p>
              <div className="client-footer">
                <div className="client-stack"><span className="stack-pill">JavaScript</span><span className="stack-pill">Node.js</span></div>
                <a href="https://www.dslbazar.com/" target="_blank" rel="noopener noreferrer" className="client-visit">Visit Site →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientWork;
