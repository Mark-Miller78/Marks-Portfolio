import React from "react";


function Nav({currentPage, handlePageChange}){
    return(

        <nav>
            <ul>
                <li>
                    <a href="#About" 
                       onClick={() =>handlePageChange('About')}
                       className={currentPage === 'About' ? 'testtest' : "notest"}>About Me</a>
                </li>
                <li>
                    <a href="#Contact" onClick={()=> handlePageChange('Contact')}>Contact Me</a>
                </li>
                <li>
                    <a href="#Portfolio" onClick={() => handlePageChange('Projects')}>Portfolio</a>
                </li>
                <li>
                    <a href="#Resume"
                       onClick={()=>handlePageChange('Resume')}>
                    Resume</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;