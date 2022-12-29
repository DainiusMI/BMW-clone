import React from "react";

const leftItems = [
    {
        name: "Models",
        hasDropdown: false,
        isOpened: false
    },
    {
        name: "Build Your Own",
        hasDropdown: false,
        isOpened: false
    },
    {
        name: "Shopping",
        hasDropdown: true,
        isOpened: false
    },
    {
        name: "BMW Certified",
        hasDropdown: false,
        isOpened: false
    },
    {
        name: "Owners",
        hasDropdown: true,
        isOpened: false
    },
]

const navbarItems = {
    left : [
        {
            name: "Models",
            hasDropdown: false,
            isOpened: false
        },
        {
            name: "Build Your Own",
            hasDropdown: false,
            isOpened: false
        },
        {
            name: "Shopping",
            hasDropdown: true,
            isOpened: false
        },
        {
            name: "BMW Certified",
            hasDropdown: false,
            isOpened: false
        },
        {
            name: "Owners",
            hasDropdown: true,
            isOpened: false
        },
    ],
    right: [
        {
            name: "Choose your local BMW center",
            className: "fa-sharp fa-solid fa-location-dot",
        },
        {
            name: "My BMW",
            className: "fa-solid fa-user",
        },
        {
            name: "",
            className: "fa-solid fa-magnifying-glass",
        },
    ]
}

const logo = "../../../../public/nav-logo.png"


export default function Navbar() {


    return (
        <nav className="navbar">
            <div className="navbar__left">
                <img src={logo} className="nav__logo" />
                {
                    leftItems.map((item, idx) => {
                        return (
                            <div key={idx} className="left__item"> 
                                <p className="left__text">{item.name}</p>
                                {item.hasDropdown && <i className={item.isOpened ? "fa-sharp fa-solid fa-chevron-up" : "fa-sharp fa-solid fa-chevron-down"}></i>}
                            </div>
                        )
                    })
                }
            </div>
            <div className="navbar__right">
                {
                    
                }
                <div className="right__item">
                    <i className="fa-sharp fa-solid fa-location-dot" />
                    <p className="right__text">Choose your local BMW center</p>
                </div>
                <div className="right__item">
                    <i className="fa-solid fa-user"/>
                    <p className="right__text">My BMW</p>
                </div>
                <div className="navbar__search">
                    <i className="fa-solid fa-magnifying-glass" />
                </div>
            </div>
            
        </nav>
    )
}

<i class="fa-sharp fa-solid fa-chevron-down"></i>