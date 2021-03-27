import React from "react"

import * as buttonStyles from "./button.module.scss"

const Button = props => {
    return (
        <button onClick={props.onClick} className={buttonStyles.button}>
            <p className={buttonStyles.label}>{props.children}</p>
        </button>
    )
}

export default Button
