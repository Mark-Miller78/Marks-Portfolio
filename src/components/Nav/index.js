import React from "react";
import photo from '../../assets/images/Header/header image final.jpg';

function Nav(){


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
                        <a href="#About">About Me</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;