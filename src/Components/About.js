import React from 'react';
import './About-style.css';
import myimage from './images/IMG_9394.jpg';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import About_Img from './images/IMG_0173.JPG'

function About() {
	return (
		<div className="about">
			<div className="container-about-content">
				<div className="container-content-About">
					<div className="about-text">
						<h1>About me</h1>
						<h3>I'm really passionate about technologies, I always want to learn new skills and work on projects that require me to reach outside of my comfort zone and knowledge.<br /></h3>
						<p>
							I am a creative, artistic and ambitious Frontend Software Developer with a talent for thinking outside the box and coming up with innovative ideas and designs. I have a bachelor's degree graduated with a 2nd Class honours degree in Computer Science from Kigali Independant University(ULK) and subsequently have worked in the design industry for the past 5 years. I pride myself in providing excellent service to all stakeholders and seeing the positive impact I make in people’s lives and businesses.<br />

						</p>
					</div>
					<div className="about-contacts">
						<div className='about_icons'>
							<div><LocalPhoneIcon /></div>
							<div className='about_icons_txt'><p>+243 993290900, 894192798</p></div>
						</div>
						<div className='about_icons'>
							<div><EmailIcon /></div>
							<div className='about_icons_txt'><p>obediobadiah05@gmail.com</p></div>
						</div>
						<div className='about_icons'>
							<div><HomeIcon /></div>
							<div className='about_icons_txt'><p>North-Kivu Goma, DRCongo</p></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;