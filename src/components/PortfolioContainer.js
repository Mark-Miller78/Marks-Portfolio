import React, {useState} from "react";
import Footer from "./footer";
import Header from "./header";
import About from "./Pages/About";
import ContactForm from "./Pages/Contact";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

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
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            <main>
            {renderPage()}
            </main>
            <Footer/>
        </div>
        
    );
}

export default PortfolioContainer;