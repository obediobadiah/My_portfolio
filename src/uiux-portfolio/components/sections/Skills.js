import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = ({ isEmbedded = false }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillsData = [
    {
      category: 'Design Tools',
      skills: [
        { name: 'Figma', level: 95 },
        { name: 'Adobe XD', level: 92 },
        { name: 'Sketch', level: 88 },
        { name: 'Adobe Photoshop', level: 90 },
        { name: 'Adobe Illustrator', level: 85 },
        { name: 'InVision', level: 88 },
        { name: 'Zeplin', level: 80 },
        { name: 'Principle', level: 75 },
        { name: 'Protopie', level: 82 },
        { name: 'Framer', level: 78 },
      ],
    },
    {
      category: 'UI Design',
      skills: [
        { name: 'Visual Design', level: 95 },
        { name: 'Interaction Design', level: 90 },
        { name: 'Responsive Design', level: 92 },
        { name: 'Design Systems', level: 88 },
        { name: 'Typography', level: 90 },
        { name: 'Color Theory', level: 92 },
        { name: 'Iconography', level: 85 },
        { name: 'Mobile UI', level: 90 },
        { name: 'Web UI', level: 92 },
      ],
    },
    {
      category: 'UX Design',
      skills: [
        { name: 'User Research', level: 88 },
        { name: 'User Personas', level: 85 },
        { name: 'Wireframing', level: 92 },
        { name: 'Prototyping', level: 90 },
        { name: 'Usability Testing', level: 88 },
        { name: 'Information Architecture', level: 85 },
        { name: 'User Flows', level: 90 },
        { name: 'Heuristic Evaluation', level: 82 },
        { name: 'Accessibility', level: 88 },
      ],
    },
    {
      category: 'Front-End',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript (Basic)', level: 80 },
        { name: 'SCSS/SASS', level: 85 },
        { name: 'CSS Animations', level: 88 },
        { name: 'Responsive Implementation', level: 85 },
        { name: 'Bootstrap', level: 82 },
        { name: 'Tailwind CSS', level: 80 },
      ],
    },
    {
      category: 'Professional Skills',
      skills: [
        { name: 'Design Thinking', level: 92 },
        { name: 'Storytelling', level: 88 },
        { name: 'Design Presentation', level: 85 },
        { name: 'Team Collaboration', level: 92 },
        { name: 'Design Documentation', level: 88 },
        { name: 'Client Communication', level: 85 },
        { name: 'Design Critiques', level: 88 },
        { name: 'Problem Solving', level: 90 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    },
  };

  const getSkillLevelColor = (level) => {
    if (level >= 90) return 'bg-secondaryDark';
    if (level >= 80) return 'bg-secondaryDark/90';
    if (level >= 70) return 'bg-secondaryDark/80';
    return 'bg-secondaryDark/70';
  }

  // If component is embedded, render only the content without section wrapper
  if (isEmbedded) {
    return (
      <div className="skills-content">
        {/* Category Pills */}
        <div className="mb-5 flex flex-wrap gap-2">
          {skillsData.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-3 py-1 text-xs rounded-full transition-all duration-300 
                ${activeCategory === idx 
                  ? 'bg-secondaryDark text-white shadow-sm' 
                  : 'bg-gray-100 text-textDark hover:bg-gray-200'}`}
            >
              {category.category}
            </button>
          ))}
        </div>
        
        {/* Skills List */}
        <div key={activeCategory} className="px-2">
          <div className="space-y-3">
            {skillsData[activeCategory].skills.slice(0, 8).map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex items-center mb-1.5">
                  <span className="text-sm text-textDark font-medium flex-grow">{skill.name}</span>
                  <span className="text-secondaryDark text-xs ml-2">
                    {skill.level}%
                  </span>
                </div>
                <div className="relative h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`absolute left-0 top-0 h-full rounded-full ${getSkillLevelColor(skill.level)}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-xs text-textBaseLight italic">
            <p>Based on professional experience</p>
          </div>
        </div>
      </div>
    );
  }

  // Regular standalone version of the component
  return (
    <section id="skills" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.h2 
          className="section-heading mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-secondaryDark font-mono">03.</span> My Skills
        </motion.h2>
        
        {/* Category Tabs */}
        <div className="mb-10 overflow-x-auto">
          <div className="flex space-x-2 md:space-x-4 min-w-max md:min-w-0 md:justify-center pb-2">
            {skillsData.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 whitespace-nowrap
                  ${activeCategory === idx 
                    ? 'bg-secondaryDark text-white shadow-md' 
                    : 'bg-gray-100 text-textDark hover:bg-gray-200'}`}
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Skills Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-textDark mb-6">
            {skillsData[activeCategory].category} Skills
          </h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5"
          >
            {skillsData[activeCategory].skills.map((skill) => (
              <motion.div 
                key={skill.name} 
                variants={skillVariants}
                className="group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-textDark font-medium">{skill.name}</span>
                  <span className="text-secondaryDark font-mono bg-gray-100 py-0.5 px-2 rounded-full text-xs">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden group-hover:shadow-sm transition-all">
                  <motion.div 
                    className={`h-full rounded-full ${getSkillLevelColor(skill.level)}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-8 text-center text-sm text-textBaseLight">
            <p>Experience level based on years of professional work and project complexity</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 