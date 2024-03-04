import React from 'react';
import './skill-style.css';
import 'antd/dist/reset.css';
import { Progress } from 'antd';


function Skill() {

	return (

		<div className="skills">
			<div className="container-skill-content">
				<div className="container-content-skill">
					<div className="skill-title">
						<h1>Skills</h1>
					</div>
					<div className="skill-boxes">
						<div className="skill-info">
							<div className="skill-details">
								<div className="skill-detail-name">
									<h2 className="categories">Frontend</h2>
								</div>
								<div className="skill-detail-info">

									<div className='skill_box'>
										<h3>HTML, CSS and Javascript</h3>
										<Progress percent={90} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
									</div>

									<div className='skill_box'>
										<h3>ReactJS</h3>
										<Progress percent={70} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
									</div>

									<div className='skill_box'>
										<h3>VueJS</h3>
										<Progress percent={60} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
									</div>

									<div className='skill_box'><h3>JQuery</h3>
										<Progress percent={60} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
									</div>

									<div className='skill_box'><h3>AngularJS</h3>
										<Progress percent={50} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
									</div>

								</div>
							</div>
						</div>
						<div className="skill-info">
							<div className="skill-details">
								<div className="skill-detail-name">
									<h2 className="categories">Backend</h2>
								</div>
								<div className="skill-detail-info">

									<div className='skill_box'>
										<h3>PHP</h3>
										<Progress percent={60} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
									</div>

									<div className='skill_box'>
										<h3>NodeJS</h3>
										<Progress percent={50} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
									</div>

									<div className='skill_box'>
										<h3>Python</h3>
										<Progress percent={60} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
									</div>

									<div className='skill_box'>
										<h3>DjangoREST</h3>
										<Progress percent={70} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
									</div>

									<div className='skill_box'>
										<h3>Laravel</h3>
										<Progress percent={70} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
									</div>
								</div>
							</div>
						</div>
						<div className="skill-info">
							<div className="skill-details">
								<div className="skill-detail-name">
									<h2 className="categories">Design</h2>
								</div>
								<div className="skill-detail-info">
									<div className='skill_box'>
										<h3>Adobe Illustrator</h3>
										<Progress percent={80} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
									</div>
									<div className='skill_box'>
										<h3>Adobe Photoshop</h3>
										<Progress percent={90} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
									</div>
									<div className='skill_box'>
										<h3>Adobe XD</h3>
										<Progress percent={90} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
									</div>
									<div className='skill_box'>
										<h3>Sketch</h3>
										<Progress percent={50} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
									</div>
								</div>
							</div>
						</div>
						<div className="skill-info">
							<div className="skill-details">
								<div className="skill-detail-name">
									<h2 className="categories">Programming Languages</h2>
								</div>
								<div className="skill-detail-info">
									<div className='skill_box'>
										<h3>C</h3>
										<Progress percent={60} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
									</div>
									<div className='skill_box'>
										<h3>C++</h3>
										<Progress percent={60} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
									</div>
									<div className='skill_box'>
										<h3>CSharp</h3>
										<Progress percent={80} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
									</div>
									<div className='skill_box'>
										<h3>Java</h3>
										<Progress percent={70} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
									</div>
								</div>
							</div>
						</div>
						<div className="skill-info">
							<div className="skill-details">
								<div className="skill-detail-name">
									<h2 className="categories">Database</h2>
								</div>
								<div className="skill-detail-info">
									<div className='skill_box'>
										<h3>MySQL</h3>
										<Progress percent={90} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
									</div>
									<div className='skill_box'>
										<h3>PostgreSQL</h3>
										<Progress percent={90} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
									</div>
									<div className='skill_box'>
										<h3>SQLite</h3>
										<Progress percent={90} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
									</div>
									<div className='skill_box'>
										<h3>MongoDB</h3>
										<Progress percent={90} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
									</div>
									<div className='skill_box'>
										<h3>Firebase</h3>
										<Progress percent={90} strokeWidth={3} strokeColor="rgb(187, 81, 71)" />
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

export default Skill;