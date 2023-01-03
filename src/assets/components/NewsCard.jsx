import React from "react";


export default function Card({id, title, description, link}) {

    return (
        <div 
            id={`card-${id}`}
            className="card" 
        >
            <p className="card__title">{title}</p>
            <p className="card__description">{description}</p>
            <a href={link} className="card__link">Learn More</a>
        </div>
    )
}