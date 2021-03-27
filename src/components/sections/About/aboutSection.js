import React from "react"

// Styles
import "@styles/global.scss"
import * as aboutSectionStyles from "./aboutSection.module.scss"

// Components
import DiseaseCard from "@components/DiseaseCard/diseaseCard"

const AboutSection = () => {
    return (
        <div>
            <section className={aboutSectionStyles.container}>
                <div className={aboutSectionStyles.innerContainer}>
                    <header className={aboutSectionStyles.header}>
                        <h2>Quando procurar um Endocrinologista?</h2>
                        <p>
                            O Endocrinologista visa a reconhecer e tratar os problemas com os hormônios produzidos pelas
                            glândulas endócrinas, ajudando a restabelecer o equilíbrio do organismo.
                        </p>
                    </header>
                    <section className={aboutSectionStyles.diseasesSection}>
                        <h3>Algumas doenças causadas por alterações hormonais:</h3>
                        <div className={aboutSectionStyles.cardContainer}>
                            <DiseaseCard title="Diabetes">
                                Qualquer alteração na produção da insulina provoca o excesso de açúcar no sangue,
                                podendo caracterizar, assim, a diabetes. Se existe histórico familiar, ou se você
                                observar que está com muita sede, vontade de fazer xixi ou perda de peso aparente e sem
                                motivo, é hora de procurar o Endocrinologista.
                            </DiseaseCard>
                            <DiseaseCard title="Disfunções tireoidianas">
                                Disfunções na tireoide são também muito comuns nos consultórios endocrinológicos. O
                                hipertireoidismo é decorrente do funcionamento excessivo da tireoide; já o
                                hipotireoidismo ocorre quando há a produção insuficiente de hormônios.
                            </DiseaseCard>
                            <DiseaseCard title="Obesidade">
                                Em sua maioria, os casos de obesidade são causados pela má alimentação ou falta de
                                exercícios físicos. Acontece que algumas pessoas podem estar com distúrbios hormonais e,
                                então, acabam por não conseguir perder peso. Neste caso, o médico Endocrinologista fará
                                as investigações necessárias para descobrir porque seu organismo não está “funcionando
                                corretamente”.
                            </DiseaseCard>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default AboutSection
