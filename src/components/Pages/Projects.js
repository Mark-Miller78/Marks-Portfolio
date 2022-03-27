import React, {useState} from "react";
import gitHub from "../../assets/images/logos/GitHub-logo.png";


function Projects(){
    //sets value if hovering over project
    const [isHovering, setIsHovering] = useState(-1);

    //project array
    const projectInfo = [
        {
            name: 'Game Lounge',
            link: 'https://the-3-codeteers.herokuapp.com/',
            gitHub: 'https://github.com/afebre1027/the-3-codeteers',
            description:'MySQL, Handlebars, Express.js'
        },
        {
            name: 'Parks And Brews',
            link: 'https://amuldrow.github.io/group-project/',
            gitHub: 'https://github.com/amuldrow/group-project',
            description: 'APIs, Javascript, Foundation'
        },
        {
            name: 'Budget Tracker',
            link: 'https://arcane-forest-95788.herokuapp.com/',
            gitHub: 'https://github.com/Mark-Miller78/Budget-Tracker-PWA',
            description: 'PWA, Service Worker, Heroku'
        },
        {
            name: 'Note Taker',
            link: 'https://boiling-everglades-66556.herokuapp.com/',
            gitHub: 'https://github.com/Mark-Miller78/Note-Taker',
            description: 'Express.js, Node.js'
        },
        {
            name: 'Work Day Scheduler',
            link: 'https://mark-miller78.github.io/Work-Day-Scheduler/',
            gitHub: 'https://github.com/Mark-Miller78/Work-Day-Scheduler',
            description: 'JQuery, Moment.js, Bootstrap'
        },
        {
            name: 'Social Network API',
            link: 'https://github.com/Mark-Miller78/Social-Network-API',
            gitHub: 'https://github.com/Mark-Miller78/Social-Network-API',
            description: 'MongoDB, Mongooose, Express.js'
        }
    ];

    return (
        <div className="project-container">
            <h2 className="section-title">Projects</h2>
            <section className="project-list container">
                <div className="row justify-content-center">
                    {/* maps over project array to create card for each, also passing in index in array */}
                    {projectInfo.map((project, index) => {
                        return (<div className="col-lg-4 col-md-6 col-sm-6 col-9" key={index}>
                            <div 
                                //changes class of card that is hovered over
                                className={`card ${isHovering === index ? "cardHover" : ""}`}
                                //on hover, changes isHovering to index value
                                onMouseEnter={() => setIsHovering(index)} 
                                onMouseLeave={() => setIsHovering(-1)}
                            >
                                <img  
                                    className={`projectImg ${isHovering === index ? "hover" : ""}`} 
                                    src={require(`../../assets/images/Projects/${project.name}.png`)} 
                                    alt="project screenshot"
                                />
                            <div className="items row">
                                    <a href={project.link} target="_blank" rel="noreferrer" className="col-8 col-lg-9 col-md-9 col-sm-8">
                                        <h3 className="projectLinks">{project.name}</h3>
                                    </a>
                                    <a href={project.gitHub} target="_blank" rel="noreferrer" className="col-4 col-lg-3 col-md-3 col-sm-4">
                                        <img className="logo" alt="Github logo" src={gitHub}/>
                                    </a>
                                    <p className="description col-12">{project.description}</p>
                            </div>
                            </div>
                        </div>)
                    })}

                </div>
            </section>
        </div>
    );
}

export default Projects;