import React from "react";

//destructured props from header component
function Nav({currentPage, handlePageChange}){
    return(

        <nav>
            <ul>
                <li>
                    <span 
                        // changes value of currentPage
                       onClick={() =>handlePageChange('About')}
                    //    highlights the current page being viewed
                       className={currentPage === 'About' ? 'active-tab' : ""}
                       >About Me</span>
                </li>
                <li>
                    <span  
                        onClick={() => handlePageChange('Projects')}
                        className={currentPage === 'Projects' ? 'active-tab' : ""}
                    >Portfolio</span>
                </li>
                <li>
                    <span 
                       onClick={()=>handlePageChange('Resume')}
                       className={currentPage === 'Resume' ? 'active-tab' : ""}
                    >
                    Resume</span>
                </li>
                <li >
                    <span  
                       onClick={()=> handlePageChange('Contact')}
                       className={currentPage === 'Contact' ? 'active-tab' : ""}
                    >Contact Me</span>
                </li>         
            </ul>
        </nav>
    );
}

export default Nav;