import React, {useState, useEffect, useRef} from "react";

// 3rd party custom hook to replace setInterval
function useInterval(callback, delay) {
    const savedCallback = React.useRef();
  
    // Remember the latest callback.
    React.useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    React.useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
}


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
    const [activeHero, setActiveHero] = React.useState({
        id: 1,
        duration: 0,
        isPaused: false
    })
    const hero = heroState.filter(hero =>  hero.isActive)
    return (    
        hero?.map(hero => {
            return (
                <div 
                    key={hero.id}
                    className={`hero hero__${hero.id}`}
                    
                >
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

                    {hero.slogan.length > 0 && 
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

                        activeHero={activeHero}
                        setActiveHero={setActiveHero}
                    />
                </div>
            )
        })
    )
}






function HeroSelector(props) {
    const {heroState, setHeroState, activeHero, setActiveHero} = props

    useInterval(() => {
        if (activeHero.isPaused === false) {
            setActiveHero(prevState => ({
                ...prevState,
                id: prevState.id === 4 ? 1 : prevState.id + 1 
            }))
        }
    }, 5000)


    React.useEffect(() => {
        const changeHero = heroState.map(hero => {
            return hero.id == activeHero.id ? 
                {...hero, isActive: true} :
                {...hero, isActive: false}
        })
        setHeroState(changeHero)

    }, [activeHero.id])


    function selectHero(id) {
        setActiveHero(prevStata => ({
            id: parseInt(id),
            duration: prevStata.id == id ? prevStata.duration : 0,
            isPaused: prevStata.id == id ? !prevStata.isPaused : false
        }))
    }

    return (
        <div className="hero__selector">
            {
                heroState.map(hero => {
                    return <HeroOption key={hero.id} id={hero.id} isActive={hero.isActive} isPaused={activeHero.isPaused} selectHero={selectHero} />
                })
            }
        </div>
    )
}




function HeroOption({id, isActive, isPaused, selectHero}) {

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