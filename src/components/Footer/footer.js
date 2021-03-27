import React from "react"
// import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"

//Images
import logoImg from "@images/logo_title.png"

import * as footerStyles from "./footer.module.scss"

const Footer = () => {
    return (
        <footer className={footerStyles.container}>
            <Link to="/">
                <img className={footerStyles.logo} src={logoImg} alt="Doctor's logo" />
            </Link>
        </footer>
    )
}

export default Footer
