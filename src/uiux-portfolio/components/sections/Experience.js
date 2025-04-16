import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPenRuler, 
  faLayerGroup, 
  faMagnifyingGlass, 
  faPaintBrush, 
  faCode, 
  faMobileScreen, 
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const Experience = ({ isEmbedded = false }) => {
  // Define services instead of experiences
  const services = [
    {
      icon: faPenRuler,
      title: "UI/UX Design",
      description: "Creating intuitive, user-centered designs that balance aesthetic appeal with functional efficiency. From wireframes to high-fidelity mockups, I deliver designs that engage and delight users.",
      features: [
        "Wireframing & Prototyping",
        "Visual Design & UI Components",
        "Responsive Web Design",
        "Mobile App Interfaces"
      ],
      color: "from-secondaryDark to-secondaryLight"
    },
    {
      icon: faMagnifyingGlass,
      title: "User Research",
      description: "Uncovering valuable insights about your users through methodical research techniques. I identify pain points and opportunities to create designs that truly address user needs.",
      features: [
        "User Interviews & Surveys",
        "Usability Testing",
        "Persona Development",
        "Journey Mapping"
      ],
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: faLayerGroup,
      title: "Design Systems",
      description: "Building comprehensive design systems that ensure consistency across your product while accelerating development. I create the foundation for scalable design.",
      features: [
        "Component Libraries",
        "Style Guides",
        "Documentation",
        "Design Tokens"
      ],
      color: "from-purple-600 to-purple-400"
    },
    {
      icon: faPaintBrush,
      title: "Visual Design",
      description: "Crafting visually striking designs that reinforce your brand identity while providing exceptional user experiences across all touchpoints.",
      features: [
        "Brand Implementation",
        "Color Theory Application",
        "Typography Systems",
        "Iconography & Illustrations"
      ],
      color: "from-pink-500 to-red-400"
    },
    {
      icon: faCode,
      title: "Design to Code",
      description: "Bridging the gap between design and development. I ensure designs are implemented accurately through detailed specs and developer collaboration.",
      features: [
        "Developer Handoff",
        "CSS Implementation",
        "Frontend Styling",
        "Design QA"
      ],
      color: "from-orange-500 to-amber-400"
    },
    {
      icon: faMobileScreen,
      title: "Responsive Design",
      description: "Creating seamless experiences across all devices and screen sizes. I ensure your product looks and functions perfectly from mobile to desktop.",
      features: [
        "Mobile-First Design",
        "Adaptive Layouts",
        "Cross-Device Testing",
        "Progressive Enhancement"
      ],
      color: "from-green-500 to-emerald-400"
    }
  ];

  // Container variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Item variants for individual card animations
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Content rendering function
  const renderContent = () => {
    return (
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full"
          >
            <div className={`p-6 bg-gradient-to-r ${service.color}`}>
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={service.icon} className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-white/90 text-sm">{service.description}</p>
            </div>
            
            <div className="p-6 flex-grow">
              <h4 className="text-sm font-semibold text-textDark mb-3">What's included:</h4>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-textBaseLight">
                    <span className="text-secondaryDark mr-2">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* <button className="inline-flex items-center text-secondaryDark hover:text-secondaryLight font-medium text-sm transition-colors duration-300 mt-auto">
                Learn more <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </button> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <section 
      id="experience" 
      className={`py-20 ${isEmbedded ? '' : 'bg-primaryLight'}`}
    >
      <div className="max-w-7xl container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-heading mb-4">
            <span className="text-secondaryDark font-mono">02.</span> My Services
          </h2>
          <p className="text-textBaseLight max-w-2xl">
            I offer end-to-end design solutions to help businesses create intuitive, 
            engaging, and effective digital experiences for their users.
          </p>
        </motion.div>
        
        {renderContent()}
      </div>
    </section>
  );
};

export default Experience; 