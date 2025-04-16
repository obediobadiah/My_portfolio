import React from 'react';
import { motion } from 'framer-motion';
import About from './About';
import Skills from './Skills';

const AboutSkillsSection = () => {
  return (
    <section id="about-skills" className="py-20 bg-white">
      <div className="max-w-7xl container mx-auto px-4 lg:px-8">
        <motion.h2 
          className="section-heading mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-secondaryDark font-mono">01.</span> About Me
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* About Column */}
          <motion.div 
            className="lg:w-3/5 custom-about-wrapper"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-1 h-full">
              <div className="bg-white rounded-lg shadow-sm h-full">
                <div className="border-b border-gray-100 px-5 py-3">
                  <h3 className="text-lg font-medium text-textDark">About Me</h3>
                </div>
                <div className="px-5 py-5">
                  <AboutContent />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Column */}
          <motion.div 
            className="lg:w-2/5 custom-skills-wrapper"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="p-1 h-full">
              <div className="bg-white rounded-lg shadow-sm h-full">
                <div className="border-b border-gray-100 px-5 py-3">
                  <h3 className="text-lg font-medium text-textDark">Technical Skills</h3>
                </div>
                <div className="px-4 py-5">
                  <SkillsContent />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Component to display just the content of About without the section wrapper
const AboutContent = () => {
  const AboutComponent = About;
  return <AboutComponent isEmbedded={true} />;
};

// Component to display just the content of Skills without the section wrapper
const SkillsContent = () => {
  const SkillsComponent = Skills;
  return <SkillsComponent isEmbedded={true} />;
};

export default AboutSkillsSection; 