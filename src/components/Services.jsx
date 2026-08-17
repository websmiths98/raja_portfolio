import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Backend Development",
      desc: "Building RESTful APIs and robust backend services with Django."
    },
    {
      icon: Database,
      title: "Database Design",
      desc: "Designing efficient schemas and writing optimized SQL queries."
    },
    {
      icon: Cloud,
      title: "DevOps Automation",
      desc: "Automating CI/CD pipelines and infrastructure with modern tools."
    },
    {
      icon: Zap,
      title: "System Integration",
      desc: "Integrating third-party APIs and ensuring seamless workflows."
    }
  ];

  return (
    <section id="services" className="section theme-cream">
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
          <h2 className="section-title">What I Do</h2>
          <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--accent-color)', margin: '0 auto 1.5rem', borderRadius: '2px' }}></div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
            I build and deploy robust backend systems and automate infrastructure to deliver reliable and scalable applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
              }}
            >
              <div style={{ 
                width: '50px', 
                height: '50px', 
                backgroundColor: 'var(--accent-light)', 
                color: 'var(--accent-color)', 
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>{service.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
