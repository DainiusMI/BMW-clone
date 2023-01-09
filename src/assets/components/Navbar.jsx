import React from "react";
import { useState, useEffect } from "react";



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

    /*        
        <nav 
            id="navbar" 
            className={navbarState.isHome ? "navbar" : navbarState.isMinmized ? "navbar light minimized" : "navbar light"} 
            onClick={handleMaximize}
            onMouseLeave={handleMinimize}
        >
    */
}


function resizeNavbar() {

}



export default function Navbar({screenSize}) {

    const [scrollState, setScrollState] = React.useState({
        position: null,
        direction: ""
    })
    // track users scrolling
    React.useEffect(() => {
        const handleScroll = () => setScrollState(prevState => ({
            position: window.scrollY,
            direction: prevState.position === null ? "down" : 
                prevState.position < window.scrollY ? "down" : "up"
        }))
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, [])

    const [navbarState, setNavbarState] = React.useState({
        className: "navbar",
        openedTabName: null,
        isHome: true,
        isMinmized: false,
        isLight: false
    })
    // set "HOME" position DESKTOP SCRENNS ONLY
    React.useEffect(() => {
        if (screenSize === "desktop") {
            if (scrollState.position === null || window.scrollY === 0) {
                setNavbarState(prevState => ({
                    ...prevState,
                    isHome: true,
                    isMinmized: false,
                    isLight: false
                }))
            }
        }

    }, [scrollState.position])
    React.useEffect(() => {
        if (screenSize === "desktop") {
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
        }
    }, [scrollState.direction])

    function navbarClassName() {
        let name = "navbar"
        if (screenSize === "desktop") {
            name += " desktop"
        }
        if (navbarState.isMinmized) {
            name += " minimized"
        }
        if (navbarState.isLight) [
            name += " light"
        ]
        if (hamburgerState.isExpanded) {
            name += " hamburg_opened"
        }
        return name
    }
    function openNavbarTab(event) {
        const tabID = event.target.id
        setNavbarState(prevState => ({
            ...prevState,
            openedTabName: prevState.openedTabName === tabID ? null : tabID
        }))
    }
    // expand navbar onClick DESKTOP SCRENNS ONLY
    function handleMaximize() {
        setNavbarState(prevState => ({
            ...prevState,
            isMinmized: false
        }))
    }
    // collapsee on off hover DESKTOP SCRENNS ONLY
    function handleMinimize() {
        navbarState.isHome === false &&
        setNavbarState(prevState => ({
            ...prevState,
            isMinmized: true
        }))
    }



    const [hamburgerState, setHamburgerState] = useState({
        isExpanded: false
    })
    function expandHamburger() {
        setHamburgerState(prevState => ({
            ...prevState,
            isExpanded: !prevState.isExpanded
        }))
    }



    return (
        <div className="header">
            <nav 
                className={navbarClassName()}  
                onClick={handleMaximize}
                onMouseLeave={handleMinimize}
                >
               <div className="navbar__left__side">
                   <div className="navbar__logo"/>
                   {
                        screenSize === "desktop" &&
                            navbarJSON.data.left.map(item => {
                                return <NavbarLeftSideItem 
                                            key={item.id}
                                            item={item}
                                            screenSize={screenSize}
                                            navbarState={navbarState}
                                            openNavbarTab={openNavbarTab}
                                />
                            })
                   }
               </div>
               <div className="navbar__right__side">
                    {
                        screenSize === "desktop" ?
                            navbarJSON.data.right.map(item => <NavbarRightSideItem key={item.id} item={item} openNavbarTab={openNavbarTab}/>) :
                            hamburgerState.isExpanded ?
                                <NavbarRightSideItem item={navbarJSON.data.right[1]} openNavbarTab={openNavbarTab}/> :
                                <NavbarRightSideItem item={navbarJSON.data.right[0]} openNavbarTab={openNavbarTab}/>
                    }
                    {
                        screenSize !== "desktop" && 
                        <div className="hamburger" onClick={expandHamburger}>
                            <i className={
                                hamburgerState.isExpanded ? 
                                    "humbuger__icon fa-sharp fa-solid fa-xmark" : 
                                    "humbuger__icon fa-sharp fa-solid fa-bars"
                            }/>
                        </div>
                    }
                </div>
            </nav>
            {
                hamburgerState.isExpanded &&
                <Hamburger 
                    screenSize={screenSize}
                    navbarState={navbarState}
                    openNavbarTab={openNavbarTab}    
                />
            }
        </div>
    )
}





function NavbarLeftSideItem({item, screenSize, navbarState, openNavbarTab}) {
    function handleChevron() {
        let chevron = "fa-sharp fa-solid fa-chevron-"
        if (screenSize === "desktop") {
            navbarState.openedTabName === item.id ?
            chevron += "up" : chevron +="down"
        }
        else {
            navbarState.openedTabName === item.id ?
            chevron += "left" : chevron +="right"
        }
        return chevron
    }
    return (
        <div 
            id={item.id} 
            className={screenSize === "desktop" ? "navbar__item" : "hamburger__item"} 
            onClick={openNavbarTab}>
                <p className="navbar__text">{item.title}</p>
                {
                    item.hasIcon &&
                    <i className={handleChevron()}/>
                }
        </div>
    )
}

function NavbarRightSideItem({item, openNavbarTab}) {
    return (
        <div id={item.id} className="navbar__item" onClick={openNavbarTab}>
            <i className={item.className}/>
            {item.name !== "" && <p className="navbar__text">{item.name}</p>}
        </div>
    )
}



function Hamburger({screenSize, navbarState, openNavbarTab}) {

    return (
        <div className="hamburger__menu">
                   {
                        navbarJSON.data.left.map(item => {
                            return <NavbarLeftSideItem 
                                        key={item.id}
                                        item={item}
                                        screenSize={screenSize}
                                        navbarState={navbarState}
                                        openNavbarTab={openNavbarTab}
                            />
                        })
                   }
        </div>
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