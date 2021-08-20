import React from 'react';
import './project-style.css';


function Projects() {
	
  return (
	  
    <div className="projects">
		<div className="container-projects-content">
			<div className="container-content-projects">
				<div className="line"></div>
				<div className="projects-title">
					<h1>Personal Projects</h1>
				</div>
				<div className="projects-boxes">
					<div className="project-box">
						<div className="projects-info">
							<div className="projects-details">
								<h2>Novatech Company Website</h2>
								<p>A Website for a training center company and online digital marketing</p>
								<a href="#"><button>View Project</button></a>
							</div>
							<div className="projects-details">
								<h2>School management System</h2>
								<p>An educational desktop application that helps high school to manage their students</p>
								<button>View Project</button>
							</div>
						</div>
					</div>
					<div className="project-box">
						<div className="projects-info">
							<div className="projects-details">
								<h2>Small Bank management System</h2>
								<p>An financiel desktop application that helps banks to manage clients and their accounts</p>
								<a href="#"><button>View Project</button></a>
							</div>
							<div className="projects-details">
								<h2>Fade Gym WebSite</h2>
								<p>A website that helps a gym to manage their clients</p>
								<button>View Project</button>
							</div>
						</div>
					</div>
					<div className="project-box">
						<div className="projects-info">
							<div className="projects-details">
								<h2>Small Bank management System</h2>
								<p>An financiel desktop application that helps banks to manage clients and their accounts</p>
								<a href="#"><button>View Project</button></a>
							</div>
							<div className="projects-details">
								<h2>Fade Gym WebSite</h2>
								<p>A website that helps a gym to manage their clients</p>
								<button>View Demo</button>
							</div>
						</div>
					</div>
					<div className="project-box">
						<div className="projects-info">
							<div className="projects-details">
								<h2>Novatech Company Website</h2>
								<p>A Website for a training center company and online digital marketing</p>
								<a href="#"><button>View Project</button></a>
							</div>
							<div className="projects-details">
								<h2>School management System</h2>
								<p>An educational desktop application that helps high school to manage their students</p>
								<button>View Project</button>
							</div>
						</div>
					</div>
				</div>	
			</div>
		</div>
    </div>
  );
}

export default Projects;