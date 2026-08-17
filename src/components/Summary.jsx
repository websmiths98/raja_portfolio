import { motion } from 'framer-motion';

export default function Summary() {
  return (
    <section className="section theme-coffee" id="summary" style={{ padding: '4rem 0' }}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image Content (Moved to left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div 
              style={{ width: '100%', maxWidth: '400px', margin: '0 auto', filter: 'drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))' }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="/me3.png" 
                alt="Raja V" 
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </motion.div>
          </motion.div>

          {/* Text Content (Moved to right) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-title">
              About Me
            </h2>
            
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.8 }}>
              Hello, I'm a DevOps & Backend Developer from Chennai, India. I have 2+ years of experience building scalable infrastructure, containerized applications, and CI/CD pipelines.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Proficient in Docker, Kubernetes concepts, Linux, and deployment automation. Proven track record optimizing API performance, managing database infrastructure, and implementing infrastructure-as-code practices. Passionate about automation, monitoring, and operational excellence.
            </p>

            <div style={{ marginTop: '2rem', padding: '1rem 1.25rem', backgroundColor: 'rgba(16, 185, 129, 0.08)', borderRadius: '0.75rem', borderLeft: '4px solid #10b981' }}>
              <h3 style={{ fontSize: '1.05rem', color: '#10b981', marginBottom: '0.5rem', fontWeight: 600 }}>Interested Roles</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 500 }}>
                Python Backend Developer • DevOps • AI Backend Developer • Web Scraping / Automation Developer • Data/Financial Technology Backend Developer • Technical SEO Specialist
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
