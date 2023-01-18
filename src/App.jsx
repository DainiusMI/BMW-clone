import React, { useState, useEffect } from "react";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Services from "./assets/components/Services";
import Models from "./assets/components/ModelsRow";
import Footer from "./assets/components/Footer";
import StaticSection from "./assets/components/StaticSection";
import mainData from "./assets/mainData.json"


export default function App() {

  // track device screen size
  const [screenSize, setScreenSize] = useState("desktop")
  function handleScreenSize() {
    window.innerWidth < 768 ? 
      setScreenSize("mobile") :
      window.innerWidth < 1280 ?
        setScreenSize("tablet") :
        setScreenSize("desktop") 
  }
  useEffect(() => {
    handleScreenSize()
    window.addEventListener("resize", handleScreenSize)
  }, [])
  



  return (
    <main>
      <Navbar screenSize={screenSize} /> 
      {
        <Hero screenSize={screenSize} />
      }     
      {
        <StaticSection 
          sectionName="news"
          dataObject={mainData.news}
          screenSize={screenSize}
        />
      }
      {
        <StaticSection 
          sectionName="builds"
          dataObject={mainData.builds}
        />
      }
      {
        <Services screenSize={screenSize}/>
      }
      {
        <StaticSection 
            sectionName="ownership"
            dataObject={mainData.ownership}
        />
      }
      {
        screenSize === "desktop" && <Models />
      }
      {
        <Footer screenSize={screenSize}/>
      }
    </main>
  )
}
        
