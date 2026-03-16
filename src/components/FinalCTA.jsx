import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './FinalCTA.css';

const FinalCTA = ({ heroCtaRef }) => {
  const scrollToHeroCta = () => {
    if (heroCtaRef?.current) {
      heroCtaRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <section className="final-cta-section section">
      <div className="container">
        <div className="cta-background">
          <div className="cta-grid"></div>
          <div className="cta-glow"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="final-cta-content"
        >
          <h2>
            Ready to fix <span className="text-gradient">your system?</span>
          </h2>

          <p className="final-cta-body">
            Join 50+ coaches who've already gotten their free audit.
          </p>

          <div className="final-cta-stats">
            <div className="final-stat">
              <span className="final-stat-number">50+</span>
              <span className="final-stat-label">Audits Delivered</span>
            </div>
            <div className="final-stat">
              <span className="final-stat-number">48h</span>
              <span className="final-stat-label">Avg. Response</span>
            </div>
            <div className="final-stat">
              <span className="final-stat-number">4.9/5</span>
              <span className="final-stat-label">Rating</span>
            </div>
          </div>

          <motion.button
            className="final-cta-button"
            onClick={scrollToHeroCta}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GET MY FREE AUDIT NOW
            <ArrowRight size={20} />
          </motion.button>

          <p className="final-cta-micro">
            Limited spots available this week. No spam, just value.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;