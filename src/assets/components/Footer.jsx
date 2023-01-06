import React, {useEffect} from "react";


import BMWDifference from "./Footer/the_bmw_difference.json"
import companyInfoData from "./Footer/company_info.json"


export default function Footer() {

    const icon = "fa-solid fa-arrow-up-right-from-square"
    const [footerState, setFooterState] = React.useState({
        isMobile: true,
        openedTab: "CompanyInfo"
    })
    console.log(BMWDifference)
    return (
        <footer className="footer">
            <div className="discover">
                
                


            </div>

            <div className="buy">

            </div>
            
        </footer>
    )
}


function FooterElement({title}) {
    const icon = "fa-solid fa-arrow-up-right-from-square"
    const isMobile = true

    function handleExpand(event) {

    }
    return (
        <div className="element__container">
            <div className="title__row" onClick={handleExpand}>
                <div className="element__title">{title}</div>
                {isMobile && <i className={icon}/>}
            </div>
        </div>
    )
}

//<a key={`company-info-${item.id}`} href={item.link}>{item.text} {item.hasIcon && <i className={icon}/>}</a>