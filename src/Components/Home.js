import React from 'react';
import NavBar from './NavBar'
import IntroSection from './Intro-section'
import About from './About'
import Experience from './Experience'
import Skills from './Skill'
import Projects from './Projects'
import Contacts from './Contacts'
import 'antd/dist/reset.css';
import { BackTop } from 'antd';
import './home-style.css';


function Home() {
	return (
		<div className="container">
			<div className='container-content'>
				<div className='container-left'>
					<IntroSection />
					<div className='container-left-content'>
						<About />
					</div>
					<Experience />
					<Skills />
					<Projects />
					<Contacts />
					<BackTop />
				</div>
				<div className='container-right'>
					<div className='container-right_content'>
						<About />
					</div>
				</div>

			</div>
		</div>
	);
}

export default Home;