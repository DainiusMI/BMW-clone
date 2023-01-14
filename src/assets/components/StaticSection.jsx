import React, { useState, useEffect } from "react";

export default function StaticSection({screenSize, sectionName, dataObject}) {
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