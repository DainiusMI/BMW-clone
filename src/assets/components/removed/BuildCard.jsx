import React from "react";


export default function({title, image, link}) {

    return (
        <div className="build__card">
            <div 
                className="card__image"
                style={{backgroundImage: `url(${image})`}}
            />
            <p className="card__title">{title}</p>
            <a className="card__link" href={link}>Start Designing</a>
        </div>
    )
}


