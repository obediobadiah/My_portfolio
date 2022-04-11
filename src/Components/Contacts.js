import React from 'react';
import './contact-style.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';


function Contact() {

	return (

		<div className="contacts">
			<div className="container-contact-content">
				<div className="container-content-contact">
					<div className="line"></div>
					<div className="contact-boxes">
						<div className='about_me'>
							<h2>About me</h2>
							<p>A Fullstack software developer who enjoys solving problems and building products. I have worked with many companies where I was able to add values to the organization through my expertise and skills.</p>
							<p>Copyright ©2022 All right reserve</p>
						</div>
						<div className='about_links'>
							<h2>Follow me</h2>
							<div className='contact_icons'>
								<a href='https://web.facebook.com/obedi.amos'><FacebookIcon /></a>
								<a href='https://twitter.com/obedi_obadiah'><TwitterIcon /></a>
								<a href='https://github.com/obediobadiah'><GitHubIcon /></a>
								<a href='https://www.linkedin.com/in/obedi-obadiah-6a11a419a/'><LinkedInIcon /></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;