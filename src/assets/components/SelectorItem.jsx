import React, {useState, useEffect} from "react"




export default function SelectorOption({id, isActive, isPaused, selectHero}) {
    return (
        <div className="hero__option" onClick={() => {selectHero(id)}}>
            
            {
                !isActive ? id : 
                    !isPaused ? <i className="fa-sharp fa-solid fa-pause"></i> : 
                        <i className="fa-sharp fa-solid fa-play"></i>
            }
            {
                isActive &&
                <svg /*onClick={e => e.stopPropagation()}*/ >

                    <circle cx="18" cy="18" r="18"></circle>
                    <circle cx="18" cy="18" r="18"></circle>
                </svg>

            }
        </div>
    )
}