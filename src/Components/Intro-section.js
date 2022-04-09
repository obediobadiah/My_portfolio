import React from 'react';
import './Intro-style.css';
import myimage from './images/IMG_9394.png';

function Intro() {
  return (
    <div className="Container">
		<div className="container-intro-content">
			<div className="container-content-intro">
                 <div className="intro-text">
				 </div>
				<div className="intro-image">
				    <img src={myimage} alt="Myimage" className="myimage" height="500px" width="400px"/>
				</div>
			</div>
		</div>
    </div>
  );
}

export default Intro;