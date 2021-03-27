import React from "react"

import "@styles/global.scss"
import * as contactCardStyles from "./contactCard.module.scss"

// Images
import IconAddress from "@images/svg/iconAddress.inline.svg"
import IconClock from "@images/svg/iconClock.inline.svg"
import IconWhatsapp from "@images/svg/iconWhatsapp.inline.svg"
import logoImg from "@images/logo_img.png"

const ContactCard = () => {
    return (
        <article className={contactCardStyles.container}>
            <header>
                <div className={contactCardStyles.title}>
                    <h1>Dr. Cristiano Barcellos</h1>
                    <h2>Endocrinologia e Metabologia</h2>
                </div>
                <img src={logoImg} alt="Logo do Dr. Cristiano" />
            </header>
            <main>
                <div className={contactCardStyles.info}>
                    <IconAddress className={contactCardStyles.icon} />
                    <p>Rua Guaipá, 51, Conjunto 303, São Paulo-SP, CEP: 05089-001.</p>
                </div>
                <div className={contactCardStyles.info}>
                    <IconClock className={contactCardStyles.icon} />
                    <p>09:00 - 18:00 de Seg. a Sex.</p>
                </div>
                <div className={contactCardStyles.info}>
                    <IconWhatsapp className={contactCardStyles.icon} />
                    <p>(11) 99140-7988</p>
                </div>
            </main>
        </article>
    )
}

export default ContactCard
