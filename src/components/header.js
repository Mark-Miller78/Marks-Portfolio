import React from "react";
import Nav from "./Nav";

function Header({currentPage, handlePageChange}) {

    return (
        <header id="header">
            <section className="header-info">
                <div className="general-info">
                    <h1>Mark A. Miller Jr.</h1>
                </div>
            </section>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
    );
}

export default Header;