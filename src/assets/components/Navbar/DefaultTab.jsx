import React, {useState, useEffect} from "react";

export default function DefaultTab({tabName, dataObject, screenSize, goBack}) {
    

    const firstSection = [dataObject.data[0]]
    const secondSection = [dataObject.data[1], dataObject.data[2]]

    const icon = "fa-solid fa-arrow-up-right-from-square"
    const shevron = "fa-solid fa-chevron-right"

    const [inputState, setInputState] = useState(false)
    function setInputEnabled() {
        setInputState(true)
    }
    function setInputDisabled() {
        setInputState(false)
    }
    function controlInputState(item) {
        if (inputState === true) {
            return (
                <div className="tab__input__container">
                    <p className="tab__input__placeholder">{item.input.placeholder}</p>
                    <input id={`${item.id}_input`} type="text" autoFocus onBlur={setInputDisabled} />
                </div>
            )
        }
        return (
            <div className="dummy__input" onClick={setInputEnabled}>{item.input.placeholder}</div>
        )
    }

    function renderTabSection(arr, id) {
        return (
            <div id={id} className={`tab__section ${tabName}__section`}>
                {
                    arr.map(item => {
                        return (
                            <div key={`${tabName}${item.id}`} id={item.id} className="tab__section__item">
                                <h3 className="tab__section__title">{item.title}</h3>
                                {
                                    item.input && controlInputState(item)
                                }
                                {
                                    item.buttons !== null &&
                                    <div className="button__row">
                                        {
                                                item.buttons.map((button, idx) => {
                                                return <button key={`${item.title}-btn${idx}`} className={button.className}>{button.text}</button>
                                            })
                                        }
                                    </div>
                                }
                                {
                                    item.links !== null &&
                                    item.links.map((link, idx) => {
                                        return item.link_tag === "a" ?
                                                    <div key={`${item.title}-link${idx}`} className="tab__link">
                                                        <a href="" className="tab__link__text">{link.text}</a>
                                                        {link.icon && <i className={shevron}/>}
                                                    </div>
                                                    :
                                                    item.link_tag === "p" &&
                                                    <div key={`${item.title}-link${idx}`} className="tab__link">
                                                         <p className="tab__link__text">{link.text}</p>
                                                         {link.icon && <i className={icon}/>}
                                                    </div>
                                    })
                                }
                            </div>
                        )
                    })

                }
            </div>
        )
    }

    return (
        <div className={`default__tab ${dataObject.id}`} >
            {
                screenSize !== "desktop" && 
                <div className="navigate__back__row" onClick={goBack}>
                    <i className="fa-sharp fa-solid fa-chevron-left" />
                    <p className="tab__name">{dataObject.title}</p>
                </div>
            }
            {
                renderTabSection(firstSection, `${tabName}__first`)
            }
            {
                renderTabSection(secondSection, `${tabName}__second`)
            }
        </div>
    )
}


/*





*/