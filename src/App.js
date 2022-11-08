import React from "react";
// import background from "./assests/herobg.jpg"
import About from "./components/About_us";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import GlassCard from "./components/glasscard";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { useState } from "react";
import SocialLinks from "./components/SocialLinks";

function App() {
  const [popup, setPopupopen] = useState(false);

  return (
    
    <>
    <div>
    <NavBar />
    </div>
    <div 
    style={{
      width: '100vw',
      height: '100vh',
      backgroundImage: `url("https://i.ibb.co/zxxKyY5/herobg.jpg")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Home />
      </div>
      <div>
      <About />
      <Blogs />
      <button
        onClick={() => {
          setPopupopen(true);
        }}
      >
        Open
      </button>
      
      {popup && <GlassCard setPopup = {setPopupopen} />}

      <Contact />

      <SocialLinks />
    </div>
    </>
  );
}

export default App;
