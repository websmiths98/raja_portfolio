import { motion } from 'framer-motion';
import { Database, Code, ArrowRight, TrendingUp, BarChart2, ShieldCheck } from 'lucide-react';

const workflowSteps = [
  { id: 1, title: 'Fetch Market Data', icon: BarChart2, desc: 'Live data from GDFL APIs' },
  { id: 2, title: 'Store Data', icon: Database, desc: 'Structured in PostgreSQL' },
  { id: 3, title: 'Strategy Engine', icon: Code, desc: 'Evaluate conditions in Python' },
  { id: 4, title: 'Generate Signal', icon: TrendingUp, desc: 'Buy or Sell decisions' },
  { id: 5, title: 'Execute Order', icon: ArrowRight, desc: 'Broker API via Buy/Sell modules' },
  { id: 6, title: 'Monitor Trades', icon: ShieldCheck, desc: 'Position & Order Book tracking' }
];

export default function DetailedExperience() {
  return (
    <section className="section theme-cream" id="experience-details">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Share Market Automation System
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Backend Developer Role
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              In my previous role, I worked on a share market automation system. The main objective was to automate the trading workflow based on predefined strategies. 
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              The application was highly modular, featuring separate Python modules for strategy logic, buy/sell executions, position tracking, and order book monitoring. This modular architecture made the application easier to maintain, test, and extend.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              My responsibilities included developing and maintaining these modules, integrating APIs, writing Python logic, managing PostgreSQL data, debugging trading workflows, and ensuring the end-to-end automation worked reliably.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', textAlign: 'center', color: 'var(--accent-color)' }}>
              Trading Workflow Architecture
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
              {workflowSteps.map((step, index) => (
                <div key={step.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ backgroundColor: 'var(--accent-light)', padding: '0.75rem', borderRadius: '50%', color: 'var(--accent-color)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <step.icon size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h5 style={{ fontSize: '1rem', margin: 0, color: 'var(--text-primary)' }}>{step.title}</h5>
                    <p style={{ fontSize: '0.875rem', margin: 0, color: 'var(--text-secondary)' }}>{step.desc}</p>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div style={{ color: 'var(--border-color)', display: 'flex', alignItems: 'center' }}>
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
