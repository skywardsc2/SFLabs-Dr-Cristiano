import React from "react"

import * as buttonStyles from "./button.module.scss"

const Button = props => {
    return (
        <button onClick={props.onClick} className={buttonStyles.button}>
            <div className={buttonStyles.label}>{props.children}</div>
        </button>
    )
}

export default Button
