import React, {useState} from "react";
import Masonry from "react-masonry-css";
import 'bootstrap/js/dist/collapse'



function Projects(){
    //sets value if hovering over project
    const [isHovering, setIsHovering] = useState(-1);

    //project array
    const projectInfo = [
        {
            name: 'Game Lounge',
            description:'A relaxed place to chat with friends and play some games',
            link: 'https://the-3-codeteers.herokuapp.com/',
            gitHub: 'https://github.com/afebre1027/the-3-codeteers',
            tech:'My Roles: MySQL, Handlebars, Express.js'
        },
        {
            name: 'Parks And Brews',
            description:'An app for finding a place to relax after a hard day hiking',
            link: 'https://amuldrow.github.io/group-project/',
            gitHub: 'https://github.com/amuldrow/group-project',
            tech: 'My Roles: APIs, Javascript, Foundation, Mapbox'
        },
        {
            name: 'Budget Tracker',
            description:'A PWA for tracking your finances no matter where you are',
            link: 'https://arcane-forest-95788.herokuapp.com/',
            gitHub: 'https://github.com/Mark-Miller78/Budget-Tracker-PWA',
            tech: 'PWA, Service Worker, Heroku'
        },
        {
            name: 'Note Taker',
            description:'An app for any ideas you want to jot down',
            link: 'https://boiling-everglades-66556.herokuapp.com/',
            gitHub: 'https://github.com/Mark-Miller78/Note-Taker',
            tech: 'Express.js, Node.js'
        },
        {
            name: 'Work Day Scheduler',
            description: 'An app for keeping track of your hectic work day',
            link: 'https://mark-miller78.github.io/Work-Day-Scheduler/',
            gitHub: 'https://github.com/Mark-Miller78/Work-Day-Scheduler',
            tech: 'JQuery, Moment.js, Bootstrap'
        },
        {
            name: 'Social Network API',
            description: 'Backend setup for a social media app',
            link: 'https://github.com/Mark-Miller78/Social-Network-API',
            gitHub: 'https://github.com/Mark-Miller78/Social-Network-API',
            tech: 'MongoDB, Mongoose, Express.js'
        }
    ];

    const breakpointColumnsObj = {
        default: 3,
        1024: 2,
        652: 1,
    }

    return (
        <div className="project-container">
            <h2 className="section-title">Projects</h2>
            <section className="project-list container">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {/* maps over project array to create card for each, also passing in index in array */}
                    {projectInfo.map((project, index) => {
                        return (
                            <div 
                                //changes class of card that is hovered over
                                className={`card ${isHovering === index ? "cardHover" : ""}`}
                                //on hover, changes isHovering to index value
                                onMouseEnter={() => setIsHovering(index)} 
                                onMouseLeave={() => setIsHovering(-1)}
                                key={index}
                            >
                                <img  
                                    className='projectImg'
                                    src={require(`../assets/images/Projects/${project.name}.png`)} 
                                    alt="project screenshot"
                                />
                                <div className='accordion accordion-flush' id={'project'+index}>    
                                    <div className="accordion-item">
                                        <h2 className="accordion-header projectHeader" id={'heading'+index}>
                                            <button className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle='collapse'
                                                    data-bs-target={'#accordionItem'+index}
                                                    aria-expanded='false'
                                                    aria-controls={project.name}>
                                                        {project.name}
                                            </button>
                                        </h2>
                                        <div className="accordion-collapse collapse"
                                                id={'accordionItem'+index}
                                                aria-labelledby={'heading'+index}
                                                data-bs-parent={'#project'+index}>
                                            <div className="accordion-body">
                                                <p className="description">{project.description}</p>
                                                <p className="description">{project.tech}</p>
                                                <div className="links">
                                                    <a  href={project.link} target="_blank" rel="noreferrer noopener">
                                                        View app
                                                    </a>
                                                    <a  href={project.gitHub} target="_blank" rel="noreferrer noopener">
                                                        View repo
                                                    </a>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </Masonry>
            </section>
        </div>
    );
}

export default Projects;