import React, {useState, useEffect} from "react"

export default function NavbarLeftSideItem({item, screenSize, navbarState, openNavbarTab}) {
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