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



    return (
        <footer className="footer">
            
            <div className="inner__footer">
                <div className="footer__section">
                    <p className="section__title">DISCOVER ----</p>
                    <div className="elements__container">
                        <FooterElement id={bmw_diff.id} title={bmw_diff.title} data={bmw_diff.data} footerState={footerState} setFooterState={setFooterState} />
                        <FooterElement id={exp_and_part.id} title={exp_and_part.title} data={exp_and_part.data} footerState={footerState} setFooterState={setFooterState}/>

                    </div>
                </div>

                <div className="footer__section">
                    <p className="section__title">BUY ----</p>
                    <div className="elements__container">
                        <FooterElement id={shopping_tools.id} title={shopping_tools.title} data={shopping_tools.data} footerState={footerState} setFooterState={setFooterState}/>
                        <FooterElement id={finance_and_incentives.id} title={finance_and_incentives.title} data={finance_and_incentives.data} footerState={footerState} setFooterState={setFooterState}/>

                    </div>
                </div>
                {
                    <FooterElement id={company_info.id} title={company_info.title} data={company_info.data} footerState={footerState} setFooterState={setFooterState}/>
                }
            </div>

            <div className="inner__footer">


            </div>
        </footer>
    )
}


function FooterElement({id, title, data, footerState, setFooterState}) {

    function handleExpand(event) {
        const targetedTabName = event.target.id
        setFooterState(prevState => ({
            ...prevState,
            tabName: prevState.tabName === targetedTabName ? "" : targetedTabName,
            })
        )
    }
    return (
        <div className="footer__element">
            <div id={id} className="title__row" onClick={handleExpand}>
                <div className="element__title">{title}</div>
                { 
                    footerState.tabName === id ? 
                        <i className="fa-solid fa-minus"/> : 
                        <i className="fa-solid fa-plus"/>
                }
            </div>
            <div className="item__list">
                {
                    footerState.tabName === id && data.map(item => {
                        return <a key={`${id}_${item.id}`} href="">{item.text} {item.hasIcon && <i className="fa-solid fa-arrow-up-right-from-square"/>}</a>
                    })
                } 
            </div>
        </div>
    )
}


//<a key={`company-info-${item.id}`} href={item.link}>{item.text} {item.hasIcon && <i className={icon}/>}</a>