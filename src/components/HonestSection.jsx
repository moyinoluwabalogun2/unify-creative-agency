import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import './HonestSection.css';

const HonestSection = ({ heroCtaRef }) => {
  const scrollToHeroCta = () => {
    if (heroCtaRef?.current) {
      heroCtaRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <div className="backg">
    <section className="honest-section section">
    
      <div className="container">
        <div className="honest-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="honest-content"
          >
            <div className="honest-badge">
              <Heart size={16} />
              <span>STRAIGHT TALK</span>
            </div>

            <h2>A straight answer about where we are</h2>

            <div className="honest-message">
              <p className="honest-lead">
                I'm going to be honest with you.
              </p>
              
              <p>
                Unify Creative Agency is in its building phase. We don't have a wall 
                of client logos — yet. What we do have is a proven system built from 
                studying the best client acquisition frameworks in the industry, tested 
                on real funnels, and now being offered free to a small group of coaches 
                who want results and don't mind being early.
              </p>
              
              <p className="honest-highlight">
                In exchange for the free audit, we ask one thing — 
                <span className="text-gradient"> if the advice works, tell people.</span>
              </p>
              
              <p className="honest-simple">That's the deal. Simple.</p>
            </div>

            <motion.button
              className="honest-cta"
              onClick={scrollToHeroCta}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET MY FREE AUDIT
              <ArrowRight size={18} />
            </motion.button>

            <p className="honest-micro">
              No spam. No pitch calls you didn't agree to. Just your audit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="honest-visual"
          >
            <div className="building-phase">
              <div className="phase-indicator">
                <span className="phase-dot"></span>
                <span className="phase-dot"></span>
                <span className="phase-dot active"></span>
              </div>
              <div className="building-content">
                <div className="building-item">
                  <div className="item-bar" style={{ width: '30%' }}></div>
                  <span>Client Logos</span>
                </div>
                <div className="building-item">
                  <div className="item-bar" style={{ width: '80%' }}></div>
                  <span>Proven System</span>
                </div>
                <div className="building-item">
                  <div className="item-bar" style={{ width: '100%' }}></div>
                  <span>Free Audits</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
    </div>
  );
};

export default HonestSection;