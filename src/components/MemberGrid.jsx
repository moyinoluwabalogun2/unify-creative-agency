/*import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './MemberGrid.css';

const MemberGrid = () => {
  const scrollRef = useRef(null);

  const members = [
    { name: 'Brian Mark', niche: 'Fitness Business Coach', followers: '601K' },
    { name: 'Ryan Nork', niche: 'Real Estate Market Advisor', followers: '208K' },
    { name: 'Carson Butler', niche: 'Content Marketer', followers: '104K' },
    { name: 'Khalid Louis', niche: 'CEO & Investor', followers: '675K' },
    { name: 'Stefan Jovanic', niche: 'Fitness Coach', followers: '166K' },
    { name: 'Julian Corzo', niche: 'Agency Owner', followers: '56K' },
    { name: 'Daniel Contreras', niche: 'Barber Business Coach', followers: '202K' },
    { name: 'Alvin Guo', niche: 'Low Back Specialist', followers: '283K' },
    { name: 'Aayush Swamy', niche: 'Content Marketer', followers: '71K' },
    { name: 'Codie Sanchez', niche: 'Investor', followers: '3M' },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="member-grid-section section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="member-header"
        >
          <h2>Trusted by <span className="text-gradient">50+ Coaches</span></h2>
          <p className="member-sub">Join early access members getting their systems fixed</p>
        </motion.div>
      </div>

      <div className="member-slider" ref={scrollRef}>
        <div className="member-track">
          {[...members, ...members].map((member, index) => (
            <motion.div
              key={index}
              className="member-card"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="member-avatar">
                <div className="avatar-placeholder"></div>
              </div>
              <div className="member-info">
                <h4>{member.name}</h4>
                <p>{member.niche}</p>
                <span className="member-followers">{member.followers} followers</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="member-stats">
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Early Members</span>
          </div>
          <div className="stat">
            <span className="stat-number">48h</span>
            <span className="stat-label">Audit Delivery</span>
          </div>
          <div className="stat">
            <span className="stat-number">4.9/5</span>
            <span className="stat-label">Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberGrid;*/