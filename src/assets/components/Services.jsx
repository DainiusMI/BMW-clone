import React, {useState, useEffect} from "react";
import DynamicSection from "./DynamicSection";
import mainDataJSON from "../mainData.json"

const servicesJSON = mainDataJSON.services.data

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
