import React from 'react';

const FeaturedProjects = () => {
  return (
    <section className="projects" id="projects">
      <div className="wrap">
        <div className="eyebrow"><span className="num">02</span> // featured-engineering-projects</div>
        <div className="section-head">
          <h2>What I've built</h2>
          <p>Three systems that show how I think about real engineering problems — full-stack, end to end, not just CRUD.</p>
        </div>

        {/* ContractSense - flagship */}
        <div className="project-feature flagship reveal">
          <div>
            <span className="proj-tag">Flagship Project</span>
            <h3>ContractSense</h3>
            <p className="proj-desc">AI-powered contract analysis platform (LegalTech SaaS). Architected 12+ REST APIs and 5 task-specific AI pipelines — clause extraction, risk scoring, executive summaries, negotiation assistance, and semantic Q&amp;A — instead of a single general-purpose prompt.</p>
            <ul className="proj-features">
              <li>Chunked document-parsing pipeline handling PDF/DOCX/TXT contracts up to 100 pages (50MB), extending analysis beyond the LLM's context window</li>
              <li>Reduced full-contract analysis time by 30–45 seconds through adaptive batching of clause-level LLM requests</li>
              <li>Streamed Q&amp;A responses token-by-token via the Vercel AI SDK, improving perceived latency on long-form answers</li>
            </ul>
            <div className="proj-stack">
              <span className="stack-pill">Next.js</span><span className="stack-pill">TypeScript</span><span className="stack-pill">Node.js</span><span className="stack-pill">MongoDB</span><span className="stack-pill">Gemini</span><span className="stack-pill">Vercel AI SDK</span>
            </div>
            <div className="proj-actions">
              <a href="https://contractsense-sand.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
              <a href="https://github.com/Asmch/contractsense" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">View Code</a>
            </div>
          </div>
          <div className="proj-visual">
            <div className="vline"><span className="k">POST</span> /api/contracts/analyze</div>
            <div className="vline">&nbsp;&nbsp;<span className="p">pipeline</span>: <span className="s">"clause-extract"</span></div>
            <div className="vline"><span className="k">POST</span> /api/contracts/qa</div>
            <div className="vline">&nbsp;&nbsp;<span className="p">mode</span>: <span className="s">"stream"</span></div>
            <div className="vline"><span className="k">GET</span>&nbsp;&nbsp;/api/contracts/:id/risk</div>
            <div className="vline">&nbsp;&nbsp;<span className="p">status</span>: <span className="s">200 OK</span></div>
          </div>
        </div>

        <div className="projects-secondary">
          <div className="proj-card reveal">
            <span className="proj-tag">Security</span>
            <h3>SecureVault</h3>
            <p className="proj-desc">Encrypted password &amp; note management platform with JWT-authenticated protected routes and AES-encrypted storage for credentials and notes, plus a secure password generator to reduce reliance on password-only auth.</p>
            <ul className="proj-features">
              <li>TOTP two-factor authentication via Speakeasy, with auto-lock on inactivity</li>
              <li>k-anonymity breach-checking via range queries against hashed prefixes — credentials checked without ever transmitting plaintext</li>
            </ul>
            <div className="proj-stack">
              <span className="stack-pill">Node.js</span><span className="stack-pill">TypeScript</span><span className="stack-pill">MongoDB</span><span className="stack-pill">JWT</span><span className="stack-pill">CryptoJS</span><span className="stack-pill">Speakeasy</span>
            </div>
            <div className="proj-actions">
              <a href="https://password-vault-murex.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Live Demo</a>
              <a href="https://github.com/Asmch/Password-Vault" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Code</a>
            </div>
          </div>
          <div className="proj-card reveal">
            <span className="proj-tag">Microservice</span>
            <h3>API Rate Limiter</h3>
            <p className="proj-desc">Dockerized, distributed-safe rate-limiting microservice exposing 6 endpoints for per-key/user/IP throttling with tier-based limits.</p>
            <ul className="proj-features">
              <li>Implemented Token Bucket and Sliding Window algorithms as atomic Redis Lua scripts, ensuring race-free limits across concurrent app instances</li>
              <li>Designed a fail-open in-memory fallback with a circuit breaker, so Redis downtime degrades service gracefully instead of blocking all traffic</li>
              <li>Validated concurrency edge cases, middleware behavior, and circuit-breaker transitions with 32 Jest/Supertest tests</li>
            </ul>
            <div className="proj-stack">
              <span className="stack-pill">Node.js</span><span className="stack-pill">Express</span><span className="stack-pill">Redis</span><span className="stack-pill">Docker</span><span className="stack-pill">Jest/Supertest</span>
            </div>
            <div className="proj-actions">
              <a href="https://github.com/Asmch/API-RATE-LIMITER-SERVICE" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
