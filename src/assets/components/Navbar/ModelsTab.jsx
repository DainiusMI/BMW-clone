import React, {useState, useEffect} from "react"
import modelsJSON from "./models.json"


export default function ModelsTab({goBack, hamburgerState}) {
    const [category, setCategory] = useState("all_models")
    function filterModels() {
        return modelsJSON.data.models_list.filter(model => model.category.includes(category))
    }

    console.log(filterModels())
    return (
        <div className="models__tab navbar__tab">
            <div className="navigate__back" onClick={goBack}>
                <i className="fa-sharp fa-solid fa-chevron-left"/>
                <p className="tab__name">{modelsJSON.title}</p>
            </div>
            {
                filterModels().map(model => {
                    return (
                        <div
                            key={model.id} 
                            className="model__tab__card">
                                <p className="model__name">{model.name}</p>
                        </div>
                    )
                })

            }
        </div>
    )
}