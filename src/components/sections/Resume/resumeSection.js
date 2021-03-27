import React from "react"
// import { StaticImage } from 'gatsby-plugin-image'

// Images
import photoPlaceholder from "@images/profile_placeholder.png"

// Styles
import "@styles/global.scss"
import * as resumeSectionStyles from "./resumeSection.module.scss"

// Components
import ResumeCard from "@components/ResumeCard/resumeCard"

const ResumeSection = () => {
    return (
        <section className={resumeSectionStyles.container}>
            <div className={resumeSectionStyles.innerContainer}>
                <h2 className={resumeSectionStyles.title}>CURRÍCULO</h2>
                <img className={resumeSectionStyles.photo} src={photoPlaceholder} alt="Foto do profissional" />
                <div className={resumeSectionStyles.cardContainer}>
                    <ResumeCard icon="academic">
                        Formado pela Faculdade de Ciências Médicas de Santos em 1998.
                    </ResumeCard>
                    <ResumeCard icon="certificate">
                        Possui título de Especialista em Endocrinologia conferido pela Sociedade Brasileira de
                        Endocrinologia e Metabologia (SBEM) em 2003.
                    </ResumeCard>
                    <ResumeCard icon="academic">
                        Doutorado em Endocrinologia pela Faculdade de Medicina da Universidade de São Paulo (USP) em
                        2008.
                    </ResumeCard>
                    <ResumeCard icon="teacher">
                        Professor e Pesquisador da Faculdade de Ciências Médicas da Pontifícia Universidade Católica
                        de São Paulo (PUC-SP).
                    </ResumeCard>
                </div>
            </div>
        </section>
    )
}

export default ResumeSection
