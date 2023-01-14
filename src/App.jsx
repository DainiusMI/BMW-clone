import React, { useState, useEffect } from "react";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Services from "./assets/components/Services";
import Models from "./assets/components/ModelsRow";
import Footer from "./assets/components/Footer";

import mainData from "./assets/mainData.json"



export default function App() {
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
      <Navbar screenSize={screenSize}/>
      <Hero screenSize={screenSize}/>

      <StaticSection 
        sectionName="news"
        dataObject={mainData.news}
        screenSize={screenSize}
      />

      <StaticSection 
        sectionName="builds"
        dataObject={mainData.builds}
      />




      <Services screenSize={screenSize}/>

      <StaticSection 
          sectionName="ownership"
          dataObject={mainData.ownership}
      />

      {screenSize === "desktop" && <Models />}

      <Footer screenSize={screenSize}/>
    </main>
  )
}
        
function StaticSection({screenSize, sectionName, dataObject}) {
  const icon = "fa-solid fa-arrow-up-right-from-square"
  

    return (
      <div className={`static__section ${sectionName}__section`}>
        {
          dataObject.section_title !== undefined &&
          <h3 className={`section__title `}>{dataObject.section_title}</h3>
          }
        {
          dataObject.data.map(item => {
            const imageName = typeof item.image === "string" ? item.image : item.image[screenSize]
            return (
              <div
                key={`${sectionName}-${item.id}`} 
                className={`card__default ${sectionName}__card`}>
                <div 
                  className={`card__image ${sectionName}__image`}  
                  style={{"--image-bg": `url("../${sectionName}/${imageName}")`}}
                />
                  <div className={item.text !== "" ? "card__title bold" : "card__title"}>{item.title}</div>
                {
                  item.text !== "" &&
                    <div className="card__text">{item.text}</div>
                }
                <a 
                  href="" 
                  className={`card__link ${sectionName}-link`}
                >{item.link.text} {item.link.icon && <i className={icon}/>}</a>
              </div>
            )
          })
        }
        {
          dataObject.button !== undefined &&
          <button className={dataObject.button.className}>{dataObject.button.text}</button>
        }
      </div>
    )

}