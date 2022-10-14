import React, {useState} from "react";
import Footer from "./footer";
import Header from "./header";
import About from "./Pages/About";
import ContactForm from "./Pages/Contact";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";


function PortfolioContainer() {
    //sets value of current page
    const [currentPage, setCurrentPage] = useState('About');

    //returns component based on selected value in nav component
    const renderPage = () =>{
        if(currentPage === 'About'){
            return <About/>;
        }
        if(currentPage === 'Contact'){
            return <ContactForm/>;
        }
        if(currentPage==='Resume'){
            return <Resume/>
        }
        return <Projects/>
    };

    

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        
        <div>
            {/* passes currentPage and handlePageChange function to header component */}
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            <main>
                {renderPage()}
            </main>
            <Footer/>
        </div>
        
    );
}

export default PortfolioContainer;