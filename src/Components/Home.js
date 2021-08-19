import React from 'react';
import NavBar from './NavBar'
import IntroSection from './Intro-section'
import About from './About'
import Skill from './Skill'
import Projects from './Projects'
import Contacts from './Contacts'
import 'antd/dist/antd.css';
import { BackTop } from 'antd';

function Home() {
  return (
    <div className="Container">
		<NavBar />
		<IntroSection />
		<About />
		<Skill />
		<Projects />
		<Contacts />
		<BackTop />
    </div>
  );
}

export default Home;