import React from "react";





export default function OwnershipCard({id, title, text, image, button, hasIcon}) {

    return (
        <div className="ownership__card">
            <div 
                className="card__image" 
                style={{backgroundImage: `url(${image})`}}
            />
            <div className="card__title">{title}</div>
            <div className="card__text">{text}</div>
            <button>{button}{hasIcon && <i className="fa-sharp fa-solid fa-arrow-up-right"/>}</button>
        </div>
    )
}