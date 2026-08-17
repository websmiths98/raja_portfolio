import { motion } from 'framer-motion';

export default function Summary() {
  return (
    <section className="section theme-coffee" id="summary" style={{ padding: '4rem 0' }}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content (Moved to left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
          </motion.div>

          {/* Image Content (Moved to right, slightly increased size) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.div 
              style={{ width: '100%', maxWidth: '400px', margin: '0 auto', filter: 'drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))' }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="/me2-removebg-preview.png" 
                alt="Raja V" 
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
