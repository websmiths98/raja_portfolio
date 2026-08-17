import React from 'react';
import { Code2, Database, Cloud, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TechStrip() {
  const techData = [
    {
      icon: Code2,
      title: "Backend Development",
      desc: "Python, Django, REST API"
    },
    {
      icon: Database,
      title: "Database",
      desc: "PostgreSQL, SQL"
    },
    {
      icon: Cloud,
      title: "DevOps",
      desc: "Docker, CI/CD, AWS"
    },
    {
      icon: Wrench,
      title: "Tools",
      desc: "Git, Linux, Nginx"
    }
  ];

  return (
    <section className="theme-coffee" style={{ padding: '2rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {techData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <div style={{ 
                backgroundColor: 'var(--accent-light)', 
                color: 'var(--accent-color)', 
                padding: '0.75rem', 
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <item.icon size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.25rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
