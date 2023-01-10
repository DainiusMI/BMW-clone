import React, { useState, useEffect } from "react";


import navbarJSON from "./Navbar/navbar.json" 
import modelsJSON from "./Navbar/models.json"




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
    useEffect(() => {
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


    function goBack() {
        setNavbarState(prevState => ({
            ...prevState,
            openedTabName: null
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
                navbarState.openedTabName === null ?
                    hamburgerState.isExpanded  &&
                    <Hamburger 
                        screenSize={screenSize}
                        navbarState={navbarState}
                        setNavbarState={setNavbarState}
                        openNavbarTab={openNavbarTab}    
                    />
                    : null
            }
            {
                navbarState.openedTabName === "models" && <ModelsTab goBack={goBack} hamburgerState={hamburgerState}/>
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
            onClick={openNavbarTab}
            >
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




function Hamburger({screenSize, navbarState, setNavbarState, openNavbarTab}) {
    function goBack() {
        setNavbarState(prevState => ({
            ...prevState,
            openedTabName: null
        }))
    }
    function switchTabs(arg) {
        switch(arg) {
            case "models": return <ModelsTab goBack={goBack}/>
    
        }
    }
    return (
        <div className="hamburger__menu">
            {
                navbarState.openedTabName === null &&
                navbarJSON.data.left.map(item => {
                    return <NavbarLeftSideItem 
                                key={item.id}
                                item={item}
                                screenSize={screenSize}
                                navbarState={navbarState}
                                openNavbarTab={openNavbarTab}
                    />
                })
                //: switchTabs(navbarState.openedTabName)
            }

        </div>
    )
}


function ModelsTab({goBack, hamburgerState}) {
    const [category, setCategory] = useState("all_models")
    function filterModels() {
        return modelsJSON.data.models_list.filter(model => model.category.includes(category))
    }
    function pathToImage() {
        
    }
    console.log(filterModels())
    return (
        <div className="models__tab navbar__tab">
            <div className="navigate__back" onClick={goBack}>
                <i className="fa-sharp fa-solid fa-chevron-left"/>
                <p className="tab__name">{modelsJSON.title}</p>
            </div>
            {
                filterModels().map(model => {
                    return (
                        <div
                            key={model.id} 
                            className="model__tab__card">
                                <p className="model__name">{model.name}</p>
                        </div>
                    )
                })

            }
        </div>
    )
}


