import React from 'react'
// import { StaticImage } from 'gatsby-plugin-image'

// Images
import photoPlaceholder from '@images/profile_placeholder.png'

// Styles
import '@styles/global.scss'
import * as styles from './resumeSection.module.scss'

// Components
import ResumeCard from '@components/ResumeCard/resumeCard'

const resumeSection = () => {
    return (
        <div>
            <section className={styles.container}>
                <div className={styles.innerContainer}>
                    <h2 className={styles.title}>CURRÍCULO</h2>
                    <img className={styles.photo} src={photoPlaceholder} alt="Foto do profissional"/>
                    <div className={styles.cardContainer}>
                        <ResumeCard icon="academic">
                            Formado pela Faculdade de Ciências Médicas de Santos em 1998.
                        </ResumeCard>
                        <ResumeCard icon="certificate">
                            Formado pela Faculdade de Ciências Médicas de Santos em 1998.
                        </ResumeCard>
                        <ResumeCard icon="academic">
                            Formado pela Faculdade de Ciências Médicas de Santos em 1998.
                        </ResumeCard>
                        <ResumeCard icon="teacher">
                            Formado pela Faculdade de Ciências Médicas de Santos em 1998.
                        </ResumeCard>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default resumeSection
