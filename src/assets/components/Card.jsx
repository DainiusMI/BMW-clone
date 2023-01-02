import React from "react";


export default function Card(props) {
    const {id, title, description, image, link} = props.card
    console.log(title)
    return (
        <div 
            id={`card-${id}`}
            className="card" 
            style={{backgroundImage: `url(${image})`}}   
        >
            <p className="card__title">{title}</p>
            <p className="card__description">{description}</p>
            <a href={link} className="card__link">Learn More</a>
        </div>
    )
}