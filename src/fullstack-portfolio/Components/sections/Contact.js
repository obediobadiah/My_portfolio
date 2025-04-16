import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission - in a real app you'd send the data to a server
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: faMapMarkerAlt,
      label: 'Location',
      value: 'Kigali, Rwanda'
    },
    {
      icon: faEnvelope,
      label: 'Email',
      value: 'obediobadiah05@gmail.com',
      isLink: true,
      href: 'mailto:obediobadiah05@gmail.com'
    },
    {
      icon: faPhone,
      label: 'Phone',
      value: '+243 993 290 900',
      isLink: true,
      href: 'tel:+243993290900'
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-800 text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondaryDark blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondaryDark blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            <span className="text-secondaryDark font-mono text-xl inline-block mb-2">04.</span>
            <br />
            Get In Touch
          </h2>
          
          <p className="text-lg text-gray-300 mx-auto max-w-2xl">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">

                    {/* Contact Form */}
                    <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-slate-600/50">
              <h3 className="text-xl text-white font-bold mb-6 flex items-center">
                <div className="mr-4 w-10 h-10 rounded-lg bg-secondaryDark/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faPaperPlane} className="text-secondaryDark" />
                </div>
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2 text-sm font-medium">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondaryDark focus:border-secondaryDark text-white shadow-sm transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2 text-sm font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondaryDark focus:border-secondaryDark text-white shadow-sm transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white mb-2 text-sm font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondaryDark focus:border-secondaryDark text-white shadow-sm transition-colors"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2 text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondaryDark focus:border-secondaryDark text-white shadow-sm resize-none transition-colors"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-secondaryDark hover:bg-secondaryDark/90 text-white font-medium rounded-lg shadow-md transition-colors duration-300 flex items-center justify-center disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-800/50 border border-green-700 text-green-100 rounded-lg flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-2 lg:pr-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 h-full border border-slate-600/50">
              <h3 className="text-xl text-white font-bold mb-8 flex items-center">
                <div className="mr-4 w-10 h-10 rounded-lg bg-secondaryDark/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-secondaryDark" />
                </div>
                Contact Information
              </h3>
              
              <div className="space-y-8 mb-10">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-center space-x-5">
                    <div className="bg-slate-600/50 p-3 rounded-lg shadow-md">
                      <FontAwesomeIcon icon={info.icon} className="text-secondaryDark w-5 h-5" />
                    </div>
                    
                    <div>
                      <h4 className="text-white text-sm font-medium mb-1">{info.label}</h4>
                      {info.isLink ? (
                        <a href={info.href} className="text-gray-300 hover:text-secondaryDark transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h3 className="text-lg text-white font-bold mb-4">Follow Me</h3>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/obediobadiah" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-600/50 hover:bg-secondaryDark p-3 rounded-lg text-white shadow-md transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/obedi-obadiah-099168335/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-600/50 hover:bg-secondaryDark p-3 rounded-lg text-white shadow-md transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-1.005-.02-2.3-1.39-2.3-1.39 0-1.601 1.094-1.601 2.226v4.252H8.014v-8.59h2.558v1.174h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://x.com/obedi_obadiah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-600/50 hover:bg-secondaryDark p-3 rounded-lg text-white shadow-md transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact; 