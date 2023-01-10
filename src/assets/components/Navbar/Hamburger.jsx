import React, {useState, useEffect} from "react"
import NavbarLeftSideItem from "./NavbarLeftSideItem"
import navbarJSON from "./navbar.json"

export default function Hamburger({screenSize, navbarState, setNavbarState, openNavbarTab}) {
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