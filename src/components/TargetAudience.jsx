import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import heroImage from '../assets/placeholder.jpg';
import './TargetAudience.css';

const TargetAudience = ({ heroCtaRef }) => {
  const points = [
    "You're a coach or service provider posting content consistently",
    "You're getting views and followers but barely any DMs or booked calls",
    "You've tried tweaking your bio, your captions, your posting schedule but nothing's clicking",
    "You know the problem isn't your knowledge, it's the system connecting everything"
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
    <div className='back'>
    <section className="target-audience section">
     
      <div className="container">
        <div className="audience-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="audience-content"
          >
            <h2>This audit is built for you if...</h2>
            
            <div className="audience-points">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  className="point-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle2 size={20} className="point-icon" />
                  <p>{point}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="audience-footer"
            >
              If you read that and nodded — <span className="text-gradient">keep going.</span>
            </motion.p>

            <motion.button
              className="audience-cta"
              onClick={scrollToHeroCta}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              CLAIM YOUR AUDIT
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="audience-visual"
          >
            <img 
              src={heroImage} 
              alt="Client Acquisition System Preview" 
              className="hero-image"
            />
            <div className="visual-glow"></div>
          </motion.div>
        </div>
      </div>
      
    </section>
    </div>
  );
};

export default TargetAudience;