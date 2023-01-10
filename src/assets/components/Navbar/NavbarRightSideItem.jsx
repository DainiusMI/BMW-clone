import React, {useState, useEffect} from "react"


export default function NavbarRightSideItem({item, openNavbarTab}) {
    return (
        <div id={item.id} className="navbar__item" onClick={openNavbarTab}>
            <i className={item.className}/>
            {item.name !== "" && <p className="navbar__text">{item.name}</p>}
        </div>
    )
}