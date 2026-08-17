import { motion } from 'framer-motion';


const projectsList = [
  {
    title: "Stock Market Screener & Automation Framework",
    date: "Jul 2024 - Present",
    description: "Built real-time stock screener filtering 2000+ NSE companies by technical indicators with <3 second response time. Implemented cron-based automation scripts for market data processing at market close, reducing manual analysis time by 80% for 15+ daily traders.",
    tags: ["Django REST Framework", "PostgreSQL", "Python", "Cron Automation", "RESTful APIs"]
  },
  {
    title: "AI-Powered Weather Chatbot",
    date: "Personal Project",
    description: "Deployed region-specific weather assistant providing real-time forecasts for Tamil Nadu cities with 95%+ accuracy and <2 second response times.",
    tags: ["Django REST Framework", "OpenRouter GPT-4o", "OpenWeatherMap API", "JWT Authentication", "Docker"]
  }
];

export default function Projects() {
  return (
    <section className="section theme-cream" id="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Key Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projectsList.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{
                padding: '2rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '1rem',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 600 }}>{project.title}</h3>
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--accent-color)', fontWeight: 500, marginBottom: '1rem' }}>
                {project.date}
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
                {project.description}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={{ 
                    fontSize: '0.75rem', 
                    padding: '0.25rem 0.75rem', 
                    backgroundColor: 'white', 
                    color: 'var(--text-secondary)',
                    borderRadius: '9999px',
                    border: '1px solid var(--border-color)'
                  }}>
                    {tag}
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
