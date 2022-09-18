import React from 'react';
import './project-style.css';
import VisibilityIcon from '@mui/icons-material/Visibility';


function Projects() {

	return (

		<div className="projects">
			<div className="container-projects-content">
				<div className="container-content-projects">
					<div className="projects-title">
						<h1>Recent Projects</h1>
					</div>
					<div className="projects-boxes">
						<div className="project-box">
							<div className="projects-info">
								<div className="projects-details">
									<div className='project_title'>
										<h2>ACNDC WebSite</h2>
										<a href="https://acndc.org/"><VisibilityIcon/></a>
									</div>
									<p>A vitrine website for provided services and events for women rightous</p>
									<div className='project_skills'>
										<ul>
											<li>ReactJS</li>
											<li>Boostrap</li>
											<li>MaterialUI</li>
										</ul>
									</div>
								</div>
							</div>
						</div>


						<div className="project-box">
							<div className="projects-info">
								<div className="projects-details">
									<div className='project_title'>
										<h2>Novatech Company Website</h2>
										<a href="https://github.com/obediobadiah/Novatech-Web.git"><VisibilityIcon/></a>
									</div>
									<p>A Website for a training center company and online digital marketing</p>
									<div className='project_skills'>
										<ul>
											<li>ReactJS</li>
											<li>Boostrap</li>
											<li>MaterialUI</li>
										</ul>
									</div>
								</div>
							</div>
						</div>


						<div className="project-box">
							<div className="projects-info">
								<div className="projects-details">
									<div className='project_title'>
										<h2>ZuriChat Platform</h2>
										<a href="https://www.zuri.chat/"><VisibilityIcon/></a>
									</div>
									<p>A platform on which an infinite number of powerful collaboration apps can be built</p>
									<div className='project_skills'>
										<ul>
											<li>ReactJS</li>
											<li>Node RestAPI</li>
											<li>MaterialUI</li>
											<li>Boostrap</li>
										</ul>
									</div>
								</div>
							</div>
						</div>


						<div className="project-box">
							<div className="projects-info">
								<div className="projects-details">
									<div className='project_title'>
										<h2>Small Bank Customers Management System</h2>
										<a href="https://github.com/obediobadiah/SmallBankManagementSystem"><VisibilityIcon/></a>
									</div>
									<p>A desktop system to manage bank customers informations</p>
									<div className='project_skills'>
										<ul>
											<li>CSharp</li>
											<li>SQLServer</li>
											<li>Twilio</li>
										</ul>
									</div>
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
