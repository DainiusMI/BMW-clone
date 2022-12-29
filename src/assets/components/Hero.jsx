import React from "react";


const heroData = [
    {   
        id: 1,
        title: "PACK A SURPIZE THIS SEASON",
        text: "The BMW Road Home Sales Event offers a credit of up to $3.250 on select BMW models - now through Janury 3rd",
        buttons: ["Offers Details", "Build Your Own"],
        slogan: [],
    },
    {   
        id: 2,
        title: "EMOBDY THE MAXIMUM",
        text: "THE FIRST EVER BMW XM",
        buttons: ["Learn More", "Pre-Order"],
        slogan: ["The", "Ultimate", "Driving Machine ©"],
    },
    {   
        id: 3,
        title: "AS ELECTRIC AS YOU",
        text: "iX shown on left, i4 shown on the right",
        buttons: ["Explore the iX", "Explore the i4"],
        slogan: ["The Ultimate", "Electric", "Driving Machine"],
    },
    {   
        id: 4,
        title: "THE M2",
        text: "DISCOVER THE 2023 M2 COUPE",
        buttons: ["Learn More", "Pre-Order"],
        slogan: ["The", "Ultimate", "Driving Machine ©"],
    },

]


export default function Hero() {

    return (

        <div className="hero hero__1">
            <div className="hero__left">
                <h1>PACK A SURPIZE THIS SEASON</h1>
                <p>The BMW Road Home Sales Event offers a credit of up to $3.250 on select BMW models - now through Janury 3rd</p>
                <div className="hero__buttons">
                    <button>Offers Details</button>
                    <button>Build Your Own</button>
                </div>
            </div>
            <div className="hero__right">
                <div>THE BMW</div>
                <div className="highlight">ROAD HOME</div>
                <div>SALES EVENT</div>
            </div>
        </div>
    )
}