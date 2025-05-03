import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faBehance, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faPalette, faPencilRuler, faChevronRight, faFilter, faTimes } from '@fortawesome/free-solid-svg-icons';

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

  // State for category filtering
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All',
    'Mobile',
    'Web',
    'Dashboard',
    'E-commerce'
  ];

  const featuredProjects = [
    {
      title: 'Travel App',
      description: 'Designed an immersive travel planning application that helps users discover destinations, book accommodations, and create personalized itineraries. Features include interactive maps, destination recommendations, and trip organization tools.',
      image: TravelApp,
      technologies: ['Mobile UI', 'Travel Planning', 'Map Interfaces', 'Itinerary Design', 'Figma'],
      behanceUrl: 'https://www.behance.net/gallery/223776431/Travel-App',
      liveUrl: '#',
      category: 'Mobile',
      featured: true
    },
    {
      title: 'Docter Consultant Mobile App',
      description: 'Created a telehealth application that connects patients with medical professionals for virtual consultations. The interface prioritizes accessibility, appointment scheduling, secure messaging, and medical record management.',
      image: DocterConsultant,
      technologies: ['Healthcare UI', 'Telehealth', 'Appointment Scheduling', 'Patient Experience', 'Figma'],
      behanceUrl: 'https://www.behance.net/gallery/223776331/Docter-Consultant-Mobile-App',
      liveUrl: '#',
      category: 'Mobile',
      featured: false
    },
    {
      title: 'Taxi App',
      description: 'Designed a user-friendly ride-hailing mobile application with intuitive booking flow, real-time driver tracking, and secure payment options. The interface prioritizes quick access to rides with minimal steps and clear visual feedback.',
      image: TaxiApp,
      technologies: ['Mobile UI', 'Maps Integration', 'Location Services', 'Payment Flow', 'Figma'],
      behanceUrl: 'https://www.behance.net/gallery/223775559/Taxi-App',
      liveUrl: '#',
      category: 'Mobile',
      featured: true
    },
    {
      title: 'Sound Effect App',
      description: 'Created an audio production app with a visually engaging interface for browsing, previewing, and mixing sound effects. The design features waveform visualization, intuitive categorization, and a simplified mixing panel for both novice and professional users.',
      image: SoundEffectApp,
      technologies: ['Audio UI', 'Interaction Design', 'Visual Hierarchy', 'User Testing', 'Figma'],
      behanceUrl: 'https://www.behance.net/gallery/223775351/Sound-Effect-App',
      liveUrl: '#',
      category: 'Mobile',
      featured: false
    },
    {
      title: 'Xbox Game App',
      description: 'Redesigned the Xbox companion app with a focus on game discovery, social features, and remote play capabilities. The interface utilizes the Xbox design language while enhancing usability and providing quick access to friends, game library, and streaming options.',
      image: XboxGameApp,
      technologies: ['Gaming UI', 'Entertainment Design', 'Social Features', 'Remote Controls', 'Adobe XD'],
      behanceUrl: 'https://www.behance.net/gallery/223775275/Xbox-Game-App',
      liveUrl: '#',
      category: 'Mobile',
      featured: false
    },
    {
      title: 'Skin Care Website',
      description: 'Designed an elegant e-commerce website for a premium skincare brand that educates customers about ingredients and personalized routines. The clean, minimalist interface highlights product photography and emphasizes the brand\'s focus on natural ingredients.',
      image: SkinCareWebsite,
      technologies: ['E-commerce Design', 'Product Showcase', 'Beauty UI', 'Brand Identity', 'Figma'],
      behanceUrl: 'https://www.behance.net/gallery/223775167/Skin-Care-Website',
      liveUrl: '#',
      category: 'E-commerce',
      featured: true
    },
    {
      title: 'Cryptocurrency Application',
      description: 'Developed a comprehensive crypto trading platform that simplifies complex financial data through intuitive visualizations and real-time market information. The interface features customizable dashboards, portfolio tracking, and simplified trading flows.',
      image: Cryptocurrency,
      technologies: ['Financial UI', 'Data Visualization', 'Real-time Updates', 'Security Features', 'Figma'],
      behanceUrl: 'https://www.behance.net/gallery/223775015/Cryptocurrency-App',
      liveUrl: '#',
      category: 'Dashboard',
      featured: false
    },
    {
      title: 'E-Commerce Web Application',
      description: 'Designed a clean, modern e-commerce platform focused on seamless product discovery and checkout experience. The interface features intuitive navigation, visually appealing product displays, and a streamlined purchase flow.',
      image: ecommerce,
      technologies: ['User Research', 'Wireframing', 'UI Design', 'Usability Testing', 'Figma'],
      behanceUrl: 'https://www.behance.net/gallery/223772121/E-commerce-App',
      liveUrl: '#',
      category: 'E-commerce',
      featured: false
    },
    {
      title: 'Burogu Blog App',
      description: 'Created a minimalist blog application that puts content first. The design focuses on readability, typography, and a distraction-free reading experience, while giving authors powerful tools for content creation and curation.',
      image: burogu,
      technologies: ['Content Strategy', 'Typography', 'Responsive Design', 'Information Architecture', 'Figma'],
      behanceUrl: 'https://www.behance.net/gallery/223772865/BUROGU-App',
      liveUrl: '#',
      category: 'Web',
      featured: false
    },
    {
      title: 'Construction Web Site',
      description: 'Designed a professional website for a construction company that effectively showcases their portfolio of projects, services, and expertise. The design balances visual impact with practical information delivery for potential clients.',
      image: Construction,
      technologies: ['Web Design', 'Brand Integration', 'Portfolio Layout', 'Lead Generation', 'Figma'],
      behanceUrl: 'https://www.behance.net/gallery/223773419/Construction-Web-App',
      liveUrl: '#',
      category: 'Web',
      featured: false
    },
    {
      title: 'Humanitarian Spatial Data Center',
      description: 'Designed an intuitive dashboard for humanitarian data spatial visualization in Afghanistan. The challenge was to display complex geospatial information in an accessible way for non-technical users.',
      image: hsdcImg,
      technologies: ['Information Architecture', 'Data Visualization', 'Dashboard Design', 'Adobe XD'],
      behanceUrl: 'https://www.behance.net/gallery/223771349/Humanitarian-Spatial-Data-Center',
      liveUrl: '#',
      category: 'Dashboard',
      featured: true
    },
    {
      title: 'ReportHub Platform',
      description: 'Designed a web platform for humanitarian field workers to report real-time data from remote locations. The interface prioritizes efficient data submission, visualization, and management for humanitarian response coordination.',
      image: reportHubV1Img,
      technologies: ['Dashboard Design', 'Form Design', 'Data Visualization', 'User Flows', 'Sketch'],
      behanceUrl: 'https://www.behance.net/gallery/223765543/ReportHub-Platform-Design',
      liveUrl: '#',
      category: 'Dashboard',
      featured: false
    },
    {
      title: 'Zuri Chat',
      description: 'Designed the interface for a remote team collaboration platform with features for messaging, file sharing, and video conferencing. Focus was on creating an intuitive and distraction-free workspace for team communication.',
      image: zuriImg,
      technologies: ['UI Design', 'UX Design', 'Design System', 'Prototyping', 'Figma'],
      behanceUrl: 'https://www.behance.net/gallery/223770819/Zuri-Chat',
      liveUrl: '#',
      category: 'Web',
      featured: true
    },
    {
      title: 'Novatech E-Learning Platform',
      description: 'Designed a comprehensive e-learning platform for technical training, featuring course management, progress tracking, and interactive learning materials. The interface supports various learning styles and engagement methods.',
      image: novatechImg,
      technologies: ['UX Research', 'E-Learning Design', 'Interaction Design', 'Adobe XD'],
      behanceUrl: 'https://www.behance.net/gallery/223769989/Novatech-Company-Website',
      liveUrl: '#',
      category: 'Web',
      featured: false
    },
    {
      title: 'ACNDC Organization Platform',
      description: 'Redesigned the website for an environmental conservation NGO in Congo, focusing on visual storytelling and donation conversion. The design emphasizes imagery and impact stories to engage visitors and inspire action.',
      image: acndcImg,
      technologies: ['Web Design', 'Visual Design', 'Responsive Design', 'User Research', 'Figma'],
      behanceUrl: '#',
      liveUrl: 'https://acndc.org',
      category: 'Web',
      featured: false
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const filteredProjects = activeFilter === 'All' 
    ? featuredProjects 
    : featuredProjects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-heading mb-6">
            <span className="text-secondaryDark font-mono">03.</span> Projects
          </h2>
          <p className="text-textBaseLight max-w-2xl mb-8">
            A selection of my recent design work across mobile applications, web platforms, 
            and interactive dashboards. Each project represents a unique challenge and solution.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <div className="flex items-center text-textBaseLight mr-2">
              <FontAwesomeIcon icon={faFilter} className="mr-2 text-secondaryDark" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-secondaryDark text-white shadow-md'
                    : 'bg-white text-textBaseLight hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* All Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={`grid-${idx}`}
              variants={itemVariants}
              className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col h-[420px]"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    {project.behanceUrl && project.behanceUrl !== '#' && (
                      <a 
                        href={project.behanceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-secondaryDark hover:bg-secondaryDark hover:text-white transition-all duration-300"
                      >
                        <FontAwesomeIcon icon={faBehance} />
                      </a>
                    )}
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-secondaryDark hover:bg-secondaryDark hover:text-white transition-all duration-300"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Category Tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/90 text-secondaryDark">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="text-lg font-bold text-textDark mb-2 group-hover:text-secondaryDark transition-colors duration-300">
                  {project.title}
                </h4>
                
                <p className="text-sm text-textBaseLight mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.technologies.slice(0, 3).map((tech, techIdx) => (
                    <span 
                      key={techIdx}
                      className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-textBaseLight"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-textBaseLight">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;