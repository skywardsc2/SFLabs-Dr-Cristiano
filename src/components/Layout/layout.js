/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

import * as layoutStyles from "./layout.module.scss"

const Layout = props => {
    return <div className={layoutStyles.container}>{props.children}</div>
}

export default Layout
