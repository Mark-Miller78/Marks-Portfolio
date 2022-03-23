import React from "react";
import github from "../assets/images/logos/GitHub-logo.png";
import linkedin from "../assets/images/logos/linkedin-logo.png";

function Footer () {

    return( 
    <footer>
        <div>
            <div>
                <a href="https://github.com/Mark-Miller78" target="_blank">
                    <img
                        src={github}
                        alt= "github logo"
                    />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/mark-miller78/" target="_blank">
                    <img
                        src={linkedin}
                        alt= "linkedin logo"
                        height="32px" 
                        width="32px"
                    />
                </a>
            </div>
        </div>
    </footer>
    );
}

export default Footer;