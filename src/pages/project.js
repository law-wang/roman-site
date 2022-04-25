import React from "react"

import SEO from "../components/seo"
import Layout from "../components/threelayout"
import "../styles/general.scss"

const ProjectPage = () => {

    return (
        <Layout>
            <SEO title="Projects" />

            <div className="links">
                <a href="https://chrome.google.com/webstore/detail/breathe-minimalist-new-ta/ngcbnnpkcfomilobdpffbkcabmehjnbm" target="_blank" rel="noopener noreferrer">Breathe&#x2197;&#xFE0E;</a> minimalist new page extension

                <a href="https://spotlist.netlify.app/" target="_blank" rel="noopener noreferrer">Spotlist&#x2197;&#xFE0E;</a> get information about Spotify playlist

                <a href="https://thoughts.rence.la/" target="_blank" rel="noopener noreferrer">thoughts&#x2197;&#xFE0E;</a> logging daily thoughts

                <a href="https://inmydefense.glitch.me/" target="_blank" rel="noopener noreferrer">inmydefense&#x2197;&#xFE0E;</a> my life
            </div>
        </Layout>
      )
}

export default ProjectPage