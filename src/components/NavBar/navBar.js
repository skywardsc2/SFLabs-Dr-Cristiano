import React from "react"
// import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"

//Images
import logoImg from "@images/logo_title.png"

import * as navBarStyles from "./navBar.module.scss"

const NavBar = () => {
    return (
        <header className={navBarStyles.header}>
            <div className={navBarStyles.innerHeader}>
                <Link to="/">
                    <img className={navBarStyles.navBarLogo} src={logoImg} alt="Doctor's logo" />
                </Link>
                <nav>
                    <Link to="/">Início</Link>
                    <Link to="/">Currículo</Link>
                    <Link to="/">Sobre</Link>
                    <Link to="/">Contato</Link>
                </nav>
            </div>
        </header>
    )
}

export default NavBar
