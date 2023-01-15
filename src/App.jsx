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
  
  // track users interaction with navbar
  const [navbarState, setNavbarState] = React.useState({
    className: "navbar",
    openedTabName: null,
    isHome: true,
    isMinmized: false,
    isLight: false
  })

  function hideMainContent() {
    const hideInCase = ["models", "owners", "shopping"]
    return hideInCase.includes(navbarState.openedTabName) ? false : true
  }

  return (
    <main>
      <Navbar 
        screenSize={screenSize}
        navbarState={navbarState}
        setNavbarState={setNavbarState}
        hideMainContent={hideMainContent}
      /> 
      {
        navbarState.openedTabName !== "models" &&
        <Hero screenSize={screenSize}/>
      }     
      {
        hideMainContent() &&
        <StaticSection 
          sectionName="news"
          dataObject={mainData.news}
          screenSize={screenSize}
        />
      }
      {
        hideMainContent() &&
        <StaticSection 
          sectionName="builds"
          dataObject={mainData.builds}
        />
      }
      {
       hideMainContent() &&
        <Services screenSize={screenSize}/>
      }
      {
       hideMainContent() &&
        <StaticSection 
            sectionName="ownership"
            dataObject={mainData.ownership}
        />
      }
      {
        screenSize === "desktop" &&hideMainContent() &&
          <Models />
      }
      {
       hideMainContent() &&
        <Footer screenSize={screenSize}/>
      }
    </main>
  )
}
        
