import React from "react";

function Resume() {

    return (
        <div>
            <h1>Resume</h1>
            <p>Download my {' '}  
                <a href="../../assets/resume/Technical-Resume.docx" download>resume.</a>
            </p>
            <br></br>
            <div>
                <h2>Front-End Proficienes</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>JQuery</li>
                </ul>
                <br></br>
                <h2>Back-End Proficiences</h2>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>Pogressive Web Apps</li>
                    <li>Express</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;