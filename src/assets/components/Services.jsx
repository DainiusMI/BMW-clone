import React, {useState, useEffect} from "react";
import DynamicSection from "./DynamicSection";
import mainDataJSON from "../mainData.json"

const servicesJSON = mainDataJSON.services


const servicesData = [
    {   
        id: 1,
        title: "DOWNLOAD THE NEW MY BMW APP",
        text: "",
        isActive: true
    },
    {   
        id: 2,
        title: "INTRODUCING BMW ULTIMATE CARE OIL SERVICES",
        text: "3 yaers prepaid for $199 for BMWs that have reached 60 months or 60.000 miles.",
        isActive: false
    },
    {   
        id: 3,
        title: "DESIGNED FOR THE DRIVEN",
        text: "Ear up to 5X POINTS on eligible purchases.",
        isActive: false
    },
    {   
        id: 4,
        title: "BMW VALUE SERVICE",
        text: "Think we're expensive? Think again.",
        isActive: false
    },
    {   
        id: 5,
        title: "ORIGINAL BMW TIRES",
        text: "Take control of your ride.",
        isActive: false
    }
]

export default function Services({screenSize}) {
    const [serviceState, setServiceState] = useState(servicesJSON)
    const [activeService, setActiveService] = useState({
        id: 1,
        duration: 0,
        isPaused: false
    })
    const service = serviceState.find(service => service.isActive)
    return (
        <DynamicSection 
            screenSize={screenSize}
            sectionName="service"
            item={service}

            elementState={serviceState}
            setElementState={setServiceState}

            activeElement={activeService}
            setActiveElement={setActiveService}
        />
    )
}


/*


    return (
        <div 
            className="services"
            id={`service-${service.id}`}    
        >
            <p className="service__title">{service.title}</p>
            {
                service.text !== "" && <p className="service__text">{service.text}</p>
            }
            <button>Learn More</button>

            <Selector 
                state={serviceState}
                setState={setServiceState}
                active={activeService}
                setActive={setActiveService}
            />
        </div>
    )

    */