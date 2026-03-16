/*import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './TrustBar.css';

const TrustBar = () => {
  const logos = [
    'COACHES', 'CONSULTANTS', 'CREATORS', 'AUTHORS', 'SPEAKERS'
  ];

  return (
    <div className="trust-bar">
      <div className="container">
        <div className="trust-bar-content">
          <div className="rating">
           
            
          </div>

          <div className="trusted-by">
            <span className="trusted-label">Trusted by:</span>
            <div className="logo-strip">
              {logos.map((logo, index) => (
                <motion.span
                  key={index}
                  className="logo-item"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {logo}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;*/