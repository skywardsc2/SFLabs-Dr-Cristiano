import React from "react"

import "@styles/global.scss"
import * as coverSectionStyles from "./coverSection.module.scss"
import Button from "@components/Button/button"

const CoverSection = () => {
    return (
        <section className={coverSectionStyles.container}>
            <header className={coverSectionStyles.header}>
                <div className={coverSectionStyles.title}>
                    <h1 className={coverSectionStyles.thin}>Dr. </h1>
                    <h1>Cristiano Barcellos</h1>
                </div>
                <h2>Endocrinologia e Metabologia</h2>
                <Button onClick={() => {}}>AGENDAR CONSULTA</Button>
            </header>
        </section>
    )
}

export default CoverSection
