import React, {useState, useEffect} from "react";


import bmw_diff from "./Footer/the_bmw_difference.json"
import exp_and_part from "./Footer/experiance_and_partnership.json"
import shopping_tools from "./Footer/online_shopping_tools.json"
import finance_and_incentives from "./Footer/finance_and_incentives.json"
import company_info from "./Footer/company_info.json"


//<FooterElement title={exp_and_part.title} data={exp_and_part.data}/>

export default function Footer() {

    const icon = "fa-solid fa-arrow-up-right-from-square"
    const [footerState, setFooterState] = React.useState({
        isMobile: true,
        openedTab: "CompanyInfo"
    })


    return (
        <footer className="footer">
            
            <div className="inner__footer">
                <div className="footer__section">
                    <p className="section__title">DISCOVER ----</p>
                    <div className="elements__container">
                        <FooterElement title={bmw_diff.title} data={bmw_diff.data}/>

                    </div>
                </div>

                <div className="footer__section">
                    <p className="section__title">BUY ----</p>
                    <div className="elements__container">


                    </div>
                </div>
                {

                }
            </div>

            <div className="inner__footer">


            </div>
        </footer>
    )
}


function FooterElement({title, data}) {
    const isMobile = true

    const [elementState, setElementState] = useState({
        isExpanded: false
    })

    function handleExpand() {
        //setElementState(prevState => {isExpanded: !prevState.isExpanded})
    }
    return (
        <div className="footer__element">
            <div className="title__row" onClick={handleExpand}>
                <div className="element__title">{title}</div>
                {elementState.isExpanded ? <i className="fa-solid fa-minus"/> : <i className="fa-solid fa-plus"/>}
            </div>
            <div className="item__list">
                {
                    elementState.isExpanded && data.map(item => {
                        return <a key={item.id} href="">{item.text} {item.hasIcon && <i className="fa-solid fa-arrow-up-right-from-square"/>}</a>
                    })
                } 
            </div>
        </div>
    )
}


//<a key={`company-info-${item.id}`} href={item.link}>{item.text} {item.hasIcon && <i className={icon}/>}</a>