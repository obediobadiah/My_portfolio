import React from 'react';
import './NavBar-style.css';
import { Link } from 'react-scroll';
import myimage from './images/I4G-Logo-Color-Cropped.png';

function Navbar() {
  return (
    <div className="Container">
		<div className="container-content">
			<div className="conainter-content-header">
				<div className="header-name">
					<img src={myimage} alt="Myimage" className="myimage" height="50px" width="180px"/>
				</div>
				<div className="menu-list">
					<Link
					activeClass="active"
					to="about"
					spy={true}
					smooth={true}
					offset={0}
					duration={800}
					><spam>About</spam></Link>

					
					<Link
					activeClass="active"
					to="skills"
					spy={true}
					smooth={true}
					offset={0}
					duration={800}
					><spam>Skills</spam></Link>
					
					<Link
					activeClass="active"
					to="projects"
					spy={true}
					smooth={true}
					offset={0}
					duration={800}
					><spam>Projects</spam></Link>
					
					<Link
					activeClass="active"
					to="contacts"
					spy={true}
					smooth={true}
					offset={0}
					duration={800}
					><spam>Contacts</spam></Link>
				</div>
				<div className="menu-button">
					<a href="https://docs.google.com/document/d/19I6YaG05fVrgs9b-sFiYcIQmPdbd1HA0/edit" className="button">View My CV</a>
				</div>
			</div>
		</div>
    </div>
  );
}

export default Navbar;