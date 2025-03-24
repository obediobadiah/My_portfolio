import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faCalendar, faMapMarkerAlt, faLaptopCode, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Experience = ({ isEmbedded = false }) => {
  const [expandedExp, setExpandedExp] = useState(null);
  
  const experiences = [
    {
      company: 'iMMAP Inc.',
      position: 'FullStack Software Developer',
      period: 'April 2022 - February 2025 · 2 yrs 11 mos',
      location: 'Washington, United States · Remote',
      responsibilities: [
        'Build front-end components through appealing visual design following iMMAP style guide',
        'Develop and manage databases and applications as required',
        'Working with Python, DjangoREST, AngularJS, SailsJS, ReactsJS, NextJS, Laravel 8, MongoDB',
        'Developing and managing geospatial information platform using GeoNode, GeoServer, PostgreSQL, PostGIS',
      ],
      skills: 'ReactJS · DjangoREST · Python · PostgreSQL · Geonode · GeoServer · PostGIS · GoLang · Docker · NextJS · Laravel',
      projects: [
        {
          name: 'Humanitarian Spatial Data Center (HSDC)',
          description: 'An Information Management Tool for Humanitarian Programming in Afghanistan. Developed by iMMAP and funded by USAID, HSDC offers comprehensive data and analytics on disaster risks, demographics, accessibility, and more throughout Afghanistan.'
        },
        {
          name: 'ReportHub V.2.0',
          description: 'Decision Support in Real-Time. ReportHub provides an easy-to-use system that includes alerts and notifications for a daily reporting workflow, tailored to your needs. Once entered, the analytics engine processes key business indicators for decision support made available via interactive dashboards.'
        },
        {
          name: 'ReportHub V.1.0',
          description: 'ReportHub provides an easy-to-use system that includes alerts and notifications for a daily reporting workflow, tailored to your needs.'
        },
        {
          name: 'iMMAP Careers',
          description: 'A Human Resources platform designed to streamline recruitment processes and talent management.'
        }
      ],
      url: '#'
    },
    {
      company: 'ACNDC-ASBL',
      position: 'Fullstack Developer',
      period: 'November 2021 - March 2022 · 5 mos',
      location: 'Goma, North Kivu, Democratic Republic of the Congo · Hybrid',
      responsibilities: [
        'Developing front-end web application architecture',
        'Worked with GitHub, Git, MongoDB, NodeJS, React, Redux, APIs, and other industry-leading development tools',
        'Creating servers and databases for functionality',
        'Designing and developing APIs',
      ],
      skills: 'GitHub · PostgreSQL · ReactJS · NodeJS · Bootstrap · GoLang',
      projects: [
        {
          name: 'Action pour la Conservation de la Nature et Developement Communautaire',
          description: 'ACNDC est une Organisation de base à vocation communautaire, une coordination des organisations communautaires de base familiales et tribalo-ethniques.'
        }
      ],
      url: '#'
    },
    {
      company: 'ZuriChat',
      position: 'Front-End Developer',
      period: 'August 2021 - November 2021 · 4 mos',
      location: 'Lagos, Lagos State, Nigeria · Remote',
      responsibilities: [
        'Worked with GitHub, Git, NodeJS, React, Redux, Next, Express, APIs, and other industry-leading development tools',
        'Project management techniques and the ability to plan, design, develop, test, implement and maintain system'
      ],
      skills: 'React · Redux · Next.js · Express.js · Git · GitHub',
      projects: [
        {
          name: 'Zuri Chat',
          description: 'Modern business communication platform that creates a compelling and engaging virtual workspace effective for business communications and collaborations.'
        }
      ],
      url: '#'
    },
    {
      company: 'Freelancer',
      position: 'Full Stack Developer',
      period: 'October 2020 - November 2021 · 1 yr 2 mos',
      location: 'Goma, North Kivu, Democratic Republic of the Congo · Remote',
      responsibilities: [
        'Designing web application systems',
        'Worked with GitHub, Git, PHP, Laravel, Javascript, MySQL, and other industry-leading development tools',
      ],
      skills: 'Laravel · Node.js · PHP · GitHub · TypeScript',
      url: '#'
    },
    {
      company: 'Novatech Company',
      position: 'Front-End Developer',
      period: 'March 2019 - August 2019 · 6 mos',
      location: 'Goma, North Kivu, Democratic Republic of the Congo · On-site',
      responsibilities: [
        'Optimizing the user experience Using Reactjs, PHP, Laravel, SQLite and MySQL to bring concepts to life',
        'Creating tools that improve site interaction regardless of the browser',
        'Managing software workflow, Following SEO best practices',
      ],
      skills: 'Django · Laravel · SQLite · Tailwind CSS · ReactJS · TypeScript',
      url: '#'
    },
    {
      company: 'Optimum Company',
      position: 'Full Stack Engineer',
      period: 'October 2018 - January 2019 · 4 mos',
      location: 'Goma, North Kivu, Democratic Republic of the Congo · On-site',
      responsibilities: [
        'Worked with GitHub, Git, MongoDB, NodeJS, React, Redux, APIs, and other industry-leading development tools',
      ],
      skills: 'Node.js · PHP · ReactJS · NodeJS · Redux · TypeScript',
      url: '#'
    }
  ];

  const education = {
    degree: 'Bachelor\'s degree in Computer science',
    institution: 'Kigali Independant University (ULK)',
    period: 'September 2017 - December 2020',
    projects: [
      'Small Bank Customers Management System: A desktop system to manage bank customers information'
    ]
  };

  // Content rendering function
  const renderContent = () => {
    return (
      <div className="experience-content">
        {/* Work Experience Timeline */}
        <div className="relative border-l-2 border-gray-200 ml-4 md:ml-6 pl-6 md:pl-8 pb-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-10 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-secondaryDark rounded-full -left-8 md:-left-10 mt-1.5 border-2 border-white"></div>
              
              {/* Experience Content */}
              <div className="bg-white shadow-sm rounded-lg p-5 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-secondaryDark/10 text-secondaryDark rounded-full mr-3">
                      <FontAwesomeIcon icon={faBriefcase} className="text-lg" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-textDark">{exp.position}</h3>
                      <div className="text-secondaryDark font-medium">{exp.company}</div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setExpandedExp(expandedExp === idx ? null : idx)}
                    className="text-textBaseLight hover:text-secondaryDark transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={expandedExp === idx ? faChevronDown : faChevronRight} />
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-y-2 mb-3 text-sm">
                  <div className="flex items-center mr-4 text-textBaseLight">
                    <FontAwesomeIcon icon={faCalendar} className="mr-1.5 text-secondaryDark/70" />
                    {exp.period}
                  </div>
                  <div className="flex items-center text-textBaseLight">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1.5 text-secondaryDark/70" />
                    {exp.location}
                  </div>
                </div>
                
                {expandedExp === idx && (
                  <div className="mt-4 border-t border-gray-100 pt-4">
                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-textDark mb-2">Responsibilities:</h4>
                      <ul className="space-y-1.5">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start text-sm text-textBaseLight">
                            <span className="text-secondaryDark mr-2">▹</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Projects */}
                    {exp.projects && exp.projects.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-textDark mb-2">Projects:</h4>
                        <div className="space-y-3">
                          {exp.projects.map((project, i) => (
                            <div key={i} className="bg-gray-50 p-3 rounded border border-gray-100">
                              <h5 className="font-medium text-secondaryDark text-sm mb-1">{project.name}</h5>
                              <p className="text-sm text-textBaseLight">{project.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Skills */}
                    <div className="mb-1">
                      <h4 className="text-sm font-semibold text-textDark mb-2">Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.split(' · ').map((skill, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-gray-100 text-textBaseLight"
                          >
                            <FontAwesomeIcon icon={faLaptopCode} className="mr-1 text-secondaryDark/70" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {expandedExp !== idx && (
                  <button
                    onClick={() => setExpandedExp(idx)}
                    className="mt-2 text-xs text-secondaryDark font-medium hover:underline inline-flex items-center"
                  >
                    Show details
                    <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
          
          {/* Education Entry */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: experiences.length * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute w-4 h-4 bg-secondaryDark rounded-full -left-8 md:-left-10 mt-1.5 border-2 border-white"></div>
            
            {/* Education Content */}
            <div className="bg-white shadow-sm rounded-lg p-5 border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 flex items-center justify-center bg-secondaryDark/10 text-secondaryDark rounded-full mr-3">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-textDark">{education.degree}</h3>
                  <div className="text-secondaryDark font-medium">{education.institution}</div>
                  <div className="flex items-center text-sm text-textBaseLight mt-2">
                    <FontAwesomeIcon icon={faCalendar} className="mr-1.5 text-secondaryDark/70" />
                    {education.period}
                  </div>
                </div>
              </div>
              
              {education.projects && education.projects.length > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-textDark mb-2">Projects:</h4>
                  <ul className="space-y-1.5">
                    {education.projects.map((project, i) => (
                      <li key={i} className="flex items-start text-sm text-textBaseLight">
                        <span className="text-secondaryDark mr-2">▹</span>
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    );
  };

  // If component is embedded, render only the content without section wrapper
  if (isEmbedded) {
    return renderContent();
  }

  // Regular standalone version of the component
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2 
          className="section-heading mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-secondaryDark font-mono">02.</span> Professional Experience
        </motion.h2>
        
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {renderContent()}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 