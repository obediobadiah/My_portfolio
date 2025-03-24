import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  // Get the image from the existing project
  const profileImage = require('../images/IMG_9394.png');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        delay: 0.4
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col-reverse md:flex-row items-center gap-2 md:gap-1 justify-center">
          <motion.div 
            className="w-full md:w-3/5 md:pr-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p 
              className="text-secondaryDark font-mono mb-2 text-lg"
              variants={itemVariants}
            >
              Hi, my name is
            </motion.p>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-2 text-textDark pb-4"
              variants={itemVariants}
            >
              Obedi Obadiah
            </motion.h1>
            
            <motion.p 
              className="text-lg text-textBaseLight mb-3 max-w-xl pb-4"
              variants={itemVariants}
            >
              A <span className="text-secondaryDark">Full Stack Developer</span> specializing in building exceptional digital experiences. 
              I enjoy solving problems and building products. I have worked with many companies where I was able to add values to the organization through my expertise and skills.
            </motion.p>
            
            <motion.p 
              className="text-lg text-textBaseLight mb-4 max-w-xl pb-4"
              variants={itemVariants}
            >
              With a background in Computer Science and expertise in modern web technologies. I create efficient, responsive, and user-friendly solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-6"
              variants={itemVariants}
            >
              <a 
                href="#projects" 
                className="button-primary"
              >
                Check out my work
              </a>
              
              <div className="flex items-center space-x-6 text-textBaseLight">
                <a 
                  href="https://github.com/obediobadiah" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-secondaryDark transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/obedi-obadiah-099168335/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-secondaryDark transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a 
                  href="https://x.com/obedi_obadiah" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-secondaryDark transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-56 md:w-1/3 mx-auto"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative group">
              {/* Background glow effect */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-secondaryDark/30 to-secondaryDark/5 opacity-75 group-hover:opacity-100 transition duration-500 blur-md group-hover:blur-lg"></div>
              
              {/* Border frame */}
              <div className="absolute -inset-1 rounded-full border-2 border-secondaryDark/20 group-hover:border-secondaryDark/40 transition-all duration-500"></div>
              
              {/* Image container */}
              <div className="relative rounded-full overflow-hidden shadow-xl">
                <div className="relative overflow-hidden rounded-full transform transition-all duration-500">
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondaryDark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  
                  {/* Image */}
                  <img 
                    src={profileImage} 
                    alt="Obedi Obadiah" 
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 