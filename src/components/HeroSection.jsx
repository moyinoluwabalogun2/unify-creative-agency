import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight,  Target, Zap } from 'lucide-react';
import heroImage from '../assets/hero-image.jpg';
import './HeroSection.css';

const HeroSection = ({ ctaRef }) => {
  const stats = [
    
   
  ];

  const handleCTAClick = () => {
    // Replace this URL with your actual link
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScCQeuA3Yji6yc8QmAKiXb5MUwptEZz7t6U4u6SsFnIv2y4Rw/viewform?usp=publish-editor';
  };

  return (
    <section className="hero-section section" id="audit">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
      </div>
      
      <div className="container">
        <div className="hero-grid-layout">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            

            <h1 className="hero-headline">
              <span className="text-gradient">Likes don't</span><br />
              pay bills

            </h1>

            <p className="hero-subheadline">
              Get a free audit that shows you exactly where your client acquisition 
              is breaking — and what to fix first.
            </p>

            <div className="hero-stats">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="stat-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Icon size={20} className="stat-icon" />
                    <div>
                      <span className="stat-number">{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button 
                ref={ctaRef}
                className="hero-main-cta" 
                onClick={handleCTAClick}
              >
                GET MY FREE AUDIT
                <ArrowRight size={20} />
              </button>
              
              <p className="hero-cta-micro">
                No spam. No pitch calls you didn't agree to. Just your audit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="trust-indicators"
            >
              
            </motion.div>
          </motion.div>
           <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-visual"
          >
             <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            <img 
  src={heroImage} 
  alt="Client Acquisition System Preview" 
  className="hero-image"
/>
          </div>
          </motion.div>

          
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;