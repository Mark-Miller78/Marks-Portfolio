import React from "react";

//destructured props from header component
function Nav({currentPage, handlePageChange}){
    return(

        <nav>
            <ul>
                <li>
                    <a href="#About" 
                        // changes value of currentPage
                       onClick={() =>handlePageChange('About')}
                    //    highlights the current page being viewed
                       className={currentPage === 'About' ? 'active-tab' : ""}
                       >About Me</a>
                </li>
                <li>
                    <a href="#Portfolio" 
                        onClick={() => handlePageChange('Projects')}
                        className={currentPage === 'Projects' ? 'active-tab' : ""}
                    >Portfolio</a>
                </li>
                <li>
                    <a href="#Resume"
                       onClick={()=>handlePageChange('Resume')}
                       className={currentPage === 'Resume' ? 'active-tab' : ""}
                    >
                    Resume</a>
                </li>
                <li >
                    <a href="#Contact" 
                       onClick={()=> handlePageChange('Contact')}
                       className={currentPage === 'Contact' ? 'active-tab' : ""}
                    >Contact Me</a>
                </li>         
            </ul>
        </nav>
    );
}

export default Nav;