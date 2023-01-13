import React, {useState, useEffect} from "react"
import useImage from "../hooks/useImage"
import modelsJSON from "./models.json"




export default function ModelsTab({screenSize ,goBack, hamburgerState}) {

    const [category, setCategory] = useState("all_models")
    function filteredModels() {
        return modelsJSON.data.models_list.filter(model => model.category.includes(category))
    }
    function changeCategory(event) {
        const categoryTAG = event.target.dataset.category
        setCategory(categoryTAG)
    }
    function mobileCategorySelector() {
        const allCategories = modelsJSON.data.models_categories(category => category.title)
        console.log(allCategories)
        return (
            <div className="category__selector__container">
                <div className="categpry">

                </div>
                <div className="category active">

                </div>
                <div className="categpry">

                </div>
            </div>
        )
    }
    const selectedCategory = modelsJSON.data.models_categories.filter(item => item.category_tag == category)[0]
    return (
        <div className="navbar__tab models__tab">

            <div className="navigate__back__row" onClick={goBack}>
                <i className={screenSize !== "desktop" ? "fa-sharp fa-solid fa-chevron-left" : "fa-sharp fa-solid fa-xmark"}/>
                {
                    screenSize !== "desktop" &&
                    <p className="tab__name">{modelsJSON.title}</p>
                }
            </div>
            {
                screenSize !== "mobile" &&
                <div className="category__list__row">
                    <div className="category__list__container">
                    {
                        modelsJSON.data.models_categories.map(item => {
                            return <p   
                                        key={item.id}
                                        id={item.id}
                                        className={item.category_tag === category ? "selected__category" : null}
                                        data-category={item.category_tag}
                                        onClick={changeCategory}
                                    >{item.title}</p>
                        })
                    }
                    </div>
                    {
                        screenSize !== "mobile" && <button className="blue__button">Shop Inventory</button>
                    }
                </div>
            }
            {
                screenSize !== "mobile" &&
                <div className="selected__category__row">
                    <h2 className="category__title">{selectedCategory.inner.text}</h2>
                    {
                        selectedCategory.inner.link.text !== "" &&
                        <a href={selectedCategory.inner.link.url}>{selectedCategory.inner.link.text}</a>
                    }
                </div>
            }
            <div className="models__grid__container">
            {
                filteredModels().map(model => {
                    return (
                        <div
                            key={model.id} 
                            className="model__card">
                                <div 
                                    className="model__image" 
                                    style={{"--bg-image": `url("../Models/${model.imageName}")`}}
                                    //data-image={`../../../../public/Models/${model.imageName}`}
                                />
                                <p className="model__name">{model.name}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

//<ModelImage category={category} imageName={model.imageName}/>

function ModelImage({imageName}) {
    const { loading, error, image } = useImage({folderName:"Models", fileName: imageName})
    return (
        <div
            className="model__image" 
            style={{ backgroundImage: `url(${image})` }}
        />
    )
}
