import React from 'react';
import './NavBar-style.css';

function Navbar() {
  return (
    <div className="Container">
		<div className="container-content">
			<div className="conainter-content-header">
				<div className="header-name">
					<h3>Obedi Obadiah</h3>
				</div>
				<div className="menu-list">
					<ul>
						<li><a href="#">About</a></li>
						<li><a href="#">Skills</a></li>
						<li><a href="#">Portfolio</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</div>
				<div className="menu-button">
					<button className="button">View My CV</button>
				</div>
			</div>
		</div>
    </div>
  );
}

export default Navbar;