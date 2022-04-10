import React from 'react';
import './Experience.css';


function Experience() {


    return (
        <div className="Container">
            <div className='experience_content'>

                <div className='experience_details'>
                    <h1 className='experience_title'>Proffesional Experiences</h1>
                    <div className='experience_card'>
                        <h5>From April 11 To Present</h5>
                        <h1>Fullstack Developer</h1>
                        <p>At iMMAP</p>
                    </div>
                    <div className='experience_card'>
                        <h5>From November 2021  To March 15</h5>
                        <h1>Fullstack Developer</h1>
                        <p>At ACNDC (Action pour la Conservation de la Nature et le Développement Communautaire), DRCongo</p>
                    </div>
                    <div className='experience_card'>
                        <h5>From August 2021 To November 2021</h5>
                        <h1>Front-end Developer</h1>
                        <p>At Zuri Company, Nigeria</p>
                    </div>
                    <div className='experience_card'>
                        <h5>From October 2020 To June 2021</h5>
                        <h1>Full-stack developer </h1>
                        <p>Freelance, DRCongo</p>
                    </div>
                    <div className='experience_card'>
                        <h5>From March 2019 To August 2020</h5>
                        <h1>Software Developer</h1>
                        <p>At Novatech, DRCongo</p>
                    </div>
                </div>

                <div className='educations_details'>
                    <h1 className='educations_title'>Education</h1>
                    <div className='education_card'>
                        <h5>From  September 2017 To December 2020</h5>
                        <h1>Bachelor's degree in Computer science</h1>
                        <p>At Kigali Independant University (ULK)</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Experience;