import React from "react"

import "@styles/global.scss"
import * as getInTouchSectionStyles from "./getInTouchSection.module.scss"
import Button from "@components/Button/button"

const GetInTouchSection = () => {
    return (
        <section className={getInTouchSectionStyles.container}>
            <div className={getInTouchSectionStyles.innerContainer}>
                <h2>ENTRE EM CONTATO!</h2>
                <p>Sinta-se à vontade para tirar dúvidas e agendar uma consulta!</p>
                <Button onClick={() => {}}>ENTRAR EM CONTATO</Button>
            </div>
        </section>
    )
}

export default GetInTouchSection
