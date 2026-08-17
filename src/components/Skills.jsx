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
    items: ["PostgreSQL", "MySQL", "Raw SQL Optimization"]
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "Linux", "Git/GitHub", "Gogs", "Jenkins", "AWS EC2", "OCI Compute", "Apache Web Server", "Agile Methodology"]
  },
  {
    category: "AI & Automation",
    items: ["OpenAI API", "LLM", "Web Scraping (Selenium, BeautifulSoup, ETL)", "Cron Jobs", "RAG", "Claude AI"]
  },
  {
    category: "Technical SEO",
    items: [
      "Google Search Console", "Keyword Research", "Screaming Frog", 
      "Prompt Engineering", "AEO", "GEO", "On-Page SEO", "Off-Page SEO", 
      "XML Sitemaps", "Robots.txt Files", "Site Speed and Core Web Vitals", 
      "HTTPS Security", "Mobile Responsiveness", "Structured Data (Schema)", 
      "Resolving JavaScript Rendering"
    ]
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
              <h3 style={{ fontSize: '1.125rem', color: '#22c55e', marginBottom: '1rem', fontWeight: '600' }}>
                {skillGroup.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skillGroup.items.map((item, i) => (
                  <span key={i} style={{
                    fontSize: '0.875rem',
                    padding: '0.4rem 0.85rem',
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    borderRadius: '9999px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
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
