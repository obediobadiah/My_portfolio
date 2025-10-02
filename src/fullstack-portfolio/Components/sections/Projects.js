import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  // Import required images
  const immapCareersImg = require('../images/immap careers.png');
  const hsdcImg = require('../images/hsdc.png');
  const reportHubV1Img = require('../images/rh v1.png');
  const acndcImg = require('../images/acndc.png');
  const zuriImg = require('../images/zuri.png');
  const novatechImg = require('../images/Novatech.png');
  const smallBankImg = require('../images/Small Bank.PNG');
  const boostflow = require('../images/boostflow.png');
  const tevaguard = require('../images/tevaguard.png');

  const featuredProjects = [
    {
      title: 'Tevaguard Platform',
      description: 'An open-source ecosystem monitoring and protection platform. Its goal is to visualize, track, and protect ecosystems through open environmental data, real-time alerts, and community reporting, all powered by free technologies and data sources.',
      image: tevaguard,
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Leaflet', 'MapBox', 'OpenStreetMap', 'CI/CD'],
      githubUrl: 'https://github.com/iMMAP/tevaguard',
      liveUrl: '#'
    },
    {
      title: 'BoostFlow App',
      description: 'An all-in-one platform that empowers businesses to effortlessly promote their products, automate social media posting, and track commissions in real time.',
      image: boostflow,
      technologies: ['React', 'TypeScript', 'NodeJS', 'PostgreSQL', 'ClickHouse', 'Socket.IO', 'CI/CD', 'Docker'],
      githubUrl: 'https://github.com/iMMAP/boostflow-front',
      liveUrl: 'https://boostflow.vercel.app/'
    },
    {
      title: 'iMMAP Careers',
      description: 'A Human Resources platform designed to streamline recruitment processes and talent management for humanitarian organizations. Built with a modern tech stack for optimal performance and user experience.',
      image: immapCareersImg,
      technologies: ['React', 'Laravel', 'MySQL', 'Redux', 'Tailwind CSS'],
      githubUrl: 'https://github.com/iMMAP/HR-Platform',
      liveUrl: 'https://careers.immap.org/'
    },
    {
      title: 'Humanitarian Spatial Data Center (HSDC)',
      description: 'An Information Management Tool for Humanitarian Programming in Afghanistan. Developed by iMMAP and funded by USAID, it offers comprehensive data and analytics on disaster risks, demographics, accessibility, and more.',
      image: hsdcImg,
      technologies: ['Python', 'DjangoREST', 'ReactJS', 'PostgreSQL', 'PostGIS', 'GeoServer'],
      githubUrl: 'https://github.com/obediobadiah',
      liveUrl: 'https://afghanistan.immap.org/'
    },
    {
      title: 'ReportHub Platform',
      description: 'Decision Support in Real-Time. ReportHub provides an easy-to-use system that includes alerts and notifications for a daily reporting workflow. Once entered, the analytics engine processes key business indicators for decision support.',
      image: reportHubV1Img,
      technologies: ['AngularJS', 'Node.js', 'MongoDB', 'Express', 'Charts.js'],
      githubUrl: 'https://github.com/obediobadiah',
      liveUrl: 'https://reporthub.immap.org/'
    },
    {
      title: 'ACNDC Organization Platform',
      description: 'A platform for "Action pour la Conservation de la Nature et Développement Communautaire", a community-based organization coordinating family and tribal-ethnic community organizations in DRCongo.',
      image: acndcImg,
      technologies: ['React', 'Node.js', 'MongoDB', 'Bootstrap', 'PostgreSQL'],
      githubUrl: 'https://github.com/obediobadiah',
      liveUrl: '#'
    },
    {
      title: 'Zuri Chat',
      description: 'A modern business communication platform that creates a compelling and engaging virtual workspace effective for business communications and collaborations, similar to platforms like Slack.',
      image: zuriImg,
      technologies: ['React', 'Redux', 'Next.js', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/zurichat',
      liveUrl: 'https://zuri.chat/'
    },
    {
      title: 'Novatech Training Center',
      description: 'A digital platform for Novatech\'s training center services in DRCongo, providing course management, student tracking, and educational resources for technical training programs.',
      image: novatechImg,
      technologies: ['React', 'PHP', 'Laravel', 'SQLite', 'MySQL'],
      githubUrl: 'https://github.com/obediobadiah',
      liveUrl: '#'
    },
    {
      title: 'Small Bank Customers Management System',
      description: 'A desktop application for managing bank customer information, accounts, and transactions. Built as a university project to demonstrate database and UI development skills.',
      image: smallBankImg,
      technologies: ['C#', 'SQL Server', 'Windows Forms', 'Entity Framework'],
      githubUrl: 'https://github.com/obediobadiah',
      liveUrl: '#'
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-20 bg-gray-200">
      <div className="max-w-7xl container mx-auto px-4 md:px-8">
        <motion.h2 
          className="section-heading mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-secondaryDark font-mono">03.</span> Projects
        </motion.h2>
        
        {/* Featured Projects - Grid */}
        <div className="mb-20">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="group"
              >
                <div className="relative overflow-hidden rounded-t-lg h-48 md:h-56">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 group-hover:bg-opacity-50 transition-all duration-300"></div>
                </div>
                
                <div className="bg-white p-6 border-t-0 border border-gray-100 rounded-b-lg">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-textDark group-hover:text-secondaryDark transition-colors duration-300">
                      {project.title}
                    </h4>
                    <div className="flex space-x-3">
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textBaseLight hover:text-secondaryDark transition-colors duration-300"
                        aria-label="GitHub Repository"
                      >
                        <FontAwesomeIcon icon={faGithub} className="text-lg" />
                      </a>
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-textBaseLight hover:text-secondaryDark transition-colors duration-300"
                          aria-label="Live Project"
                        >
                          <FontAwesomeIcon icon={faExternalLinkAlt} className="text-lg" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-textBaseLight mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-xs inline-flex items-center gap-1 bg-gray-100 text-textBaseLight px-2 py-1 rounded-full"
                      >
                        <FontAwesomeIcon icon={faLaptopCode} className="text-secondaryDark/70 text-xs" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Projects;