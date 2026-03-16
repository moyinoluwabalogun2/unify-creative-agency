import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TargetAudience from './components/TargetAudience';
import AuditCoverage from './components/AuditCoverage';
import HonestSection from './components/HonestSection';
import ProcessSection from './components/ProcessSection';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import TrustBar from './components/TrustBar';
import MemberGrid from './components/MemberGrid';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroCtaRef = useRef(null);

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Navbar heroCtaRef={heroCtaRef} />
      <main>
        <HeroSection ctaRef={heroCtaRef} />
        <TrustBar />
        <TargetAudience heroCtaRef={heroCtaRef} />
        <MemberGrid />
        <AuditCoverage heroCtaRef={heroCtaRef} />
        <HonestSection heroCtaRef={heroCtaRef} />
        <ProcessSection heroCtaRef={heroCtaRef} />
        <FAQ heroCtaRef={heroCtaRef} />
        <FinalCTA heroCtaRef={heroCtaRef} />
      </main>
      <Footer />
    </>
  );
}

export default App;