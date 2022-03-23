import React from "react";
import Nav from "./Nav";
import photo from "../assets/images/Header/header image final.jpg";

function Header({currentPage, handlePageChange}) {

    return (
        <header id="header">
            <section className="header-info">
                <img src={photo} alt="Headshot of Mark Miller."/>
                <div className="general-info">
                    <h1>Mark Miller:</h1>
                    <br></br>
                    <p>Web Developer</p>
                </div>
            </section>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
    );
}

export default Header;