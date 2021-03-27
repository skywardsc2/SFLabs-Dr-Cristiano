import React from "react"

import "@styles/global.scss"
import * as diseaseCardStyles from "./diseaseCard.module.scss"

const DiseaseCard = props => {
    return (
        <article className={diseaseCardStyles.container}>
            <h3>{props.title}</h3>
            <p>{props.children}</p>
        </article>
    )
}

export default DiseaseCard
