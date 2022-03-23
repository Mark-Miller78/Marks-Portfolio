import React, {useState} from "react";
import '../../assets/css/projects.css';
import gameLounge from "../../assets/images/Projects/game-lounge.png";
import parksAndBrews from "../../assets/images/Projects/parks-and-brews.png";
import gitHub from "../../assets/images/logos/GitHub-logo.png";


function Projects(){

    const [hover, setHover] = useState(false);

    const handleHoverState = () =>{
        return setHover(!hover);
    }

    return (
        <div>
            <h2 className="section-title">Projects</h2>
            <section className="project-list container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6" >
                        <div className="card" onMouseEnter={e=>(handleHoverState())} onMouseLeave={e=>(handleHoverState())}>
                            <img  className={`projectImg ${hover ? "hover" : ""}`} src={gameLounge} alt="Homepage for Game Lounge"/>
                           <div className="items">
                                <h3 className="projectLinks">Game Lounge</h3>
                                <img className="logo" src={gitHub}/>
                           </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card">
                            <a href="https://amuldrow.github.io/group-project/" target="_blank" rel="noopener noreferrer">
                                <img className="projectImg" src={parksAndBrews} alt="Landing page for Parks and Brews"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card">
                            <img className="projectImg" src="./Assets/images/placeholder2.jpg" alt="Elephants covered in clay gathering in a herd"/>
                            <h3>Coming Soon!</h3>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card">
                            <img src="./Assets/images/placeholder3.jpg" alt="Snowy clearing on the edge of a forest"/>
                            <h3>Coming Soon!</h3>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card">
                            <img src="./Assets/images/placeholder4.jpg" alt="Five Zebras grazing on the savanna"/>
                            <h3>Coming Soon!</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;