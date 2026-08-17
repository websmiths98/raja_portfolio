import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Languages & Core",
    items: ["Python", "Shell Script", "HTML", "CSS"]
  },
  {
    category: "Backend & APIs",
    items: ["Django ORM", "Django REST Framework", "Django Channels", "Flask", "RESTful APIs", "Fast API"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Raw SQL optimization"]
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "Linux", "Git/GitHub", "Jenkins", "AWS EC2", "OCI Compute", "Apache Web Server"]
  },
  {
    category: "AI & Automation",
    items: ["OpenAI API", "LLM", "Web Scraping (Selenium, BeautifulSoup)", "Cron Jobs", "RAG", "Claude AI"]
  }
];

export default function Skills() {
  return (
    <section className="section theme-coffee" id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skillGroup, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
              style={{
                padding: '1.5rem',
                borderRadius: '0.75rem',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
              }}
            >
              <h3 style={{ fontSize: '1.125rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
                {skillGroup.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skillGroup.items.map((item, i) => (
                  <span key={i} style={{
                    fontSize: '0.875rem',
                    padding: '0.35rem 0.75rem',
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    borderRadius: '0.375rem',
                    border: '1px solid var(--border-color)'
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
