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
        title: "EMBODY THE MAXIMUM",
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

    const [heroState, setHeroState] = React.useState(0)


    return (
            <div className={`hero hero__${heroState}`}>

                <div className="hero__left">
                    <h1 className="hero__title">{heroData[heroState].title}</h1>
                    <p className="hero__text">{heroData[heroState].text}</p>
                    <div className="hero__buttons">
                        {
                            heroData[heroState].buttons.map((button, idx) => {
                                return <button key={idx}>{button}</button>
                            })
                        }
                    </div>
                </div>


                {
                    heroData[heroState].slogan !== [] && 
                    <div className="hero__right">
                        {
                            heroData[heroState].slogan.map((slogan, idx) => {
                                return <p key={idx} className="slogan__text">{slogan}</p>
                            })
                        }
                    </div>
                }
                
                <HeroSelector setHeroState={setHeroState} />
            </div>
    )
}


function HeroSelector(props) {
    const {setHeroState} = props

    function handleHero(event) {
        setHeroState(event.target.dataset.value)
    }
    return (
        <div className="hero__selector">
            {
                heroData.map((element, idx) => {
                    return <div 
                                key={element.id}
                                className="hero__option"
                                data-value={idx}
                                onClick={handleHero}
                            >
                            {element.id}</div>
                })
            }
        </div>
    )
}