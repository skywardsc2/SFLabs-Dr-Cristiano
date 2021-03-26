import React from 'react'
// import { StaticImage } from 'gatsby-plugin-image'

// Images
import photoPlaceholder from '@images/profile_placeholder.png'

import '@styles/global.scss'
import * as styles from './resumeSection.module.scss'

const resumeSection = () => {
    return (
        <div>
            <section className={styles.container}>
                <div className={styles.innerContainer}>
                    <h2 className={`sectionHeader`}>CURRÍCULO</h2>
                    <img src={photoPlaceholder} alt="Foto do profissional"/>
                </div>

            </section>
        </div>
    )
}

export default resumeSection
