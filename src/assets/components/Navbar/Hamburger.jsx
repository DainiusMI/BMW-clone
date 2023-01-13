import React, {useState, useEffect} from "react"
import NavbarLeftSideItem from "./NavbarLeftSideItem"
import navbarJSON from "./navbar.json"

export default function Hamburger({screenSize, navbarState, setNavbarState, openNavbarTab}) {
    const [searchState, setSearchState] = useState({
        search_input: "",
        search_expanded: false
    })
    function expandSearch() {
        setSearchState(prevState => ({
            search_input: "",
            search_expanded: true
        }))
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
            <hr />
            {
                searchState.search_expanded === false &&
                <div 
                className="search__container" 
                onClick={expandSearch}>
                    <i className={navbarJSON.data.right[2].className} />
                    <div className="search__text">Search</div>
                </div>
            }
            {
                searchState.search_expanded &&
                <HamburgerSearch searchState={searchState} setSearchState={setSearchState} expandSearch={expandSearch} />
            }
        </div>
    )
}


function HamburgerSearch({searchState, setSearchState}) {

    function handleSearchInput(event) {
        setSearchState(prevState => ({
            ...prevState,
            search_input: event.target.value
        }))
    }
    function cancelSearch() {
        setSearchState({
            search_input: "",
            search_expanded: false
        })
    }
    return (
        <div 
        className="search__container" >
            <i className={navbarJSON.data.right[2].className} />
            <input 
                className="search__input" 
                type="text" 
                placeholder="Search" 
                onChange={handleSearchInput}
                value={searchState.search_input}
                />
            {
                <button 
                    className="cancel__button" 
                    onClick={cancelSearch}
                >Cancel</button>
            }
        </div>
    )
}