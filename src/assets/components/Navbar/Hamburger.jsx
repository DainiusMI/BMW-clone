import React, {useState, useEffect} from "react"
import NavbarLeftSideItem from "./NavbarLeftSideItem"


export default function Hamburger({screenSize, navbarState, setNavbarState, openNavbarTab, navbarJSON}) {
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