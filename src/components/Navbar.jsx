import React from 'react';
import { Download } from 'lucide-react';

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: 'rgba(253, 251, 247, 0.72)',
      backdropFilter: 'saturate(180%) blur(20px)',
      WebkitBackdropFilter: 'saturate(180%) blur(20px)',
      borderBottom: '1px solid rgba(0,0,0,0.05)',
      padding: '0.5rem 0',
      transition: 'background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1)'
    }}>
      <div className="container flex justify-between items-center" style={{ maxWidth: '980px' }}>

        {/* Logo */}
        <div style={{ fontWeight: 600, fontSize: '1.25rem', color: 'var(--text-dark)', letterSpacing: '-0.5px' }}>
          RAJA V
        </div>

        {/* CTA */}
        <div>
          <a href="/RAJA_CV.pdf" download style={{ 
            backgroundColor: 'var(--accent-color)', 
            color: 'white', 
            borderRadius: '999px', 
            padding: '6px 16px', 
            fontSize: '13px',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'none'
          }}>
            <Download size={14} /> Resume
          </a>
        </div>

      </div>
    </nav>
  );
}
