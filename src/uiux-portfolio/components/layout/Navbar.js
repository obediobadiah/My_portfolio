import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about-skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'about-skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const navbarVariants = {
    hidden: { opacity: 0, y: -25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5
      }
    }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3
      }
    },
    open: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 py-4 ${
        scrolled ? 'bg-primaryLight/90 backdrop-blur shadow-lg py-3' : 'bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-textDark font-mono">
          <span className="text-secondaryDark">O</span>bedi
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
            >
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link text-sm font-mono"
                activeClass="text-secondaryDark"
              >
                <span className="text-secondaryDark mr-1">{index + 1}.</span> {link.name}
              </Link>
            </motion.div>
          ))}
          
          {/* <motion.a
            href="/Obedi_Obadiah_CV_Software_Developer_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: navLinks.length * 0.1 + 0.5 }}
          >
            Resume
          </motion.a> */}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span 
              className={`w-6 h-0.5 bg-secondaryDark transform transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span 
              className={`w-6 h-0.5 bg-secondaryDark transition-all duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span 
              className={`w-6 h-0.5 bg-secondaryDark transform transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
        
        {/* Mobile Menu */}
        <motion.div
          className="md:hidden fixed inset-y-0 right-0 w-3/4 max-w-sm bg-accentLight p-6 flex flex-col z-40"
          initial="closed"
          animate={menuOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
        >
          <div className="flex flex-col h-full justify-center">
            <nav className="flex flex-col space-y-6 items-center text-center">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link text-lg font-mono w-full py-2"
                  activeClass="text-secondaryDark"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-secondaryDark mr-2">{index + 1}.</span>
                  {link.name}
                </Link>
              ))}
              <a 
                href="/Obedi_Obadiah_CV_Software_Developer_.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-primary mt-4 w-full text-center"
              >
                Resume
              </a>
            </nav>
          </div>
        </motion.div>
        
        {/* Overlay */}
        {menuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>
    </motion.header>
  );
};

export default Navbar; 