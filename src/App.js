import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Experience } from "./components/Experience";
import Rloader from "./assets/Load.gif"
import { useEffect } from 'react';
import { useState } from 'react';
import AboutMe from './components/About';
function App() {
  const [isloading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setIsLoading(false)
    }, 1800);
  })

  return (
    <>
      {loading || isloading ? (
        <div className='myload'>
          {isloading ? (
            <>
            <div class="loader"><span>sending...</span></div>
            </>
          ) : (
                <img src={Rloader} alt="" className='loaderr'/>
          )}
        </div>      
      ) : (
        <div className="App">
        <NavBar />
        <Banner />
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
            <Contact isloading={isloading} setIsLoading={setIsLoading} />
        <Footer />
        </div> 
      )}
    </> 
  );
}

export default App;