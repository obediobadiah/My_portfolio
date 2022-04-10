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
									' Frontend Web developer',
									1000,
									' BackEnd Web developer',
									1000,
									' UI/UX Web designer',
								]} />
						</p>
					</div>
					<div className="intro-image">
						<img src={myimage} alt="Myimage" className="myimage" height="500px" width="400px" />
					</div>
					<div className='Intro_icons'>
						<a href='#'><FacebookIcon fontSize="large"/></a>
						<a href='#'><TwitterIcon fontSize="large"/></a>
						<a href='#'><GitHubIcon fontSize="large"/></a>
						<a href='#'><LinkedInIcon fontSize="large"/></a>
					</div>
					<div className='Intro_button'>
						<div><a href='#' className='cv_button'>Download CV</a></div>
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default Intro;