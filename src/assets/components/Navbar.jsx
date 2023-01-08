import React from "react";



import navbarJSON from "./Navbar/navbar.json"
import NavbarModels from "./Navbar/NavbarModels";



function priorFunctionality() {
    const [navbarState, setNavbarState] = React.useState({
        isHome: true,
        isMinmized: false,
        isLight: false
    })

    const [scrollState, setScrollState] = React.useState({
        position: null,
        direction: ""
    })

    // general template of this effect is from 3rd party
    React.useEffect(() => {
        const handleScroll = () => setScrollState(prevState => ({
            position: window.scrollY,
            direction: prevState.position === null ? "down" : 
                prevState.position < window.scrollY ? "down" : "up"
        }))
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);

    }, [])

    // set "HOME" position
    React.useEffect(() => {
        if (scrollState.position === null || window.scrollY === 0) {
            setNavbarState({
                isHome: true,
                isMinmized: false,
                isLight: false
            })
        }
 
    }, [scrollState.position])
    React.useEffect(() => {
        if (scrollState.direction === "down") {
            setNavbarState({
                isHome: false,
                isMinmized: true,
                isLight: true
            })
        }
        else if (scrollState.direction === "up") {
            setNavbarState({
                isHome: false,
                isMinmized: false,
                isLight: true
            })
        }
    }, [scrollState.direction])

    // expand onClick
    function handleMaximize() {
        setNavbarState(prevState => ({
            ...prevState,
            isMinmized: false
        }))
    }
    // collapsee on off hover
    function handleMinimize() {
        !navbarState.isHome &&
        setNavbarState(prevState => ({
            ...prevState,
            isMinmized: true
        }))
    }


    /*        
        <nav 
            id="navbar" 
            className={navbarState.isHome ? "navbar" : navbarState.isMinmized ? "navbar light minimized" : "navbar light"} 
            onClick={handleMaximize}
            onMouseLeave={handleMinimize}
        >
    */
}


export default function Navbar({screenSize}) {
    
    



    function navbarClassName() {
        let name = "navbar"
        screenSize === "desktop" && name.concat("desktop")                     

        return name
    }
    function renderRightSideItems() {
        function generateDOM(arr) {
            return (
                [arr].map(item => {
                    return(
                        <div className="navbar__item">
                            <i className={item.className}/>
                            {item.name !== "" && <p>{item.name}</p>}
                        </div>
                    )
                })
            )
        }

        if (screenSize !== "desktop") {
            return (
                <div className="navbar__right__side">
                    {generateDOM(navbarJSON.data.right[0])}
                    <i class="humbuger__menu fa-sharp fa-solid fa-bars" />
                </div>
            )
        }

    }

    return (
        <nav className={navbarClassName()}  >   
            <div className="navbar__left__side">
                <div className="navbar__logo"/>
                {

                }
            </div>
            {renderRightSideItems()}
        </nav>
    )
}



/*


function NavbarLeftItems(props, {screenSize}) {
    const {item} = props

    const [itemState, setItemState] = React.useState(item)

    function henadleOpen() {
        setItemState(prevState => ({
            ...prevState,
            isOpened: prevState.hasIcon && !prevState.isOpened
        }))
    }
    return (



    )
}





function NavRightItem(props) {
    const {name, className} = props.item
    return (
        <div className={name !== "" ? "right__item" : "navbar__search"}>
            <i className={className} />
            {name !== "" && <p className="right__text">{name}</p>}
        </div>
    )
}



*/