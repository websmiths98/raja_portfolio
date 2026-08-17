import { motion } from 'framer-motion';
import { Award, BookOpen, BadgeCheck } from 'lucide-react';

export default function Education() {
  return (
    <section className="section theme-cream" id="education">
      <div className="container">
        <motion.h2 
          className="section-title"
          style={{ textAlign: 'center', marginBottom: '3rem' }}
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
            style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '2rem', backgroundColor: 'white', borderRadius: '1rem', border: '1px solid var(--border-color)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>
              <BookOpen size={24} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', margin: 0 }}>Education</h3>
            </div>
            <div style={{ marginBottom: 'auto', paddingBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <h4 style={{ fontSize: '1.125rem', color: 'var(--text-primary)', margin: '0 0 0.25rem 0', lineHeight: 1.3 }}>B.E. Electronics & Communication Engineering</h4>
              <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>St. Joseph College of Engineering</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Affiliated to Anna University</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Chennai, Tamil Nadu, India</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              <span>Graduated: June 2023</span>
              <span style={{ fontWeight: 500, color: 'var(--accent-color)' }}>First Class Graduate</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '2rem', backgroundColor: 'white', borderRadius: '1rem', border: '1px solid var(--border-color)' }}
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

          {/* Certifications Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2"
            style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '1rem', border: '1px solid var(--border-color)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>
              <BadgeCheck size={24} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', margin: 0 }}>Certifications</h3>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ border: '1px solid var(--bg-secondary)', padding: '1.5rem', borderRadius: '0.75rem', backgroundColor: 'var(--bg-hero)' }}>
                <h4 style={{ fontSize: '1.125rem', color: 'var(--text-primary)', marginBottom: '0.25rem', fontWeight: 700 }}>Dotnet Training Program</h4>
                <div style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>SLA (IBM Authorized Certification Partner)</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  <div style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent-color)', padding: '0.25rem 0.75rem', borderRadius: '999px', fontWeight: 600 }}>Grade A</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <span style={{ fontWeight: 600 }}>Issued:</span> May 2024
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <span style={{ fontWeight: 600 }}>ID:</span> SLADT20012024
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
