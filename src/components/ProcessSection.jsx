import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import './ProcessSection.css';

const ProcessSection = ({ heroCtaRef }) => {
  const steps = [
    {
      step: '01',
      title: 'We review your Instagram page and funnel within 48 hours.'
    },
    {
      step: '02',
      title: 'You receive a personalised written audit with your findings and your #1 priority fix.'
    },
    {
      step: '03',
      title: 'If you want us to walk through it live and map out the full solution together — you\'ll have the option to book a free 20-minute call.'
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
    <section className="process-section section" id="process">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="process-header"
        >
          <h2>What happens after you apply</h2>
        </motion.div>

        <div className="process-steps">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="process-step"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step-indicator">
                <span className="step-number">{item.step}</span>
                {index < steps.length - 1 && <div className="step-line"></div>}
              </div>
              <div className="step-content">
                <CheckCircle size={20} className="step-icon" />
                <p>{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="process-cta"
        >
          <button className="process-cta-button" onClick={scrollToHeroCta}>
            START YOUR AUDIT
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;