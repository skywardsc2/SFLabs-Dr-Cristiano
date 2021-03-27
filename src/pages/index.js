import * as React from "react"

import Layout from "@components/Layout/layout"
import NavBar from "@components/NavBar/navBar"
import CoverSection from "@components/sections/Cover/coverSection"
import ResumeSection from "@components/sections/Resume/resumeSection"
import GetInTouchSection from "@components/sections/GetInTouch/getInTouchSection"
import AboutSection from "@components/sections/About/aboutSection"
import ContactSection from "@components/sections/Contact/contactSection"

const IndexPage = () => {
    return (
        <Layout>
            <NavBar />
            <main>
                <CoverSection />
                <ResumeSection />
                <GetInTouchSection />
                <AboutSection />
                <ContactSection />
            </main>
        </Layout>
    )
}

export default IndexPage
