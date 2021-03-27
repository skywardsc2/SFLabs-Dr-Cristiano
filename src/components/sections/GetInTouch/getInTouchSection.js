import React from "react"

import "@styles/global.scss"
import * as getInTouchSectionstyles from "./getInTouchSection.module.scss"
import Button from "@components/Button/button"

const getInTouchSection = () => {
    return (
        <div>
            <section className={getInTouchSectionstyles.container}>
                <div className={getInTouchSectionstyles.innerContainer}>
                    <h2 className={getInTouchSectionstyles.title}>ENTRE EM CONTATO!</h2>
                    <p>Sinta-se à vontade para tirar dúvidas e agendar uma consulta!</p>
                    <Button onClick={() => {}}>ENTRAR EM CONTATO</Button>
                </div>
            </section>
        </div>
    )
}

export default getInTouchSection
