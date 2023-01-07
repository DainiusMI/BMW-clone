import React, {useState, useEffect} from "react";


import bmw_diff from "./Footer/the_bmw_difference.json"
import exp_and_part from "./Footer/experiance_and_partnership.json"
import shopping_tools from "./Footer/online_shopping_tools.json"
import finance_and_incentives from "./Footer/finance_and_incentives.json"
import company_info from "./Footer/company_info.json"


//<FooterElement title={exp_and_part.title} data={exp_and_part.data}/>

export default function Footer() {

    const icon = "fa-solid fa-arrow-up-right-from-square"
    const [footerState, setFooterState] = useState({
        isMobile: true,
        isExpanded: false,
    })

    const isDesktop = true

    return (
        <footer className="footer">
            
            <div className="inner__footer">
                <div className="footer__section">
                    <p className="section__title">DISCOVER <hr /></p>
                    <div className="elements__container">
                        <FooterElement id={bmw_diff.id} title={bmw_diff.title} data={bmw_diff.data} footerState={footerState} setFooterState={setFooterState} />
                        <FooterElement id={exp_and_part.id} title={exp_and_part.title} data={exp_and_part.data} footerState={footerState} setFooterState={setFooterState}/>

                    </div>
                </div>

                <div className="footer__section">
                    <p className="section__title">BUY <hr /></p>
                    <div className="elements__container">
                        <FooterElement id={shopping_tools.id} title={shopping_tools.title} data={shopping_tools.data} footerState={footerState} setFooterState={setFooterState}/>
                        <FooterElement id={finance_and_incentives.id} title={finance_and_incentives.title} data={finance_and_incentives.data} footerState={footerState} setFooterState={setFooterState}/>

                    </div>
                </div>
                {
                    isDesktop === false &&
                        <FooterElement id={company_info.id} title={company_info.title} data={company_info.data} footerState={footerState} setFooterState={setFooterState}/>
                }
            </div>

            <div className="inner__footer">
                <div className="text__container">
                    {
                        isDesktop === true &&
                            <FooterElement id={company_info.id} title={company_info.title} data={company_info.data} footerState={footerState} setFooterState={setFooterState}/>
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




function FooterElement({id, title, data, footerState, setFooterState}) {

    const isDesktop = true

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
                    isDesktop === false &&  
                        <i className={  
                            footerState.tabName === id ?
                                "fa-solid fa-minus" :
                                "fa-solid fa-plus"    
                        }/>
                }

            </div>
            {
                isDesktop === true &&
                <ul className="item__list">
                    {
                        data.map(item => {
                            return item.text !== "" ? 
                                <li key={`${id}_${item.id}`} href="">{item.text} {item.hasIcon && <i className="fa-solid fa-arrow-up-right-from-square"/>}</li> :
                                <hr />
                        }) 
                    }
                </ul>

                    
            }
            {
                isDesktop === false && footerState.tabName === id &&
                    <ul className="item__list">
                        {
                            footerState.tabName === id && data.map(item => {
                                return item.text !== "" ? 
                                    <li key={item.id}>{item.text} {item.hasIcon && <i className="fa-solid fa-arrow-up-right-from-square"/>}</li> :
                                    <hr />
                            })
                        } 
                    </ul>
            }
        </div>
    )
}

