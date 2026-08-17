import { motion } from 'framer-motion';

const experienceList = [
  {
    role: "Backend & DevOps",
    company: "Prince Capital Private Limited",
    project: "MarketForesee",
    duration: "Jun 2025 - Present",
    location: "Chennai, India",
    points: [
      "Architected and maintained backend microservices serving 20+ concurrent traders with real-time market data integration and optimized API response times (<200ms).",
      "Engineered Selenium-based web scraping automation (3+) processing 500+ daily data points from 8+ financial sources with 99.5% accuracy, reducing manual data entry by 80%.",
      "Built and deployed LLM-powered AI chatbot using OpenAI API & LangChain, reducing manual research time by 60% and improving trader decision-making speed by 45%.",
      "Implemented technical SEO optimizations (sitemap, crawl structure, Core Web Vitals fixes) improving organic visibility by 35% (150 → 202 indexed pages) and page load speed from 3.2s to 1.8s."
    ]
  },
  {
    role: "Backend Developer",
    company: "Prince Capital Private Limited",
    project: "Apex Esther Robotech",
    duration: "July 2024 - Jun 2025",
    location: "Chennai, India",
    points: [
      "Developed and deployed backend services integrating Master Trust Brokerage APIs, processing 500+ daily trading transactions with <2 second API response times and 99.5% system uptime.",
      "Built RESTful APIs using Django REST Framework and optimized raw SQL queries, reducing API latency by 40% (avg 800ms → 480ms) and improving database performance across financial dashboards.",
      "Collaborated with frontend team to reduce API payload size by 35%, enhancing user experience across 50+ financial dashboards and improving overall data transmission efficiency."
    ]
  }
];

export default function Experience() {
  return (
    <section className="section theme-coffee" id="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {experienceList.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="card"
              style={{ padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{exp.role}</h3>
                  <div style={{ fontSize: '1.125rem', color: 'var(--accent-color)', fontWeight: 500 }}>{exp.company}</div>
                  {exp.project && (
                    <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.25rem', fontWeight: 500 }}>
                      Project: <span style={{ color: 'var(--text-primary)' }}>{exp.project}</span>
                    </div>
                  )}
                </div>
                <div style={{ textAlign: 'right', color: 'var(--text-secondary)' }}>
                  <div style={{ fontWeight: 500 }}>{exp.duration}</div>
                  <div style={{ fontSize: '0.875rem' }}>{exp.location}</div>
                </div>
              </div>

              <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
