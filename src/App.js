import React, {useState} from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";



function App() {
  
const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}/>
      <main>
        {!contactSelected ? (
          <>
            <About/>
          </>
        ) : (  
          <ContactForm/>
        )}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
