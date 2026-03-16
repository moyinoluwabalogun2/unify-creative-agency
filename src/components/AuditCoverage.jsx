import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import './AuditCoverage.css';

const AuditCoverage = ({ heroCtaRef }) => {
  const audits = [
    {
      title: 'Your Profile Audit',
      description: 'Does your Instagram page convert visitors into followers and followers into leads? We check your bio, highlights, content positioning and link strategy.'
    },
    {
      title: 'Your Content Audit',
      description: 'Is your content attracting fans or buyers? We identify exactly where the disconnect is between your posts and your DMs.'
    },
    {
      title: 'Your Funnel Gap Analysis',
      description: 'Where are leads falling off? We map your current path from content to client and show you the exact leak.'
    },
    {
      title: 'Your #1 Priority Fix',
      description: 'Not a 40-point list. One thing — the highest-leverage move you can make right now to start seeing results.'
    }
  ];

  const scrollToHeroCta = () => {
    if (heroCtaRef?.current) {
      heroCtaRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <section className="audit-coverage section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="audit-header"
        >
          <h2>Here's what the audit covers</h2>
          <p className="audit-sub">
            In 48 hours or less, you'll get a personalised breakdown of:
          </p>
        </motion.div>

        <div className="audit-grid">
          {audits.map((audit, index) => (
            <motion.div
              key={index}
              className="audit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="audit-number">0{index + 1}</div>
              <h3>{audit.title}</h3>
              <p>{audit.description}</p>
              <div className="audit-check">
                <CheckCircle size={20} />
                <span>Included in your audit</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="audit-cta"
        >
          <button className="audit-cta-button" onClick={scrollToHeroCta}>
            GET MY FREE AUDIT
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AuditCoverage;