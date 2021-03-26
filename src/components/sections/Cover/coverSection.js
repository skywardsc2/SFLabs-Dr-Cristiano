import React from 'react'

import '@styles/global.scss'
import * as styles from "./coverSection.module.scss"
import Button from '@components/Button/button'

const CoverSection = () => {
    return (
        <div>
            <section className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.title}>
                        <h1 className={styles.thin}>Dr. </h1><h1>Cristiano Barcellos</h1>
                    </div>
                    <h2>Endocrinologia e Metabologia</h2>
                    <Button onClick={() => {alert('Clicou!')}} label="AGENDAR CONSULTA"/>
                </header>
            </section>
        </div>
    )
}

export default CoverSection