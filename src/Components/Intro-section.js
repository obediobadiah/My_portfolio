import React from 'react';
import './Intro-style.css';
import myimage from './images/IMG_9394.png';
import Typical from 'react-typical'
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

function Intro() {
	return (
		<div className="Container">
			<div className="container-intro-content">
				<div className="container-content-intro">
					<div className="intro-text">
						<h1 className='intro_name'>Obedi Obadiah</h1>
						<p> I'm a
							<Typical
								loop={Infinity}
								wrapper='b'
								steps={[
									' Full Stack Web developer💻',
									1000,
								]} />
						</p>
					</div>
					<div className="intro-image">
						<img src={myimage} alt="Myimage" className="myimage" height="500px" width="400px" />
					</div>
					<div className='Intro_icons'>
						<a href='https://web.facebook.com/obedi.amos'><FacebookIcon fontSize="large" /></a>
						<a href='https://twitter.com/obedi_obadiah'><TwitterIcon fontSize="large" /></a>
						<a href='https://github.com/obediobadiah'><GitHubIcon fontSize="large" /></a>
						<a href='https://www.linkedin.com/in/obedi-obadiah-6a11a419a/'><LinkedInIcon fontSize="large" /></a>
					</div>
					<div className='Intro_button'>
						<div><a href='https://docs.google.com/document/d/11JWhG39yumaWQzKuC3O2V-XDb_8HoVg4k9ma8c5RZHk/edit' className='cv_button'>Download CV</a></div>

					</div>
				</div>
			</div>
		</div>
	);
}

export default Intro;