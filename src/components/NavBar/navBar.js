import React from 'react'
// import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

//Images
import logoImg from '@images/logo_title.png'

import * as styles from './navBar.module.scss'

const NavBar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.innerHeader}>

                <Link to="/"><img className={styles.navBarLogo} src={logoImg} alt="Doctor's logo"/></Link>
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