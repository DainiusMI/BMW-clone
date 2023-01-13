import React, {useState, useEffect} from "react";
import Selector from "./Selector";


export default function DynamicSection({screenSize, sectionName, item, elementState, setElementState, activeElement, setActiveElement}) {
    const imageName = `${sectionName}-${item.id}-${screenSize}.jpg`
    return (
        <div 
            key={`${sectionName}__${item.id}`}
            className={`dynamic__section ${sectionName} ${sectionName}__${item.id}`}
            style={
                {"--image-bg": `url("../${sectionName}/${imageName}")`}
            }
        >
            <h1 className={`${sectionName}__title title`}>{item.title}</h1>
            <p className={`${sectionName}__text text`}>{item.text}</p>
            <div className="button__row">
                {
                    item.buttons.map((button, idx) => {
                        return <button 
                                    key={`${sectionName}__button${idx}`}
                                    className={button.className}
                                >{button.text}</button>
                    })
                }
            </div>
            {
                item.slogan.length > 0 &&
                <div className="slogan__container">
                    {
                        item.slogan.map((text, idx) => {
                            return <p 
                                        key={`${sectionName}__slogan${idx}`}
                                        className="slogan__text"
                                    >{text}</p>
                        })
                    }
                </div>
            }
            <Selector 
                state={elementState}
                setState={setElementState}
                active={activeElement}
                setActive={setActiveElement}
            />
        </div>
    )
}