import React from 'react';

export default function TechStrip() {
  const logos = [
    '/vscode.svg',
    '/ubuntu.svg',
    '/python.svg',
    '/n8n.svg',
    '/postgresql.svg',
    '/postman.svg',
    '/linux.svg',
    '/langchain-logo.svg',
    '/kubernetes.svg',
    '/jwt.svg',
    '/git.svg',
    '/docker.svg',
    '/cloudflare.svg',
    '/antigravity.svg'
  ];

  // We duplicate the logos array to create a seamless infinite loop
  const tickerItems = [...logos, ...logos];

  return (
    <section className="theme-coffee" style={{ padding: '2.5rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
      <div className="tech-ticker-container">
        <div className="tech-ticker-track">
          {tickerItems.map((logo, index) => {
            const name = logo.replace('.svg', '').replace('/', '');
            return (
              <img 
                key={`${name}-${index}`}
                src={logo} 
                alt={name} 
                title={name}
                className="tech-logo"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
