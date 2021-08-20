import React from 'react';
import './About-style.css';
import myimage from './images/IMG_9394.jpg';

function About() {
  return (
    <div className="about">
		<div className="container-about-content">
			<div className="container-content-About">
			    <div className="about-image">
					<img src={myimage} alt="Myimage" className="myimage" height="600px" width="450px"/>
		        </div>
			    <div className="about-text">
					 <h1>About me</h1>
					 <p>A Frontend software developer who enjoys solving problems and building products. I have worked with many companies where I was able to add values to the organization through my expertise and skills.<br/>
					Being passionate about technologies, I always want to learn new skills and work on projects that require me to reach outside of my comfort zone and knowledge.<br/>
					I am a creative, artistic and ambitious Frontend Software Developer with a talent for thinking outside the box and coming up with innovative ideas and designs. I graduated with a 2nd Class honours degree in Computer Science from Kigali Independant University(ULK) and subsequently have worked in the design industry for the past 2 years. I pride myself in providing excellent service to all stakeholders and seeing the positive impact I make in people’s lives and businesses.<br/>

					</p>
				 </div>
			</div>
		</div>
    </div>
  );
}

export default About;