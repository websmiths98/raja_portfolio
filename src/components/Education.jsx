import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section className="section theme-cream" id="education">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education & Achievements
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '1rem', border: '1px solid var(--border-color)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>
              <BookOpen size={24} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', margin: 0 }}>Education</h3>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '1.125rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>B.E. Electronics & Communication Engineering</h4>
              <div style={{ color: 'var(--text-secondary)' }}>St. Joseph College of Engineering, Chennai</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              <span>Graduated: June 2023</span>
              <span style={{ fontWeight: 500, color: 'var(--accent-color)' }}>CGPA: 7.39/10</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '1rem', border: '1px solid var(--border-color)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>
              <Award size={24} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', margin: 0 }}>Key Achievements</h3>
            </div>
            <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <li>Integrated 5+ third-party brokerage APIs into production, processing 500+ daily transactions with zero downtime and 99.5% success rate.</li>
              <li>Optimized backend database queries reducing API response latency by 40% and achieving 99.5% system uptime.</li>
              <li>Built AI-powered automation reducing manual support tickets by 40% and increasing user engagement by 35%.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
