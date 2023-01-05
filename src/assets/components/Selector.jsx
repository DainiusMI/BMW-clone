import React, {useState, useEffect, useRef} from "react"



        // 3rd party custom hook to replace setInterval
        function useInterval(callback, delay) {
            const savedCallback = useRef();
        
            // Remember the latest callback.
            useEffect(() => {
            savedCallback.current = callback;
            }, [callback]);
        
            // Set up the interval.
            useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
            }, [delay]);
        }



export default function Selector({state, setState, active, setActive}) {

    const numberOfElements = state.length

    useInterval(() => {
        if (active.isPaused === false) {
            setActive(prevState => ({
                ...prevState,
                id: prevState.id === numberOfElements ? 1 : prevState.id + 1 
            }))
        }
    }, 5000)


    useEffect(() => {
        const changeHero = state.map(hero => {
            return hero.id == active.id ? 
                {...hero, isActive: true} :
                {...hero, isActive: false}
        })
        setState(changeHero)

    }, [active.id])


    function selectHero(id) {
        setActive(prevStata => ({
            id: parseInt(id),
            duration: prevStata.id == id ? prevStata.duration : 0,
            isPaused: prevStata.id == id ? !prevStata.isPaused : false
        }))
    }

    return (
        <div className="selector">
            {
                state.map(hero => {
                    return <SelectorOption 
                        key={hero.id} 
                        id={hero.id} 
                        isActive={hero.isActive} 
                        isPaused={active.isPaused} 
                        selectHero={selectHero} 
                    />
                })
            }
        </div>
    )
}



function SelectorOption({id, isActive, isPaused, selectHero}) {
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




