import React from 'react';
import './project-style.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import nova from './images/Nova.png'
import acndc from './images/acndc.png'
import hsdc from './images/hsdc.png'
import rh from './images/rh.png'
import ic from './images/ic.png'
import dash from './images/Dashboard.PNG'
import zuri from './images/zuri.png'


function Projects() {

	return (

		<div className="projects">
			<div className="container-projects-content">
				<div className="container-content-projects">
					<div className="projects-title">
						<h1>Recent Projects and Contributions</h1>
					</div>
					<div className="projects-boxes">
						<div className="project-box">
							<div className="projects-info">
								<div className='project_img'>
									<img src={nova} alt="Myimage" className="project_image" />
								</div>
								<div className="projects-details">
									<div className='project_title'>
										<h2>Novatech Company Website</h2>
										<a href="https://github.com/obediobadiah/Novatech-Web.git"><VisibilityIcon /></a>
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
								<div className='project_img'>
									<img src={acndc} alt="Myimage" className="project_image"  />
								</div>
								<div className="projects-details">
									<div className='project_title'>
										<h2>ACNDC WebSite</h2>
										<a href="https://acndc.org/"><VisibilityIcon /></a>
									</div>
									<p>A vitrine website for provided services and events for women rightous</p>
									<div className='project_skills'>
										<ul>
											<li>ReactJS</li>
											<li>Boostrap</li>
											<li>NodeJS</li>
										</ul>
									</div>
								</div>
							</div>
						</div>


						<div className="project-box">
							<div className="projects-info">
								<div className='project_img'>
									<img src={hsdc} alt="Myimage" className="project_image" />
								</div>
								<div className="projects-details">
									<div className='project_title'>
										<h2>Humnanitarian Spatial Data Center</h2>
										<a href="https://hsdc.org/"><VisibilityIcon /></a>
									</div>
									<p>An Information Management Tool for Humanitarian Programming in Afghanistan</p>
									<div className='project_skills'>
										<ul>
											<li>ReactJS</li>
											<li>DjangoREST</li>
											<li>Geoserver</li>
											<li>Geonode</li>
										</ul>
									</div>
								</div>
							</div>
						</div>


						<div className="project-box">
							<div className="projects-info">
								<div className='project_img'>
									<img src={rh} alt="Myimage" className="project_image"  />
								</div>
								<div className="projects-details">
									<div className='project_title'>
										<h2>ReportHub</h2>
										<a href="https://dev.reporthub.immap.org/"><VisibilityIcon /></a>
									</div>
									<p>A platform that provides an easy-to-use system that includes alerts and notifications for a daily reporting workflow,</p>
									<div className='project_skills'>
										<ul>
											<li>Django</li>
											<li>MaterialUI</li>
										</ul>
									</div>
								</div>
							</div>
						</div>


						
						<div className="project-box">
							<div className="projects-info">
								<div className='project_img'>
									<img src={ic} alt="Myimage" className="project_image"  />
								</div>
								<div className="projects-details">
									<div className='project_title'>
										<h2>iMMAP Careers</h2>
										<a href="https://careers.immap.org/"><VisibilityIcon /></a>
									</div>
									<p>A human ressource management platform</p>
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
								<div className='project_img'>
									<img src={dash} alt="Myimage" className="project_image"  />
								</div>
								<div className="projects-details">
									<div className='project_title'>
										<h2>Small Bank Customers Management System</h2>
										<a href="https://github.com/obediobadiah/SmallBankManagementSystem"><VisibilityIcon /></a>
									</div>
									<p>A desktop system to manage bank customers informations</p>
									<div className='project_skills'>
										<ul>
											<li>ReactJS</li>
											<li>Laravel</li>
											<li>Boostrap</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						

						<div className="project-box">
							<div className="projects-info">
								<div className='project_img'>
									<img src={zuri} alt="Myimage" className="project_image"  />
								</div>
								<div className="projects-details">
									<div className='project_title'>
										<h2>ZuriChat Platform</h2>
										<a href="https://www.zuri.chat/"><VisibilityIcon /></a>
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



					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
