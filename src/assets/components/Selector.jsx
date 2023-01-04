import React, {useState, useEffect} from "react"
import SelectorOption from "./SelectorItem"



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



export default function Selector({state, setState, active, setActive}) {

    useInterval(() => {
        if (active.isPaused === false) {
            setActive(prevState => ({
                ...prevState,
                id: prevState.id === 4 ? 1 : prevState.id + 1 
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
        <div className="hero__selector">
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



