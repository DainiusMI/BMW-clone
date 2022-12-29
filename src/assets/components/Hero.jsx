import React from "react";


const heroData = [
    {   
        id: 1,
        title: "PACK A SURPIZE THIS SEASON",
        text: "The BMW Road Home Sales Event offers a credit of up to $3.250 on select BMW models - now through Janury 3rd",
        buttons: ["Offers Details", "Build Your Own"],
        slogan: [],
        isActive: true
    },
    {   
        id: 2,
        title: "EMBODY THE MAXIMUM",
        text: "THE FIRST EVER BMW XM",
        buttons: ["Learn More", "Pre-Order"],
        slogan: ["The", "Ultimate", "Driving Machine ©"],
        isActive: false
    },
    {   
        id: 3,
        title: "AS ELECTRIC AS YOU",
        text: "iX shown on left, i4 shown on the right",
        buttons: ["Explore the iX", "Explore the i4"],
        slogan: ["The Ultimate", "Electric", "Driving Machine"],
        isActive: false
    },
    {   
        id: 4,
        title: "THE M2",
        text: "DISCOVER THE 2023 BMW M2 COUPE",
        buttons: ["Build Yours", "Learn More"],
        slogan: ["The", "Ultimate", "Driving Machine ©"],
        isActive: false
    }
]


export default function Hero() {

    const [heroState, setHeroState] = React.useState(heroData)

    return (    
                heroState.filter(hero => hero.isActive).map(hero => {
                    return (
                        <div key={hero.id} className={`hero hero__${hero.id}`}>
                            <div className="hero__left">
                                <h1 className="hero__title">{hero.title}</h1>
                                <p className="hero__text">{hero.text}</p>
                                <div className="hero__buttons">
                                    {
                                        hero.buttons.map((button, idx) => {
                                            return <button key={idx}>{button}</button>
                                        })
                                    }
                                </div>
                            </div>

                            {hero.slogan !== [] && 
                                <div className="hero__right">
                                {
                                    hero.slogan.map((slogan, idx) => {
                                        return <p key={idx} className="slogan__text">{slogan}</p>
                                    })
                                }
                                </div>
                            }
            
                            <HeroSelector 
                                heroState={heroState}
                                setHeroState={setHeroState}
                            />
                        </div>
                    )
                })
    )
}




function HeroSelector(props) {
    const {heroState, setHeroState} = props
    
    

    function handleHero(event) {
        const changeHero = heroState.map(hero => {
            return hero.isActive && hero.id != event.target.id ? 
                {...hero, isActive: false} : 
                hero.id == event.target.id ? 
                    {...hero, isActive: true} : hero
        })
        setHeroState(changeHero)

    }
    return (
        <div className="hero__selector">
            {
                heroData.map(element => {
                    return <div 
                                id={element.id}
                                key={element.id}
                                className="hero__option"
                                onClick={handleHero}
                            >   
                                {element.id}
                                {
                                    element.isActive && 
                                        <svg /*onClick={e => e.stopPropagation()}*/ >
                                            <circle cx="18" cy="18" r="18"></circle>
                                            <circle cx="18" cy="18" r="18"></circle>
                                        </svg>
                                }

                            </div>
                })
            }
        </div>
    )
}