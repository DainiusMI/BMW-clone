import React from "react";


const navbarItems = {
    left : [
        {
            name: "Models",
            downIcon: false,
            isOpened: false
        },
        {
            name: "Build Your Own",
            downIcon: false,
            isOpened: false
        },
        {
            name: "Shopping",
            downIcon: true,
            isOpened: false
        },
        {
            name: "BMW Certified",
            downIcon: false,
            isOpened: false
        },
        {
            name: "Owners",
            downIcon: true,
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
                    navbarItems.left.map((item, idx) => {
                        return <NavLeftItem key={idx} item={item} idx={idx} />
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

function NavLeftItem(props) {
    const {item} = props

    const [itemState, setItemState] = React.useState(item)

    function henadleOpen() {
        setItemState(prevState => ({
            ...prevState,
            isOpened: prevState.downIcon && !prevState.isOpened
        }))
    }
    return (
        <div className="left__item" onClick={henadleOpen}> 
            <p className="left__text">{itemState.name}</p>
            {itemState.downIcon && <i className={itemState.isOpened ? "fa-sharp fa-solid fa-chevron-up" : "fa-sharp fa-solid fa-chevron-down"}></i>}
        </div>
    )
}