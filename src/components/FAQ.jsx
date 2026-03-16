import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQ = ({ heroCtaRef }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How fast will I get my audit?',
      answer: 'Within 48 hours of submitting your information. We review every application personally to ensure you get actionable insights.'
    },
    {
      question: 'Is this really free?',
      answer: 'Yes, completely free. In exchange, we only ask that if the advice works, you tell others about us. That\'s it.'
    },
    {
      question: 'Do I need a big following?',
      answer: 'Not at all. The audit works for any account size — from 0 to 100K+. We focus on your system, not your follower count.'
    },
    {
      question: 'Will you try to sell me something?',
      answer: 'No. The audit stands on its own. After receiving it, you\'ll have the option to book a free strategy call if you want to go deeper — but that\'s completely optional.'
    },
    {
      question: 'What platforms do you audit?',
      answer: 'Currently we focus on Instagram, as it\'s where most coaches and consultants build their audience. More platforms coming soon.'
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
    <div className="back">
    <section className="faq-section section" id="faq">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="faq-header"
        >
          <h2>Frequently Asked Questions</h2>
        </motion.div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="faq-icon"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-answer"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="faq-cta"
        >
          <button className="faq-cta-button" onClick={scrollToHeroCta}>
            GET YOUR FREE AUDIT
          </button>
        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default FAQ;