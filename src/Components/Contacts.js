import React from 'react';
import './contact-style.css';


function Contact() {
	
  return (
	  
    <div className="contacts">
		<div className="container-contact-content">
			<div className="container-content-contact">
				<div className="line"></div>
				<div className="contact-title">
					<h1>My Contacts</h1>
				</div>
				<div className="contact-boxes">
					<p>Location: DRCongo</p>
					<p>Email: obediobadiah05@gmail.com</p>
					<p>Phone: +243 993290900</p>
				</div>	
			</div>
		</div>
    </div>
  );
}

export default Contact;