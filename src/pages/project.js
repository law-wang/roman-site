import React from "react"

import SEO from "../components/seo"
import Layout from "../components/threelayout"
import "../styles/general.scss"

const ProjectPage = () => {

    return (
        <Layout>
            <SEO title="Projects" />

            <section id="project">

                <div className="project-item">
                    <a href="https://spotlist.netlify.app/"><span className="title highlight">Spotlist</span></a>

                    <div><span className="highlight">Retrieve information about any Spotify playlist, built with React and Spotify API</span></div>
                </div>

                <div className="project-item">
                    <a href="https://thoughts.rence.la/"><span className="title highlight">Thoughts</span></a>

                    <div><span className="highlight">Type-foundry-esque platform for logging daily thoughts, powered by AWS Amplify</span></div>
                </div>

                <div className="project-item">
                    <a href="https://10of10s.netlify.app/"><span className="title highlight">10 Albums of 2010s</span></a>

                    <div><span className="highlight">Showcase of book-binding project for ART 006: Art of the Printed Word, brought online using the Last.fm API</span></div>
                </div>

                <div className="project-item">
                    <a href="https://www.planneduniverse.com/"><span className="title highlight">Planned Universe</span></a>

                    <div><span className="highlight">Blog for collecting floor plans built with Gatsby</span></div>
                </div>

                <div className="project-item">
                    <a href="https://chrome.google.com/webstore/detail/breathe-minimalist-new-ta/ngcbnnpkcfomilobdpffbkcabmehjnbm"><span className="title highlight">Breathe</span></a>

                    <div><span className="highlight">Minimalist new page extension that reminds one to breathe</span></div>
                </div>

                <div className="project-item">
                    <a href="https://inmydefense.glitch.me/"><span className="title highlight">In My Defense</span></a>
                </div>

                <div className="project-item">
                    <a href="https://chiaski.github.io/politic-hopefuls/"><span className="title highlight">The Politic Hopefuls</span></a>
                </div>
            </section>
        </Layout>
      )
}

export default ProjectPage