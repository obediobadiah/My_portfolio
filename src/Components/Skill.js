import React from 'react';
import './skill-style.css';
import 'antd/dist/antd.css';
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
								<h3>HTML, CSS and Javascript</h3>
								<Progress percent={90} strokeWidth={8} strokeColor="rgb(187, 81, 71)"/>
								<h3>ReactJS</h3>
								<Progress percent={70} strokeWidth={8} strokeColor="rgb(187, 81, 71)"/>
								<h3>VueJS</h3>
								<Progress percent={60} strokeWidth={8} strokeColor="rgb(187, 81, 71)"/>
								<h3>JQuery</h3>
								<Progress percent={60} strokeWidth={8} strokeColor="rgb(187, 81, 71)"/>
							</div>
						</div>
					</div>
					<div className="skill-info">
						<div className="skill-details">
							<div className="skill-detail-name">
								<h2 className="categories">Backend</h2>
							</div>
							<div className="skill-detail-info">
								<h3>PHP</h3>
								<Progress percent={60} strokeWidth={8} strokeColor="rgb(187, 81, 71)"/>
								<h3>NodeJS</h3>
								<Progress percent={50} strokeWidth={8} strokeColor="rgb(187, 81, 71)"/>
								<h3>Python</h3>
								<Progress percent={60} strokeWidth={8} strokeColor="rgb(187, 81, 71)"/>
							</div>
						</div>
					</div>
					<div className="skill-info">
						<div className="skill-details">
							<div className="skill-detail-name">
								<h2 className="categories">Design</h2>
							</div>
							<div className="skill-detail-info">
								<h3>Adobe Illustrator</h3>
								<Progress percent={80} strokeWidth={8} strokeColor="rgb(187, 81, 71)"/>
								<h3>Adobe Photoshop</h3>
								<Progress percent={90} strokeWidth={8} strokeColor="rgb(187, 81, 71)"/>
								<h3>Adobe XD</h3>
								<Progress percent={90} strokeWidth={8} strokeColor="rgb(187, 81, 71)"/>
								<h3>Sketch</h3>
								<Progress percent={50} strokeWidth={8} strokeColor="rgb(187, 81, 71)"/>
							</div>
						</div>
					</div>
					<div className="skill-info">
						<div className="skill-details">
							<div className="skill-detail-name">
								<h2 className="categories">Programming Languages</h2>
							</div>
							<div className="skill-detail-info">
								<h3>C</h3>
								<Progress percent={60} strokeWidth={8} strokeColor="rgb(187, 81, 71)"/>
								<h3>C++</h3>
								<Progress percent={60} strokeWidth={8} strokeColor="rgb(187, 81, 71)"/>
								<h3>CSharp</h3>
								<Progress percent={80} strokeWidth={8} strokeColor="rgb(187, 81, 71)"/>
								<h3>Java</h3>
								<Progress percent={70} strokeWidth={8} strokeColor="rgb(187, 81, 71)"/>
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