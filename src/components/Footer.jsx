import React from 'react';
import { motion } from 'framer-motion';
import {  Instagram, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="footer-brand"
          >
            <div className="footer-logo">
              <span className="logo-text">UNIFY</span>
              <span className="logo-text gradient-text">CREATIVE</span>
            </div>
            <p className="footer-tagline">
              Client acquisition systems for coaches and service businesses.
            </p>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="footer-links"
          >
            <h4>QUICK LINKS</h4>
            <ul>
              <li><a href="#audit">Free Audit</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="footer-contact"
          >
            <h4>CONTACT</h4>
            <ul>
              <li>
                <Mail size={16} />
                <a href="mailto:hello@unifycreative.com">hello@unifycreative.com</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="footer-social"
          >
            <h4>FOLLOW</h4>
            <div className="social-icons">
              
              <a href="@buildwithwallace" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="footer-bottom"
        >
          <p>&copy; {currentYear} Unify Creative Agency. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;