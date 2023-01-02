import React from "react";


const navbarItems = {
    left : [
        {
            name: "Models",
            hasIcon: false,
            isOpened: false
        },
        {
            name: "Build Your Own",
            hasIcon: false,
            isOpened: false
        },
        {
            name: "Shopping",
            hasIcon: true,
            isOpened: false
        },
        {
            name: "BMW Certified",
            hasIcon: false,
            isOpened: false
        },
        {
            name: "Owners",
            hasIcon: true,
            isOpened: false
        },
    ],
    right: [
        {
            name: "Choose your local BMW center",
            hasIcon: true,
            className: "fa-sharp fa-solid fa-location-dot",
        },
        {
            name: "My BMW",
            hasIcon: true,
            className: "fa-solid fa-user",
        },
        {
            name: "",
            hasIcon: true,
            className: "fa-solid fa-magnifying-glass",
        },
    ]
}


import logo from "../../../public/nav-logo.png"



export default function Navbar() {
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
        console.log(scrollState.direction)
    }, [scrollState.direction])

console.log(navbarState.isMinmized)

    


    return (
        <nav id="navbar" className={navbarState.isHome ? "navbar" : navbarState.isMinmized ? "navbar light minimized" : "navbar light"} >
            <div className="navbar__left">
                <div className="nav__logo" style={{backgroundImage: `url(${logo})`}}/>
                {   
                    navbarState.isMinmized === false ? 
                        navbarItems.left.map((item, idx) => <NavLeftItem key={idx} item={item} idx={idx} /> ) :
                        <p className="navbar__slogan">The <strong>Ultimate</strong> driving machine <span>©</span></p>
                }
            </div>
            <div className="navbar__right">
                {
                    navbarState.isMinmized === false ? 
                        navbarItems.right.map((item, idx) => <NavRightItem key={idx} item={item} />) :
                        <i className="fa-sharp fa-solid fa-bars"></i>
                }
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
            isOpened: prevState.hasIcon && !prevState.isOpened
        }))
    }
    return (
        <div className="left__item" onClick={henadleOpen}> 
            <p className="left__text">{itemState.name}</p>
            {itemState.hasIcon && <i className={itemState.isOpened ? "fa-sharp fa-solid fa-chevron-up" : "fa-sharp fa-solid fa-chevron-down"}></i>}
        </div>
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