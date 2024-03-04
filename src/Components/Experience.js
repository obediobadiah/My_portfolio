import React from 'react';
import './Experience.css';


function Experience() {


    return (
        <div className="Container">
            <div className='experience_content'>

                <div className='experience_details'>
                    <h1 className='experience_title'>Education</h1>
                    <div className='experience_card'>
                        <div className='experience_card_box experience_date'>
                            <h5>From  September 2017 To December 2020</h5>
                            <h1>Bachelor's degree in Computer science</h1>
                            <p>At Kigali Independant University (ULK)</p>
                        </div>

                        <div className='experience_card_box experience_projects'>
                            <p><strong>Project</strong></p>
                            <ul>
                                <li>
                                    <strong>Small Bank Customers Management System:</strong> A desktop system to manage bank customers informations
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                
                <div className='experience_details'>
                    <h1 className='experience_title'>Proffesional Experiences</h1>
                    <div className='experience_card'>
                        <div className='experience_card_box experience_date'>
                            <h5>From April 11 2022 To Now</h5>
                            <h1>Fullstack Developer</h1>
                            <p>At iMMAP (Remote)</p>
                        </div>

                        <div className='experience_card_box experience_projects'>
                            <p><strong>Projects</strong></p>
                            <ul>
                                <li>
                                    <strong>iMMAP Careers:</strong> Human Ressources Management Platform
                                </li>
                                <li>
                                    <strong>ReportHUB:</strong> Humanitarian Report Platform
                                </li>
                                <li>
                                    <strong>HSDC:</strong> Humanitarian Spatial Data Center Platform
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='experience_card'>
                        <div className='experience_card_box experience_date'>
                            <h5>From November 2021  To March 15</h5>
                            <h1>Fullstack Developer</h1>
                            <p>At ACNDC (Action pour la Conservation de la Nature et le Développement Communautaire), DRCongo</p>
                        </div>

                        <div className='experience_card_box experience_projects'>
                            <p><strong>Project</strong></p>
                            <ul>
                                <li>
                                    <strong>ACNDCORG:</strong> ACNDC Actuality management Platform
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='experience_card'>
                        <div className='experience_card_box experience_date'>
                            <h5>From August 2021 To November 2021</h5>
                            <h1>Front-end Developer</h1>
                            <p>At Zuri Company, Nigeria (Remote)</p>
                        </div>

                        <div className='experience_card_box experience_projects'>
                            <p><strong>Project</strong></p>
                            <ul>
                                <li>
                                    <strong>ZURI CHAT:</strong> Communication workspace app
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='experience_card'>
                        <div className='experience_card_box experience_date'>
                            <h5>From March 2019 To August 2020</h5>
                            <h1>Software Developer</h1>
                            <p>At Novatech, DRCongo</p>
                        </div>

                        <div className='experience_card_box experience_projects'>
                            <p><strong>Project</strong></p>
                            <ul>
                                <li>
                                    <strong>Novatech Site:</strong> Training Center Services Display Platform
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Experience;