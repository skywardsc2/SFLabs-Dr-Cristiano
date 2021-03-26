import React from 'react'

import * as styles from './button.module.scss'

const Button = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className={styles.button}>
            <p className={styles.label}>{label}</p>
        </button>
    )
}

export default Button