import React from "react";
import photo from '../../assets/images/Header/header image final.jpg';

function Nav(props){

    const {contactSelected,
           setContactSelected
    }=props;


    return(
        <header id="header">
            <section className="header-info">
                <img src={photo} alt="Headshot of Mark Miller."/>
                <div className="general-info">
                    <h1>Mark Miller:</h1>
                    <br></br>
                    <p>Web Developer</p>
                </div>
            </section>
            <nav>
                <ul>
                    <li>
                        <a href="#About" onClick={() => setContactSelected(false)}>About Me</a>
                    </li>
                    <li>
                        <a href="#Contact" onClick={() => setContactSelected(true)}>Contact Me</a>
                    </li>
                    <li>
                        <a href="#Portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#Resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;