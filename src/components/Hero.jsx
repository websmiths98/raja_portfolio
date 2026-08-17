import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Code2, Database, Cloud, Phone } from 'lucide-react';

export default function Hero() {
  const [showPhone, setShowPhone] = useState(false);
  return (
    <section id="hero" className="hero-section">
      <div className="container w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <div className="hero-badges-container" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem', width: '100%' }}>
              <div className="hero-badge" style={{ marginBottom: 0 }}>
                <Code2 size={14} />
                DEVOPS & BACKEND DEVELOPER
              </div>
              <div className="hero-badge" style={{ marginBottom: 0, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#047857', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <span className="blink-dot" style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%', display: 'inline-block' }}></span>
                Based in Chennai
              </div>
            </div>

            <h1 className="hero-title">
              Building Scalable Solutions. Automating the <span className="text-accent">Future!</span>
            </h1>

            <p className="hero-subtitle">
              Backend Developer with 1+ years of experience building secure, scalable, and efficient web applications and DevOps automation
            </p>

            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => document.getElementById('experience-details').scrollIntoView({ behavior: 'smooth' })}>
                View My Work <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
              </button>
              <button 
                className="btn btn-outline" 
                onMouseEnter={() => setShowPhone(true)}
                onMouseLeave={() => setShowPhone(false)}
                style={{ 
                  minWidth: showPhone ? '180px' : '140px', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  borderColor: showPhone ? 'var(--accent-color)' : 'var(--border-color)',
                  color: showPhone ? 'var(--accent-color)' : 'var(--text-primary)'
                }}
              >
                {showPhone ? (
                  <>
                    <Phone size={16} /> +91 9361094344
                  </>
                ) : (
                  <>
                    <motion.div
                      animate={{ 
                        color: ['var(--text-primary)', 'var(--accent-color)', '#d97706', 'var(--text-primary)'] 
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: 'easeInOut' 
                      }}
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <Phone size={18} />
                    </motion.div>
                    Contact Me
                  </>
                )}
              </button>
            </div>

          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
            style={{ position: 'relative' }}
          >
            {/* Radial Backdrop */}
            <div className="bg-gradient-radial" style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '140%',
              paddingBottom: '140%',
              zIndex: -1,
              borderRadius: '50%'
            }}></div>

            <div className="hero-image-wrapper" style={{ width: '100%', maxWidth: '600px', position: 'relative' }}>
              <img
                src="/me_photo-removebg-preview.png"
                alt="Raja V"
                style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />

              {/* Floating Cards */}
              <FloatingCard
                icon={Code2}
                title="Backend"
                desc="Python, Django, REST APIs"
                className="hero-floating-card card-1"
                style={{ animationDelay: '0s' }}
              />
              <FloatingCard
                icon={Cloud}
                title="DevOps"
                desc="Automation & CI/CD"
                className="hero-floating-card card-2"
                style={{ animationDelay: '2s' }}
              />
              <FloatingCard
                icon={Database}
                title="Database"
                desc="PostgreSQL, Optimized Queries"
                className="hero-floating-card card-3"
                style={{ animationDelay: '1s' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}} />
    </section>
  );
}

function SocialIcon({ Icon, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-secondary)',
        transition: 'all 0.2s ease',
        backgroundColor: 'white'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.color = 'var(--accent-color)';
        e.currentTarget.style.borderColor = 'var(--accent-color)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.color = 'var(--text-secondary)';
        e.currentTarget.style.borderColor = 'var(--border-color)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <Icon size={18} />
    </a>
  );
}

function FloatingCard({ icon: Icon, title, desc, style, className = '' }) {
  return (
    <div className={`glass-card ${className}`} style={{
      padding: '1rem',
      borderRadius: '0.75rem',
      alignItems: 'center',
      gap: '1rem',
      animation: 'float 6s ease-in-out infinite',
      ...style
    }}>
      <div style={{ color: 'var(--accent-color)' }}>
        <Icon size={24} />
      </div>
      <div>
        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-dark)' }}>{title}</div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{desc}</div>
      </div>
    </div>
  );
}

function GithubIcon({ size = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
