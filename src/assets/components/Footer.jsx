import React, {useState, useEffect} from "react";


import bmw_diff from "./Footer/the_bmw_difference.json"
import exp_and_part from "./Footer/experiance_and_partnership.json"
import shopping_tools from "./Footer/online_shopping_tools.json"
import finance_and_incentives from "./Footer/finance_and_incentives.json"
import company_info from "./Footer/company_info.json"



export default function Footer({screenSize}) {

    const [footerState, setFooterState] = useState({
    })

    function returnFooterElement(arg) {
        return <FooterElement 
                    id={arg.id} 
                    title={arg.title} 
                    data={arg.data} 
                    footerState={footerState} 
                    setFooterState={setFooterState} 
                    screenSize={screenSize}                    
                />
    }

    return (
        <footer className="footer">
            
            <div className="inner__footer">
                <div className="footer__section">
                    <p className="section__title">DISCOVER </p>
                    <hr className={screenSize === "desktop" ? "long__hr" : "short__hr"}/>
                    <div className="elements__container">
                        {returnFooterElement(bmw_diff)}
                        {returnFooterElement(exp_and_part)}
                    </div>
                </div>

                <div className="footer__section">
                    <p className="section__title">BUY </p>
                    <hr className={screenSize === "desktop" ? "long__hr" : "short__hr"}/>
                    <div className="elements__container">
                        {returnFooterElement(shopping_tools)}
                        {returnFooterElement(finance_and_incentives)}                    
                    </div>
                </div>
                {
                    screenSize !== "desktop" && returnFooterElement(company_info)                        
                }
            </div>

            <div className="inner__footer">
                <div className="text__container">
                    {
                        screenSize === "desktop" && returnFooterElement(company_info)                          
                    }
                    <p className="copyrights">© 2023 BMW of North America, LLC. The BMW name, BMW logo, model names, and other trademarks are trademarks of BMW AG.</p>
                </div>

                <div className="socials__container">
                    <a href=""><i className="fa-brands fa-square-facebook"/></a>
                    <a href=""><i className="fa-brands fa-twitter"/></a>
                    <a href=""><i className="fa-brands fa-youtube"/></a>
                    <a href=""><i className="fa-brands fa-instagram"/></a>
                </div>
            </div>
        </footer>
    )
}




function FooterElement({id, title, data, footerState, setFooterState, screenSize}) {

    function handleExpand(event) {
        const targetedTab = event.target.id
        setFooterState(prevState => ({
            ...prevState,
            tabName: prevState.tabName === targetedTab ? "" : targetedTab,
            })
        )
    }
    
    return (
        <div className="footer__element">
            <div id={id} className="title__row" onClick={handleExpand}>
                <div className="element__title">{title}</div>
                {
                    screenSize !== "desktop" &&  
                        <i className={  
                            footerState.tabName === id ?
                                "fa-solid fa-minus" :
                                "fa-solid fa-plus"    
                        }/>
                }
            </div>
            {
                screenSize === "desktop" &&
                <ul className="item__list">
                    {
                        data.map(item => {
                            return item.text !== "" ? 
                                <li key={`${id}_${item.id}`} >{item.text} {item.hasIcon && <i className="fa-solid fa-arrow-up-right-from-square"/>}</li> :
                                <hr key={`hr${id}`} className="short__hr" />
                        }) 
                    }
                </ul>                   
            }
            {
                screenSize !== "desktop" && footerState.tabName === id &&
                    <ul className="item__list">
                        {
                            footerState.tabName === id && data.map(item => {
                                return item.text !== "" ? 
                                    <li key={`${id}_${item.id}`}>{item.text} {item.hasIcon && <i className="fa-solid fa-arrow-up-right-from-square"/>}</li> :
                                    <hr className="short__hr" />
                            })
                        } 
                    </ul>
            }
        </div>
    )
}

