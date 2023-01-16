import React, { useState, useEffect } from "react";

import NavbarLeftSideItem from "./Navbar/NavbarLeftSideItem";
import NavbarRightSideItem from "./Navbar/NavbarRightSideItem";

import Hamburger from "./Navbar/Hamburger";
import DefaultTab from "./Navbar/DefaultTab";
import ModelsTab from "./Navbar/ModelsTab";

import navbarJSON from "./Navbar/navbar.json" 





export default function Navbar({screenSize, navbarState, setNavbarState, hideMainContent}) {

    // track users horizontal scrolling for navbar graphics
    const [scrollState, setScrollState] = React.useState({
        position: null,
        memorized_position: null,
        tabOpened: false,
        direction: ""
    })
    React.useEffect(() => {
        if (screenSize === "desktop") {
            const handleScroll = () => setScrollState(prevState => ({
                ...prevState,
                position: window.scrollY,
                direction: prevState.position === null ? "down" : 
                    prevState.position < window.scrollY ? "down" : "up"
            }))
            document.addEventListener('scroll', handleScroll);
            return () => document.removeEventListener('scroll', handleScroll);
        }
    }, [screenSize])
    // check if page is at "HOME" position 
    useEffect(() => {
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
    // update users scrolling direction
    useEffect(() => {
    if (screenSize === "desktop") {
        if (scrollState.direction === "down") {
            setNavbarState(prevState => ({
                ...prevState,
                isHome: false,
                isMinmized: scrollState.tabOpened ? false : true,
                isLight: true
            }))
        }
        else if (scrollState.direction === "up") {
            setNavbarState(prevState => ({
                ...prevState,
                isHome: false,
                isMinmized: false,
                isLight: true
            }))
        }
    }
    }, [scrollState.direction])

    // momorizing the position tab was opened at
    useEffect(() => {
        if (navbarState.openedTabName !== null) {
            setScrollState(prevState => ({
                ...prevState,
                memorized_position: window.scrollY,
                tabOpened: !prevState.tabOpened
            }))
        }
        else {
            setScrollState(prevState => ({
                ...prevState,
                tabOpened: !prevState.tabOpened
            }))
        }
    }, [navbarState.openedTabName])
    // returning body to memorized position after tab is closed
    useEffect(() => {
        if (scrollState.tabOpened === true) {
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollState.memorized_position}px`;
        }
        else {
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollState.memorized_position || '0'));
        }
    }, [scrollState.tabOpened])
    
    function navbarClassName() {
        let name = "navbar"
        if (screenSize === "desktop") {
            name += " desktop"
            if (navbarState.openedTabName === "models") {
                name += " hidden"
            }
        }
        if (navbarState.isMinmized && scrollState.tabOpened === false) {
            name += " minimized"
        }
        if (navbarState.isLight || scrollState.tabOpened) [
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
        if (screenSize === "desktop") {
            setNavbarState(prevState => ({
                ...prevState,
                isMinmized: false
            }))
        }
    }
    // collapsee on off hover DESKTOP SCRENNS ONLY
    function handleMinimize() {
        navbarState.isHome !== false ?
            null :
            //navbarState.openedTabName &&
                setNavbarState(prevState => ({
                    ...prevState,
                    isMinmized: scrollState.tabOpened ? false : true
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
        setNavbarState(prevState => ({
            ...prevState,
            openedTabName: hamburgerState.isExpanded ? null : prevState.openedTabName
        }))
    }



    function goBack() {
        setNavbarState(prevState => ({
            ...prevState,
            openedTabName: null
        }))
    }


    function isDefaultTab() {
        const defaultTabList = ["shopping", "owners"]
        return defaultTabList.includes(navbarState.openedTabName) ? true : false
    }

    return (
        <div className={ screenSize === "desktop" ? "header fixed" : "header" }>
            <nav 
                className={navbarClassName()}  
                onClick={handleMaximize}
                onMouseLeave={handleMinimize}
                >
               <div className="navbar__left__side">
                   <div className="navbar__logo"/>
                   {
                        screenSize === "desktop" && navbarState.isMinmized === false ?
                            navbarJSON.data.left.map(item => {
                                return <NavbarLeftSideItem 
                                            key={item.id}
                                            item={item}
                                            screenSize={screenSize}
                                            navbarState={navbarState}
                                            openNavbarTab={openNavbarTab}
                                />
                            })
                            :
                            screenSize === "desktop" &&
                                <p className="navbar__slogan">The <span className="slogan__bold">Ultimate</span> Driving Machine®</p>
                   }
               </div>
               <div className="navbar__right__side">
                    {
                        screenSize === "desktop" ?
                            navbarState.isMinmized === false ?
                                navbarJSON.data.right.map(item => <NavbarRightSideItem key={item.id} item={item} openNavbarTab={openNavbarTab}/>) :
                                <i className= "humbuger__icon fa-sharp fa-solid fa-bars" />                            
                            
                            :
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
                navbarState.openedTabName === null ?
                    hamburgerState.isExpanded  && screenSize !== "desktop" &&
                    <Hamburger 
                        screenSize={screenSize}
                        navbarState={navbarState}
                        setNavbarState={setNavbarState}
                        openNavbarTab={openNavbarTab}
                        
                        navbarJSON={navbarJSON}
                    />
                    : null
            }
            {

                isDefaultTab() === true && 
                    <DefaultTab
                        tabName={navbarState.openedTabName}
                        dataObject={navbarJSON.tabs[navbarState.openedTabName]}
                        screenSize={screenSize} 
                        goBack={goBack} 
                    />
        
            }
            {
                navbarState.openedTabName === "models" && 
                    <ModelsTab 
                        screenSize={screenSize} 
                        goBack={goBack} 
                    />
            }
        </div>
    )
}



