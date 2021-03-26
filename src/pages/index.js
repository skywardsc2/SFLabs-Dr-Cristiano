import * as React from "react"

import Layout from "@components/Layout/layout"
import NavBar from "@components/NavBar/navBar"
import CoverSection from "@components/sections/Cover/coverSection"
import ResumeSection from "@components/sections/Resume/resumeSection"

const IndexPage = () => {
  return (
    <Layout>
      <NavBar/>
      <main>
        <CoverSection/>
        <ResumeSection/>
      </main>
    </Layout>
  )
}

export default IndexPage
