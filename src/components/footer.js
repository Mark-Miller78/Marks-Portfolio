import React from "react";
import github from "../assets/images/logos/GitHub-logo.png";
import linkedin from "../assets/images/logos/linkedin-logo.png";
import facebook from "../assets/images/logos/facebook.png";

function Footer () {

    return( 
    <footer>
        <div className="container">
            <div className="footer-icons row justify-content-center">
                <div className="col-4">
                    <a href="https://github.com/Mark-Miller78" target="_blank" rel="noreferrer">
                        <img
                            src={github}
                            alt= "github logo"
                            width={50}
                        />
                    </a>
                </div>
                <div className="col-4">
                    <a href="https://www.linkedin.com/in/mark-miller78/" target="_blank" rel="noreferrer">
                        <img
                            src={linkedin}
                            alt= "linkedin logo" 
                            width={50}
                        />
                    </a>
                </div>
                <div className="col-4">
                    <a href="https://www.facebook.com/mark.miller.16752" target="_blank" rel="noreferrer">
                        <img
                            src={facebook}
                            alt= "facebook logo" 
                            width={50}
                        />
                    </a>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;