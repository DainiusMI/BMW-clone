import React, {useState, useEffect} from "react"
import useImage from "../hooks/useImage"
import modelsJSON from "./models.json"




export default function ModelsTab({goBack, hamburgerState}) {

    const [category, setCategory] = useState("all_models")
    function filteredModels() {
        return modelsJSON.data.models_list.filter(model => model.category.includes(category))
    }
    function changeCategory(event) {
        const categoryTAG = event.target.dataset.category
        setCategory(categoryTAG)
    }
    return (
        <div className="models__tab navbar__tab">
            <div className="navigate__back" onClick={goBack}>
                <i className="fa-sharp fa-solid fa-chevron-left"/>
                <p className="tab__name">{modelsJSON.title}</p>
            </div>
            <div className="categories__row">
                {
                     modelsJSON.data.models_categories.map(category => {
                        return <p   
                                    key={category.id}
                                    data-category={category.category_tag}
                                    onClick={changeCategory}
                                >{category.title}</p>
                     })
                }
            </div>
            {
                filteredModels().map(model => {
                    return (
                        <div
                            key={model.id} 
                            className="model__tab__card">
                                <ModelImage category={category} imageName={model.imageName}/>
                                <p className="model__name">{model.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}


function ModelImage({imageName}) {
    const { loading, error, image } = useImage({folderName:"Models", fileName: imageName})
    return (
        <img 
            src={image}
            alt={imageName}
        />
    )
}
