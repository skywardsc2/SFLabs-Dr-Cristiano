import React from "react"

//Images
import mapMock from "@images/map.png"

import "@styles/global.scss"
import * as contactSectionStyles from "./contactSection.module.scss"

import ContactCard from "@components/ContactCard/contactCard"

const ContactSection = () => {
    return (
        <section className={contactSectionStyles.container}>
            <div className={contactSectionStyles.innerContainer}>
                <h2>CONTATO</h2>
                <div className={contactSectionStyles.horizontalFlex}>
                    <ContactCard />
                    <img src={mapMock} alt="Mapa do apontando para o endereço da clínica" />
                </div>
            </div>
        </section>
    )
}

export default ContactSection
