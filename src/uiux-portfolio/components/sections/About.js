import React from 'react';
import { motion } from 'framer-motion';

const About = ({ isEmbedded = false }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // If component is embedded, render only the content without section wrapper
  if (isEmbedded) {
    return (
      <div className="about-content">
        <div className="text-lg text-textBaseLight space-y-4">
          <p>
            Hi there! I'm Obedi, a passionate Full Stack Developer with expertise in building modern web applications. With a background in Computer Science and several years of professional experience, I specialize in creating efficient, responsive, and user-friendly digital solutions.
          </p>

          <p>
            With strong expertise in website and web application development, I am a creative and skilled software developer. To meet shifting needs, continually improve performance. Expert software developer with a track record of success in web settings. Successful leader and manager and capable of handling high-level tasks.
          </p>

        </div>
      </div>
    );
  }

  // Regular standalone version of the component
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <h2 className="section-heading">About Me</h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-lg text-textBaseLight"
          >
            <p className="mb-4">
              Hi there! I'm Obedi, a passionate Full Stack Developer with expertise in building modern web applications. With a background in Computer Science and several years of professional experience, I specialize in creating efficient, responsive, and user-friendly digital solutions.
            </p>

            <p className="mb-6">
              Currently working at <span className="text-secondaryDark">iMMAP</span>, where I collaborate on large-scale projects that make a meaningful impact. My approach combines technical expertise with creative problem-solving to deliver exceptional results.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 mt-4">
              {["JavaScript (ES6+)", "React", "Node.js", "TypeScript", "Next.js", "Express"].map((tech, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondaryDark flex-shrink-0 mr-2"></div>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 