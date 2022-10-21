import React from "react";
import resume from '../assets/resume/Technical-Resume.doc';

function Resume() {

    return (
        <div className="resume">
            <div>
                <h1 className="section-title">Resume</h1>
                <p className="download">Download my resume {' '}  
                    <a href={resume} download>HERE!</a>
                </p>
            </div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h2 className="proficiencies">Front-End Proficienes</h2>
                        <ul className="proficiencies-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Foundation</li>
                            <li>JQuery</li>
                        </ul>
                    </div>
                    <br></br>
                    <div className="col-md-6 col-12">
                        <h2 className="proficiencies">Back-End Proficiences</h2>
                        <ul className="proficiencies-list">
                            <li>APIs</li>
                            <li>Node</li>
                            <li>MySQL, Sequelize</li>
                            <li>MongoDB, Mongoose</li>
                            <li>Pogressive Web Apps</li>
                            <li>Express</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;