import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faBehance, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faPalette, faPencilRuler } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  // Import required images
  const ecommerce = require('../images/e-commerce.png');
  const burogu = require('../images/burogu.png');
  const Construction = require('../images/Construction.png');
  const Cryptocurrency = require('../images/Cryptocurrency App.png');
  const SkinCareWebsite = require('../images/Skin Care Website.png');
  const XboxGameApp = require('../images/Xbox Game App.png');
  const SoundEffectApp = require('../images/Sound Effect App.png');
  const DocterConsultant = require('../images/Docter Consultant Mobile App.png');
  const TravelApp = require('../images/Travel App.png');
  const TaxiApp = require('../images/Taxi App.png');
  const hsdcImg = require('../images/hsdc.png');
  const reportHubV1Img = require('../images/rh v1.png');
  const acndcImg = require('../images/acndc.png');
  const zuriImg = require('../images/zuri.png');
  const novatechImg = require('../images/Novatech.png');
  const smallBankImg = require('../images/Small Bank.PNG');

  const featuredProjects = [
    {
      title: 'Travel App',
      description: 'Designed an immersive travel planning application that helps users discover destinations, book accommodations, and create personalized itineraries. Features include interactive maps, destination recommendations, and trip organization tools.',
      image: TravelApp,
      technologies: ['Mobile UI', 'Travel Planning', 'Map Interfaces', 'Itinerary Design', 'Figma'],
      behanceUrl: 'https://www.behance.net/gallery/223776431/Travel-App',
      liveUrl: '#'
    },
    {
      title: 'Docter Consultant Mobile App',
      description: 'Created a telehealth application that connects patients with medical professionals for virtual consultations. The interface prioritizes accessibility, appointment scheduling, secure messaging, and medical record management.',
      image: DocterConsultant,
      technologies: ['Healthcare UI', 'Telehealth', 'Appointment Scheduling', 'Patient Experience', 'Figma'],
      behanceUrl: 'https://www.behance.net/gallery/223776331/Docter-Consultant-Mobile-App',
      liveUrl: '#'
    },
    {
      title: 'Taxi App',
      description: 'Designed a user-friendly ride-hailing mobile application with intuitive booking flow, real-time driver tracking, and secure payment options. The interface prioritizes quick access to rides with minimal steps and clear visual feedback.',
      image: TaxiApp,
      technologies: ['Mobile UI', 'Maps Integration', 'Location Services', 'Payment Flow', 'Figma'],
      behanceUrl: 'https://www.behance.net/gallery/223775559/Taxi-App',
      liveUrl: '#'
    },
    {
      title: 'Sound Effect App',
      description: 'Created an audio production app with a visually engaging interface for browsing, previewing, and mixing sound effects. The design features waveform visualization, intuitive categorization, and a simplified mixing panel for both novice and professional users.',
      image: SoundEffectApp,
      technologies: ['Audio UI', 'Interaction Design', 'Visual Hierarchy', 'User Testing', 'Figma'],
      behanceUrl: 'https://www.behance.net/gallery/223775351/Sound-Effect-App',
      liveUrl: '#'
    },
    {
      title: 'Xbox Game App',
      description: 'Redesigned the Xbox companion app with a focus on game discovery, social features, and remote play capabilities. The interface utilizes the Xbox design language while enhancing usability and providing quick access to friends, game library, and streaming options.',
      image: XboxGameApp,
      technologies: ['Gaming UI', 'Entertainment Design', 'Social Features', 'Remote Controls', 'Adobe XD'],
      behanceUrl: 'https://www.behance.net/gallery/223775275/Xbox-Game-App',
      liveUrl: '#'
    },
    {
      title: 'Skin Care Website',
      description: 'Designed an elegant e-commerce website for a premium skincare brand that educates customers about ingredients and personalized routines. The clean, minimalist interface highlights product photography and emphasizes the brand\'s focus on natural ingredients.',
      image: SkinCareWebsite,
      technologies: ['E-commerce Design', 'Product Showcase', 'Beauty UI', 'Brand Identity', 'Figma'],
      behanceUrl: 'https://www.behance.net/gallery/223775167/Skin-Care-Website',
      liveUrl: '#'
    },
    {
      title: 'Cryptocurrency Application',
      description: 'Developed a comprehensive crypto trading platform that simplifies complex financial data through intuitive visualizations and real-time market information. The interface features customizable dashboards, portfolio tracking, and simplified trading flows.',
      image: Cryptocurrency,
      technologies: ['Financial UI', 'Data Visualization', 'Real-time Updates', 'Security Features', 'Figma'],
      behanceUrl: 'https://www.behance.net/gallery/223775015/Cryptocurrency-App',
      liveUrl: '#'
    },
    {
      title: 'E-Commerce Web Application',
      description: 'Designed a clean, modern e-commerce platform focused on seamless product discovery and checkout experience. The interface features intuitive navigation, visually appealing product displays, and a streamlined purchase flow.',
      image: ecommerce,
      technologies: ['User Research', 'Wireframing', 'UI Design', 'Usability Testing', 'Figma'],
      behanceUrl: 'https://www.behance.net/gallery/223772121/E-commerce-App',
      liveUrl: '#'
    },
    {
      title: 'Burogu Blog App',
      description: 'Created a minimalist blog application that puts content first. The design focuses on readability, typography, and a distraction-free reading experience, while giving authors powerful tools for content creation and curation.',
      image: burogu,
      technologies: ['Content Strategy', 'Typography', 'Responsive Design', 'Information Architecture', 'Figma'],
      behanceUrl: 'https://www.behance.net/gallery/223772865/BUROGU-App',
      liveUrl: '#'
    },
    {
      title: 'Construction Web Site',
      description: 'Designed a professional website for a construction company that effectively showcases their portfolio of projects, services, and expertise. The design balances visual impact with practical information delivery for potential clients.',
      image: Construction,
      technologies: ['Web Design', 'Brand Integration', 'Portfolio Layout', 'Lead Generation', 'Figma'],
      behanceUrl: 'https://www.behance.net/gallery/223773419/Construction-Web-App',
      liveUrl: '#'
    },
    {
      title: 'Humanitarian Spatial Data Center',
      description: 'Designed an intuitive dashboard for humanitarian data spatial visualization in Afghanistan. The challenge was to display complex geospatial information in an accessible way for non-technical users.',
      image: hsdcImg,
      technologies: ['Information Architecture', 'Data Visualization', 'Dashboard Design', 'Adobe XD'],
      behanceUrl: 'https://www.behance.net/gallery/223771349/Humanitarian-Spatial-Data-Center',
      liveUrl: '#'
    },
    {
      title: 'ReportHub Platform',
      description: 'Designed a web platform for humanitarian field workers to report real-time data from remote locations. The interface prioritizes efficient data submission, visualization, and management for humanitarian response coordination.',
      image: reportHubV1Img,
      technologies: ['Dashboard Design', 'Form Design', 'Data Visualization', 'User Flows', 'Sketch'],
      behanceUrl: 'https://www.behance.net/gallery/223765543/ReportHub-Platform-Design',
      liveUrl: '#'
    },
    {
      title: 'Zuri Chat',
      description: 'Designed the interface for a remote team collaboration platform with features for messaging, file sharing, and video conferencing. Focus was on creating an intuitive and distraction-free workspace for team communication.',
      image: zuriImg,
      technologies: ['UI Design', 'UX Design', 'Design System', 'Prototyping', 'Figma'],
      behanceUrl: 'https://www.behance.net/gallery/223770819/Zuri-Chat',
      liveUrl: '#'
    },
    {
      title: 'Novatech E-Learning Platform',
      description: 'Designed a comprehensive e-learning platform for technical training, featuring course management, progress tracking, and interactive learning materials. The interface supports various learning styles and engagement methods.',
      image: novatechImg,
      technologies: ['UX Research', 'E-Learning Design', 'Interaction Design', 'Adobe XD'],
      behanceUrl: 'https://www.behance.net/gallery/223769989/Novatech-Company-Website',
      liveUrl: '#'
    },
    {
      title: 'ACNDC Organization Platform',
      description: 'Redesigned the website for an environmental conservation NGO in Congo, focusing on visual storytelling and donation conversion. The design emphasizes imagery and impact stories to engage visitors and inspire action.',
      image: acndcImg,
      technologies: ['Web Design', 'Visual Design', 'Responsive Design', 'User Research', 'Figma'],
      behanceUrl: '#',
      liveUrl: 'https://acndc.org'
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
    <section id="projects" className="py-20 bg-gray-50">
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
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative overflow-hidden rounded-t-lg h-48 md:h-56">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 group-hover:bg-opacity-50 transition-all duration-300"></div>
                </div>
                
                <div className="bg-white p-6 border-t-0 border border-gray-100 rounded-b-lg shadow-md">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-textDark group-hover:text-secondaryDark transition-colors duration-300">
                      {project.title}
                    </h4>
                    <div className="flex space-x-3">
                      {project.dribbleUrl && project.dribbleUrl !== '#' && (
                        <a 
                          href={project.dribbleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-textBaseLight hover:text-secondaryDark transition-colors duration-300"
                          aria-label="Dribbble"
                        >
                          <FontAwesomeIcon icon={faDribbble} className="text-lg" />
                        </a>
                      )}
                      {project.behanceUrl && project.behanceUrl !== '#' && (
                        <a 
                          href={project.behanceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-textBaseLight hover:text-secondaryDark transition-colors duration-300"
                          aria-label="Behance"
                        >
                          <FontAwesomeIcon icon={faBehance} className="text-lg" />
                        </a>
                      )}
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
                        <FontAwesomeIcon icon={idx % 2 === 0 ? faPalette : faPencilRuler} className="text-secondaryDark/70 text-xs" />
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