import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-6 bg-primaryLight border-t border-accentLight">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-textBaseLight text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Obedi Obadiah. All Rights Reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <a 
              href="#hero" 
              className="text-textBaseLight hover:text-secondaryDark transition-colors duration-300 text-sm"
            >
              Back to Top
            </a>
            <span className="text-secondaryDark">•</span>
            <a 
              href="mailto:obediobadiah05@gmail.com" 
              className="text-textBaseLight hover:text-secondaryDark transition-colors duration-300 text-sm"
            >
              obediobadiah05@gmail.com
            </a>
            <span className="text-secondaryDark">•</span>
            <a 
              href="/fullstack" 
              className="text-secondaryDark bg-white hover:bg-secondaryDark hover:text-white px-3 py-1 rounded-md text-sm font-medium border border-secondaryDark transition-colors duration-300"
            >
              Switch to Fullstack
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 